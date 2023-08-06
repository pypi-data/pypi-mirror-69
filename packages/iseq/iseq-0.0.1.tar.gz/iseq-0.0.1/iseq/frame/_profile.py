from __future__ import annotations

from time import time
from math import log
from typing import List, Type

from hmmer_reader import HMMERModel

from imm import (
    Interval,
    MuteState,
    Path,
    SequenceABC,
    Sequence,
    lprob_normalize,
    lprob_zero,
    lprob_add,
)
from nmm import (
    AminoAlphabet,
    AminoTable,
    BaseAlphabet,
    BaseTable,
    CodonProb,
    CodonTable,
    FrameState,
    GeneticCode,
    codon_iter,
)

from .._model import EntryDistr, Transitions
from .._profile import Profile
from ._fragment import FrameFragment
from ._typing import (
    FrameAltModel,
    FrameNode,
    FrameNullModel,
    FrameSearchResults,
    FrameSpecialNode,
    FrameStep,
)

__all__ = ["FrameProfile", "create_profile"]

_ELAPSED = {"viterbi": 0.0}


class FrameProfile(Profile[BaseAlphabet, FrameState]):
    @classmethod
    def create(
        cls: Type[FrameProfile],
        factory: _FrameStateFactory,
        null_aminot: AminoTable,
        core_nodes: List[FrameNode],
        core_trans: List[Transitions],
    ) -> FrameProfile:

        base_alphabet = factory.genetic_code.base_alphabet

        R = factory.create(b"R", null_aminot)
        null_model = FrameNullModel.create(R)

        special_node = FrameSpecialNode(
            S=MuteState.create(b"S", base_alphabet),
            N=factory.create(b"N", null_aminot),
            B=MuteState.create(b"B", base_alphabet),
            E=MuteState.create(b"E", base_alphabet),
            J=factory.create(b"J", null_aminot),
            C=factory.create(b"C", null_aminot),
            T=MuteState.create(b"T", base_alphabet),
        )

        alt_model = FrameAltModel.create(
            special_node, core_nodes, core_trans, EntryDistr.UNIFORM,
        )
        # alt_model.set_fragment_length(self._special_transitions)
        return cls(base_alphabet, null_model, alt_model, False)

    @classmethod
    def create2(
        cls: Type[FrameProfile],
        alphabet: BaseAlphabet,
        null_model: FrameNullModel,
        alt_model: FrameAltModel,
        hmmer3_compat: bool,
    ):
        return cls(alphabet, null_model, alt_model, hmmer3_compat)

    @property
    def null_model(self) -> FrameNullModel:
        return self._null_model

    @property
    def alt_model(self) -> FrameAltModel:
        return self._alt_model

    def search(
        self, sequence: SequenceABC[BaseAlphabet], window_length: int = 0
    ) -> FrameSearchResults:

        # special_trans = self._get_target_length_model(len(sequence))
        # self._alt_model.set_special_transitions(special_trans)
        # self._null_model.set_special_transitions(special_trans)

        # alt_results = self.alt_model.viterbi(sequence, window_length)
        self._set_target_length_model(len(sequence))
        start = time()
        if window_length == -1:
            window_length = 2 * 3 * self._alt_model.core_length
        alt_results = self._alt_model.viterbi(sequence, window_length)
        _ELAPSED["viterbi"] += time() - start

        def create_fragment(
            seq: SequenceABC[BaseAlphabet], path: Path[FrameStep], homologous: bool
        ):
            return FrameFragment(seq, path, homologous)

        search_results = FrameSearchResults(sequence, create_fragment)

        for alt_result in alt_results:
            subseq = alt_result.sequence
            # TODO: temporary fix for reading from binary file
            # and consequently alt and null model having different alphabets
            s = Sequence.create(bytes(subseq), self._null_model.hmm.alphabet)
            score0 = self._null_model.likelihood(s)
            # score0 = self._null_model.likelihood(subseq)
            score1 = alt_result.loglikelihood
            score = score1 - score0
            window = Interval(subseq.start, subseq.start + len(subseq))
            search_results.append(score, window, alt_result.path, score1)

        return search_results


def create_profile(
    reader: HMMERModel, base_abc: BaseAlphabet, epsilon: float = 0.1
) -> FrameProfile:

    amino_abc = AminoAlphabet.create(reader.alphabet.encode(), b"X")

    lprobs = lprob_normalize(list(reader.insert(0).values())).tolist()
    null_aminot = AminoTable.create(amino_abc, lprobs)
    factory = _FrameStateFactory(GeneticCode(base_abc, amino_abc), epsilon)

    nodes: List[FrameNode] = []
    for m in range(1, reader.M + 1):
        lprobs = lprob_normalize(list(reader.match(m).values())).tolist()
        M = factory.create(f"M{m}".encode(), AminoTable.create(amino_abc, lprobs))

        lprobs = lprob_normalize(list(reader.insert(m).values())).tolist()
        I = factory.create(f"I{m}".encode(), AminoTable.create(amino_abc, lprobs))

        D = MuteState.create(f"D{m}".encode(), base_abc)

        nodes.append(FrameNode(M, I, D))

    trans: List[Transitions] = []
    for m in range(0, reader.M + 1):
        t = Transitions(**reader.trans(m))
        t.normalize()
        trans.append(t)

    return FrameProfile.create(factory, null_aminot, nodes, trans)


class _FrameStateFactory:
    def __init__(
        self, gcode: GeneticCode, epsilon: float,
    ):
        self._gcode = gcode
        self._epsilon = epsilon

    def create(self, name: bytes, aminot: AminoTable) -> FrameState:
        codonp = _create_codon_prob(aminot, self._gcode)
        baset = _create_base_table(codonp)
        codont = CodonTable.create(codonp)
        return FrameState.create(name, baset, codont, self._epsilon)

    @property
    def genetic_code(self) -> GeneticCode:
        return self._gcode

    @property
    def epsilon(self) -> float:
        return self._epsilon


def _create_base_table(codonp: CodonProb):
    base_abc = codonp.alphabet
    base_lprob = {base: lprob_zero() for base in base_abc.symbols}
    norm = log(3)
    for codon in codon_iter(base_abc):
        lprob = codonp.get_lprob(codon)
        triplet = codon.symbols

        base_lprob[triplet[0]] = lprob_add(base_lprob[triplet[0]], lprob - norm)
        base_lprob[triplet[1]] = lprob_add(base_lprob[triplet[1]], lprob - norm)
        base_lprob[triplet[2]] = lprob_add(base_lprob[triplet[2]], lprob - norm)

    return BaseTable.create(base_abc, [base_lprob[base] for base in base_abc.symbols])


def _create_codon_prob(aminot: AminoTable, gencode: GeneticCode) -> CodonProb:
    codonp = CodonProb.create(gencode.base_alphabet)

    codon_lprobs = []
    lprob_norm = lprob_zero()
    for i in range(len(aminot.alphabet.symbols)):
        aa = aminot.alphabet.symbols[i : i + 1]
        lprob = aminot.lprob(aa)

        codons = gencode.codons(aa)
        if len(codons) == 0:
            continue

        norm = log(len(codons))
        for codon in codons:
            codon_lprobs.append((codon, lprob - norm))
            lprob_norm = lprob_add(lprob_norm, codon_lprobs[-1][1])

    for codon, lprob in codon_lprobs:
        codonp.set_lprob(codon, lprob - lprob_norm)

    return codonp
