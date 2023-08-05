"""
Utilities for harmonizing tandem repeat VCF records.

Handles VCFs generated by various TR genotyping tools
"""

import enum
import os
import re
import sys
import warnings
from typing import Union

import numpy as np

if __name__ == "tr_harmonizer":
    sys.path.insert(0, os.path.join(
        os.path.dirname(os.path.abspath(__file__)), "..", "trtools", "utils")
    )
    import utils
else:
    import trtools.utils.utils as utils  # pragma: no cover

# List of supported VCF types
# TODO: add Beagle
# TODO: add support for tool version numbers
# TODO: add EH support for getting ref allele sequence genotypes from fasta
VCFTYPES = enum.Enum('Types', ['gangstr', 'advntr', 'hipstr', 'eh', 'popstr'])


def _ToVCFType(vcftype: Union[str, VCFTYPES]):
    """
    Convert the input to a VCFTYPE object.

    If it is a string, look up the VCFTYPE object.
    If it is already a VCFTYPE, return it.
    Otherwise, error
    """
    if isinstance(vcftype, str):
        if vcftype not in VCFTYPES.__members__:
            raise ValueError(("{} is not an excepted TR vcf type. "
                              "Expected one of {}").format(
                                  vcftype, list(VCFTYPES.__members__)))
        return VCFTYPES[vcftype]
    elif isinstance(vcftype, VCFTYPES):
        return vcftype
    else:
        raise TypeError(("{} (of type {}) is not a vcftype"
                        .format(vcftype, type(vcftype))))


def MayHaveImpureRepeats(vcftype: VCFTYPES):
    """
    Determine if any of the alleles in this VCF may contain impure repeats.

    Specifically, impure repeats include:
    * impurities in the underlying sequence (e.g. AAATAAAAA)
    * partial repeats (e.g. AATAATAATAA)

    This is a guarantee that the caller attempted to call impure repeats,
    not that it found any. It also does not guarantee that
    all impurities present were identified and called.

    Returns
    -------
    bool
      Indicates whether repeat sequences may be impure
    """
    vcftype = _ToVCFType(vcftype)
    if vcftype == VCFTYPES.gangstr:
        return False
    if vcftype == VCFTYPES.hipstr:
        return True
    if vcftype == VCFTYPES.advntr:
        return True
    if vcftype == VCFTYPES.popstr:
        return True
    if vcftype == VCFTYPES.eh:
        return False  # TODO check this

    # Can't cover this line because it is future proofing.
    # (It explicitly is not reachable now,
    # would only be reachable if VCFTYPES is expanded in the future)
    _UnexpectedTypeError(vcftype)  # pragma: no cover


def HasLengthRefGenotype(vcftype: VCFTYPES):
    """
    Determine if the reference alleles of variants are given by length.

    If True, then reference alleles for all variants produced by this
    caller are specified by length and not by sequence. Sequences are
    fabricated according to Utils.FabricateAllele().

    If True, then HasLengthAltGenotypes() will also be true

    Returns
    -------
    bool
      Indicates whether ref alleles are specified by length
    """
    vcftype = _ToVCFType(vcftype)
    if vcftype == VCFTYPES.gangstr:
        return False
    if vcftype == VCFTYPES.hipstr:
        return False
    if vcftype == VCFTYPES.advntr:
        return False
    if vcftype == VCFTYPES.popstr:
        return False
    if vcftype == VCFTYPES.eh:
        return True  # TODO check this

    # Can't cover this line because it is future proofing.
    # (It explicitly is not reachable now,
    # would only be reachable if VCFTYPES is expanded in the future)
    _UnexpectedTypeError(vcftype)  # pragma: no cover


def HasLengthAltGenotypes(vcftype: VCFTYPES):
    """
    Determine if the alt alleles of variants are given by length.

    If True, then alt alleles for all variants produced by this
    caller are specified by length and not by sequence. Sequences are
    fabricated according to Utils.FabricateAllele().

    Returns
    -------
    bool
      Indicates whether alt alleles are specified by length
    """
    vcftype = _ToVCFType(vcftype)
    if vcftype == VCFTYPES.gangstr:
        return False
    if vcftype == VCFTYPES.hipstr:
        return False
    if vcftype == VCFTYPES.advntr:
        return False
    if vcftype == VCFTYPES.popstr:
        return True
    if vcftype == VCFTYPES.eh:
        return True

    # Can't cover this line because it is future proofing.
    # (It explicitly is not reachable now,
    # would only be reachable if VCFTYPES is expanded in the future)
    _UnexpectedTypeError(vcftype)  # pragma: no cover


def _UnexpectedTypeError(vcftype: VCFTYPES):
    raise ValueError("self.vcftype is the unexpected type {}"
                     .format(vcftype))


def InferVCFType(vcffile):
    """
    Infer the genotyping tool used to create the VCF.

    When we can, infer from header metadata.
    Otherwise, try to infer the type from the ALT field.

    Parameters
    ----------
    vcffile : vcf.Reader

    Returns
    -------
    vcftype : enum
       Type of the VCF file. Must be included in VCFTYPES

    Notes
    -----
    Some notes on the pecularities of each VCF type
    GangSTR:
       Does not include sequence impurities or partial repeats.
       Full REF and ALT strings given
    HipSTR:
       Full REF and ALT strings given
       May contain sequence impurities and partial repeats
       Sometimes includes non-repeat flanks in the original genotypes,
       which are trimmed off during harmonization.
       In that case, the original alleles can be accessed through
       the GetFullStringGenotype() method on the returned
       TRRecord objects.
       If the alt alleles have differently sized flanks than the ref allele
       then those alt alleles will be improperly trimmed.
       HipSTR reports the motif length but not the motif itself,
       so the motif is inferred from the sequences. This is usually
       but not always the correct motif.
    adVNTR:
       Full REF and ALT strings given.
       Uses its own ID convention that can change from run to run.
       May contain impurities or partial repeats?
    popSTR:
       Includes full REF string, which can contain impurities.
       Alt alleles are only reported as lengths, sequences are
       fabricated with Utils.FabricateAllele
    EH:
       Both REF and ALT alleles are only reported as lengths.
       Sequences are fabricated with Utils.FabricateAllele
    """
    possible_vcf_types = set()
    for key, value in vcffile.metadata.items():
        # Sometimes value is a list of values,
        # other times it is the value itself
        if type(value) == list:
            values = value
        else:
            values = {value}
        for value in values:
            if key.upper() == 'COMMAND' and 'GANGSTR' in value.upper():
                possible_vcf_types.add(VCFTYPES.gangstr)
            if key.upper() == 'COMMAND' and 'HIPSTR' in value.upper():
                possible_vcf_types.add(VCFTYPES.hipstr)
            if key.upper() == 'SOURCE' and 'ADVNTR' in value.upper():
                possible_vcf_types.add(VCFTYPES.advntr)
            if key.upper() == 'SOURCE' and 'POPSTR' in value.upper():
                possible_vcf_types.add(VCFTYPES.popstr)
        for key in vcffile.alts:
            if re.search(r'STR\d+', key.upper()):
                possible_vcf_types.add(VCFTYPES.eh)

    if len(possible_vcf_types) == 0:
        raise TypeError('Could not identify the type of this vcf')

    if len(possible_vcf_types) > 1:
        raise TypeError(('Confused - this vcf looks like it could have '
                          'been any of the types: {}'
                          .format(possible_vcf_types)))

    return next(iter(possible_vcf_types))


def HarmonizeRecord(vcftype: VCFTYPES, vcfrecord):
    """
    Harmonize VCF record to the allele string representation.

    Parameters
    ----------
    vcfrecord : vcf.model._Record
        A PyVCF record object

    Returns
    -------
    TRRecord
        A harmonized TRRecord object
    """
    vcftype = _ToVCFType(vcftype)
    if vcftype == VCFTYPES.gangstr:
        return _HarmonizeGangSTRRecord(vcfrecord)
    if vcftype == VCFTYPES.hipstr:
        return _HarmonizeHipSTRRecord(vcfrecord)
    if vcftype == VCFTYPES.advntr:
        return _HarmonizeAdVNTRRecord(vcfrecord)
    if vcftype == VCFTYPES.eh:
        return _HarmonizeEHRecord(vcfrecord)
    if vcftype == VCFTYPES.popstr:
        return _HarmonizePopSTRRecord(vcfrecord)

    # Can't cover this line because it is future proofing.
    # (It explicitly is not reachable now,
    # would only be reachable if VCFTYPES is expanded in the future)
    _UnexpectedTypeError(vcftype)  # pragma: no cover


def _HarmonizeGangSTRRecord(vcfrecord):
    """
    Turn a vcf.model._Record with GangSTR content into a TRRecord.

    Parameters
    ----------
    vcfrecord : vcf.model._Record

    Returns
    -------
    TRRecord
    """
    if 'RU' not in vcfrecord.INFO:
        raise TypeError("This is not a GangSTR record")
    if 'VID' in vcfrecord.INFO:
        raise TypeError("Trying to read an AdVNTR record as a GangSTR record")
    if 'VARID' in vcfrecord.INFO:
        raise TypeError("Trying to read an EH record as a GangSTR record")
    ref_allele = vcfrecord.REF.upper()
    if vcfrecord.ALT[0] is not None:
        alt_alleles = _UpperCaseAlleles(vcfrecord.ALT)
    else:
        alt_alleles = []
    motif = vcfrecord.INFO["RU"].upper()
    record_id = None

    return TRRecord(vcfrecord, ref_allele, alt_alleles, motif, record_id)


def _HarmonizeHipSTRRecord(vcfrecord):
    """
    Turn a vcf.model._Record with HipSTR content into a TRRecord.

    Parameters
    ----------
    vcfrecord : vcf.model._Record

    Returns
    -------
    TRRecord
    """
    if ('START' not in vcfrecord.INFO
            or 'END' not in vcfrecord.INFO
            or 'PERIOD' not in vcfrecord.INFO):
        raise TypeError("This is not a HipSTR record")

    # determine full alleles and trimmed alleles
    pos = int(vcfrecord.POS)
    start_offset = int(vcfrecord.INFO['START']) - pos
    pos_end_offset = int(vcfrecord.INFO['END']) - pos
    neg_end_offset = pos_end_offset + 1 - len(vcfrecord.REF)

    if start_offset == 0 and neg_end_offset == 0:
        full_alleles = None
    else:
        if vcfrecord.ALT[0] is None:
            full_alts = []
        else:
            full_alts = _UpperCaseAlleles(vcfrecord.ALT)

        full_alleles = (vcfrecord.REF.upper(),
                        full_alts)

    # neg_end_offset is the number of flanking non repeat bp to remove
    # from the end of each allele
    # e.g. 'AAAT'[0:-1] == 'AAA'
    # however, if neg_end_offset == 0, then we would get
    # 'AAAA'[1:0] == '' which is not the intent
    # so we need an if statement to instead write 'AAAA'[0:]
    # which gives us 'AAAA'
    if neg_end_offset == 0:
        ref_allele = vcfrecord.REF[start_offset:].upper()
        if vcfrecord.ALT[0] is not None:
            alt_alleles = []
            for alt in vcfrecord.ALT:
                alt_alleles.append(str(alt)[start_offset:].upper())
        else:
            alt_alleles = []
    else:
        ref_allele = vcfrecord.REF[start_offset:neg_end_offset].upper()
        if vcfrecord.ALT[0] is not None:
            alt_alleles = []
            for alt in vcfrecord.ALT:
                alt_alleles.append(
                    str(alt)[start_offset:neg_end_offset].upper()
                )
        else:
            alt_alleles = []

    # Get the motif.
    # Hipstr doesn't tell us this explicitly, so figure it out
    motif = utils.InferRepeatSequence(ref_allele[start_offset:],
                                      vcfrecord.INFO["PERIOD"])
    record_id = vcfrecord.ID

    return TRRecord(vcfrecord,
                    ref_allele,
                    alt_alleles,
                    motif,
                    record_id,
                    full_alleles=full_alleles)


def _HarmonizeAdVNTRRecord(vcfrecord):
    """
    Turn a vcf.model._Record with adVNTR content into a TRRecord.

    Parameters
    ----------
    vcfrecord : vcf.model._Record

    Returns
    -------
    TRRecord
    """
    if 'RU' not in vcfrecord.INFO or 'VID' not in vcfrecord.INFO:
        raise TypeError("This is not an AdVNTR record")
    ref_allele = vcfrecord.REF.upper()
    if vcfrecord.ALT[0] is not None:
        alt_alleles = _UpperCaseAlleles(vcfrecord.ALT)
    else:
        alt_alleles = []
    motif = vcfrecord.INFO["RU"].upper()
    record_id = vcfrecord.INFO["VID"]

    return TRRecord(vcfrecord, ref_allele, alt_alleles, motif, record_id)


def _HarmonizePopSTRRecord(vcfrecord):
    """
    Turn a vcf.model._Record with popSTR content into a TRRecord.

    Parameters
    ----------
    vcfrecord : vcf.model._Record

    Returns
    -------
    TRRecord
    """
    if 'Motif' not in vcfrecord.INFO:
        raise TypeError("This is not a PopSTR record")
    ref_allele = vcfrecord.REF.upper()
    motif = vcfrecord.INFO["Motif"].upper()
    record_id = vcfrecord.ID

    if vcfrecord.ALT[0] is not None:
        alt_allele_lengths = []
        for alt in vcfrecord.ALT:
            alt = str(alt)
            if alt[0] != "<" or alt[-1] != ">":
                raise TypeError("This record does not look like a PopSTR"
                                " record. Alt alleles were not formatted"
                                " as expected")
            alt_allele_lengths.append(float(alt[1:-1]))
    else:
        alt_allele_lengths = []

    return TRRecord(vcfrecord,
                    ref_allele,
                    None,
                    motif,
                    record_id,
                    alt_allele_lengths=alt_allele_lengths)


def _HarmonizeEHRecord(vcfrecord):
    """
    Turn a vcf.model._Record with EH content into a TRRecord.

    Parameters
    ----------
    vcfrecord : vcf.model._Record

    Returns
    -------
    TRRecord
    """
    if 'VARID' not in vcfrecord.INFO or 'RU' not in vcfrecord.INFO:
        raise TypeError("This is not an ExpansionHunter record")
    record_id = vcfrecord.INFO["VARID"]
    motif = vcfrecord.INFO["RU"].upper()
    ref_allele_length = int(vcfrecord.INFO["RL"]) / len(motif)
    if vcfrecord.ALT[0] is not None:
        alt_allele_lengths = []
        for alt in vcfrecord.ALT:
            alt = str(alt)
            if alt[:4] != "<STR" or alt[-1] != ">":
                raise TypeError("This record does not look like an EH "
                                " record. Alt alleles were not formatted"
                                " as expected")
            alt_allele_lengths.append(float(alt[4:-1]))
    else:
        alt_allele_lengths = []

    return TRRecord(vcfrecord, None, None, motif, record_id,
                    ref_allele_length=ref_allele_length,
                    alt_allele_lengths=alt_allele_lengths)


def _UpperCaseAlleles(alleles):
    """Convert the list of allele strings to upper case."""
    upper_alleles = []
    for allele in alleles:
        upper_alleles.append(str(allele).upper())
    return upper_alleles


class TRRecordHarmonizer:
    """
    Class producing a uniform interface for accessing TR VCF records.

    Produces the same output interface regardless of the
    tool that created the input VCF.

    The main purpose of this class is to infer which tool
    a VCF came from, and appropriately convert its records
    to TRRecord objects.

    This class provides the object oriented paradigm for iterating
    through a TR vcf. If you wish to use the functional paradigm and
    provide the vcf.model._Record objects yourself, use the top-level
    functions in this module.

    Parameters
    ----------
    vcffile : vcf.Reader instance
    vcftype : {'auto', 'gangstr', 'advntr', 'hipstr', 'eh', 'popstr'}, optional
       Type of the VCF file. Default='auto'.
       If vcftype=='auto', attempts to infer the type.

    Attributes
    ----------
    vcffile : vcf.Reader instance
    vcftype : enum
       Type of the VCF file. Must be included in VCFTYPES
    """

    def __init__(self, vcffile: Union[str, VCFTYPES], vcftype="auto"):
        self.vcffile = vcffile
        if vcftype == "auto":
            self.vcftype = InferVCFType(vcffile)
        else:
            self.vcftype = _ToVCFType(vcftype)
            inferred_type = InferVCFType(vcffile)
            if inferred_type != self.vcftype:
                raise TypeError("Trying to read a {} vcf as a {} vcf".format(
                    inferred_type, self.vcftype))

    def MayHaveImpureRepeats(self):
        """
        Determine if any of the alleles in this VCF may contain impure repeats.

        See Also
        --------
        tr_harmonizer.MayHaveImpureRepeats
        """
        global MayHaveImpureRepeats
        return MayHaveImpureRepeats(self.vcftype)

    def HasLengthRefGenotype(self):
        """
        Determine if the reference alleles of variants are given by length.

        See Also
        --------
        tr_harmonizer.HasLengthRefGenotype
        """
        global HasLengthRefGenotype
        return HasLengthRefGenotype(self.vcftype)

    def HasLengthAltGenotypes(self):
        """
        Determine if the alt alleles of variants are given by length.

        See Also
        --------
        tr_harmonizer.HasLengthAltGenotypes
        """
        global HasLengthAltGenotypes
        return HasLengthAltGenotypes(self.vcftype)

    def __iter__(self):
        """Iterate over TRRecords produced from the underlying vcf."""
        for record in self.vcffile:
            yield HarmonizeRecord(self.vcftype, record)


class TRRecord:
    """
    Analagous to vcf.model._Record, except specialized for TR fields.

    Allows downstream functions to be agnostic to the
    genotyping tool used to create the record.

    Parameters
    ----------
    vcfrecord : vcf.model._Record
       PyVCF Record object used to generate the metadata
    ref_allele : str
       Reference allele string
    alt_alleles : list of str
       List of alternate allele strings
    motif : str
       Repeat unit
    record_id : str
       Identifier for the record

    Attributes
    ----------
    vcfrecord : vcf.model._Record
       The Pyvcf Record object used to generate the metadata
    ref_allele : str
       Reference allele string. Gets converted to uppercase
       e.g. ACGACGACG
    alt_allele : list of str
       List of alternate allele strings
    motif : str
       Repeat unit
    record_id : str
       Identifier for the record

    Other Parameters
    ----------------
    full_alleles : (str, [str])
        A tuple of string genotypes (ref_allele, [alt_alleles])
        where each allele may contain any number of flanking
        basepairs in addition to containing the tandem repeat.
        If set, these can be accessed through 'GetFullStringGenotype'
    alt_allele_lengths : [str]
        The lengths of each of the alt alleles, in order.
        Should only be passed when only the lengths of the alt alleles
        were measured and not the sequences. Thus must be measured in
        number of copies of repeat unit, NOT the allele length in base pairs.

        If this is passed, the alt_alleles parameter to the constructor must
        be set to None and the alt_alleles attribute of the record will be set
        to fabricated alleles (see utils.FabricateAllele)
    ref_allele_length : [str]
        like alt_allele_lengths, but for the reference allele.
        If this is passed, alt_allele_lengths must also be passed

    Notes
    -----
    Alleles are stored as upper case strings with all the repeats written out.
    Alleles may contain partial repeat copies or impurities.
    This class will attempt to make sure alleles do not contain any extra base
    pairs to either side of the repeat. If you wish to have those base pairs,
    use the 'Full' methods
    """

    def __init__(self, vcfrecord, ref_allele, alt_alleles, motif, record_id, *,
                 full_alleles=None,
                 ref_allele_length=None,
                 alt_allele_lengths=None):
        self.vcfrecord = vcfrecord
        self.ref_allele = ref_allele
        self.alt_alleles = alt_alleles
        self.motif = motif
        self.record_id = record_id
        self.full_alleles = full_alleles
        self.ref_allele_length = ref_allele_length
        self.alt_allele_lengths = alt_allele_lengths

        if full_alleles is not None and alt_alleles is None:
            raise ValueError("Cannot set full alleles without setting "
                             "regular alleles")

        if alt_allele_lengths is not None and alt_alleles is not None:
            raise ValueError("Must specify only the sequences or the lengths"
                             " of the alt alleles, not both.")

        if ref_allele_length is not None and alt_allele_lengths is None:
            raise ValueError("If the ref allele is specified by length, the "
                             "alt alleles must be too.")

        if ref_allele_length is not None:
            self.ref_allele = utils.FabricateAllele(motif, ref_allele_length)

        if alt_allele_lengths is not None:
            self.alt_alleles = []
            for length in alt_allele_lengths:
                self.alt_alleles.append(utils.FabricateAllele(motif, length))

        try:
            self._CheckRecord()
        except ValueError as e:
            raise ValueError(("Invalid TRRecord. TRRecord: {} Original record:"
                             " {}").format(str(self), str(self.vcfrecord)), e)

    def _CheckRecord(self) -> None:
        """
        Check that this record is properly constructed.

        Checks that: each allele for each sample corresponds to
        harmonized allele; the full_alleles, if supplied,
        contain their corresponding standard alleles

        Returns
        -------
        is_valid : bool
            Returns True if the check passes. Otherwise return False.
        """
        num_alleles = 1 + len(self.alt_alleles)
        for sample in self:
            if not sample.called:
                continue
            gts = sample.gt_alleles
            for al in gts:
                if int(al) > num_alleles - 1:
                    raise ValueError("Found a sample with an allele index"
                                     " greater than the number of alleles"
                                     " present for this variant.")

        if self.full_alleles:
            if len(self.full_alleles) != 2:
                raise ValueError("full_alleles doesn't have both"
                                 " a ref allele and alt alleles")
            full_ref, full_alts = self.full_alleles
            if len(full_alts) != len(self.alt_alleles):
                raise ValueError("full alternate alleles have a different"
                                 " length the normal alt alleles")
            if self.ref_allele not in full_ref:
                raise ValueError("could not find ref allele inside "
                                 "full ref allele")
            for idx, (full_alt, alt) \
                    in enumerate(zip(full_alts, self.alt_alleles)):
                if alt not in (full_alt):
                    raise ValueError(("Could not find alt allele {} "
                                      "inside its full alt "
                                      "allele").format(idx))

    def __iter__(self):
        """
        Iterate over the samples in this record.

        The samples can then be passed to the Get...Genotype
        methods for further introspection
        """
        for sample in self.vcfrecord.samples:
            yield sample

    def GetStringGenotype(self, sample):
        """
        Get the string genotype of a VCF sample.

        Will not include flanking base pairs. To get genotypes that include
        flanking base pairs (for callers that call those), use
        GetFullStringGenotype. For callers that include flanking base pairs
        it is possible that some of the alleles in the regular string genotypes
        (with the flanks stripped) will be identical. In this case, you may
        use UniqueStringGenotypeMapping() to get a canonical unique subset
        of indicies which represent all possible alleles.

        Note that some TR callers will only call allele lengths, not allele
        sequences. In such a case, this method will return a fabricated
        sequence based on the called length (see utils.FabricateAllele). This
        may not be intended - use GetLengthGenotype for a fully caller agnostic
        way of handling genotypes. In this case, a warning will be logged.

        Parameters
        ----------
        sample : vcf.model._Call object
            The Call object for the sample

        Returns
        -------
        genotype : list of str
            The string representation of the call genotype
        """
        if self.HasFabricatedAltAlleles():
            warnings.warn("String genotypes have been requested for a"
                          " TRRecord generated by a caller which only "
                          "generates length genotypes, not string genotypes"
                          ". Returning a fabricated string genotype. Consider"
                          " requesting length based genotypes instead.")

        gts = sample.gt_alleles
        gts_bases = [str(([self.ref_allele] + self.alt_alleles)[int(gt)])
                     for gt in gts]
        return gts_bases

    def GetFullStringGenotype(self, sample):
        """
        Get the full string genotype of a sample.

        If the sample does not have full genotypes that are distinct
        from its regular string genotypes (because no flanking base pairs
        were called) then the regular string genotypes are returned.

        Parameters
        ----------
        sample : vcf.model._Call object
            The Call object for the sample

        Returns
        -------
        genotype : list of str
            The string representation of the call genotype
        """
        if not self.HasFullStringGenotypes():
            return self.GetStringGenotype(sample)

        gts = sample.gt_alleles
        ref_allele, alt_alleles = self.full_alleles
        gts_bases = [str(([ref_allele] + alt_alleles)[int(gt)]) for gt in gts]
        return gts_bases

    def UniqueStringGenotypeMapping(self):
        """
        Get a mapping whose values are unique string genotype indicies.

        Return
        ------
        { int : int }
            A mapping allele idx -> allele idx
            whose keys are all allele indicies and whose values are a
            subset of indicies which represents all the unique regular
            strring alleles for this variant. For almost all records,
            this will be a mapping from each index to itself. For some
            records with full string genotypes that include flanking base
            pairs, some of the regular string alleles will be identical.
            In this case, only one of those allele's indicies will be in the
            set of values of this dictionary, and all identical alleles
            will map to that one index.
        """
        mapping = {}
        if not self.HasFullStringGenotypes():
            for idx in range(len(self.alt_alleles) + 1):
                mapping[idx] = idx
        else:
            allele_to_idx = {}
            alleles = [self.ref_allele]
            alleles.extend(self.alt_alleles)
            for idx, allele in enumerate(alleles):
                if allele not in allele_to_idx:
                    allele_to_idx[allele] = idx
                    mapping[idx] = idx
                else:
                    mapping[idx] = allele_to_idx[allele]

        return mapping

    def UniqueStringGenotypes(self):
        """
        Find allele indicies corresponding to the unique alleles.

        Equivalent to calling set(UniqueStringGenotypeMapping().values())
        """
        return set(self.UniqueStringGenotypeMapping().values())

    def GetLengthGenotype(self, sample):
        """
        Get the length genotype of a sample.

        Represents the sample's genotype in terms of the number
        of repeats of the motif in each allele.
        Returns a pair of floats - alleles including partial repeats
        may have noninteger lengths.

        Parameters
        ----------
        sample : vcf.model._Call object
            The Call object for the sample

        Returns
        -------
        genotype : list of float
            The float representation of the call genotype
            Each item gives the repeat copy number of each allele
        """
        if not self.HasFabricatedAltAlleles():
            gts_bases = self.GetStringGenotype(sample)
            return [len(item) / len(self.motif) for item in gts_bases]
        else:
            if self.HasFabricatedRefAllele():
                lengths = [self.ref_allele_length]
            else:
                lengths = [len(self.ref_allele) / len(self.motif)]
            lengths.extend(self.alt_allele_lengths)
            gts = sample.gt_alleles
            gts_bases = [lengths[int(gt)] for gt in gts]
            return gts_bases

    def UniqueLengthGenotypeMapping(self):
        """
        Get a mapping whose values are unique string genotype indicies.

        Return
        ------
        { int : int }
            A mapping allele idx -> allele idx
            whose keys are all allele indicies and whose values are a
            subset of indicies which represents all the unique
            length alleles for this variant. For variants where
            multiple alleles have the same length, all will map to
            a single index from among those alleles.
        """
        mapping = {}
        allele_to_idx = {}
        alleles = [self.ref_allele]
        alleles.extend(self.alt_alleles)
        for idx, allele in enumerate(alleles):
            allele = len(allele)
            if allele not in allele_to_idx:
                allele_to_idx[allele] = idx
                mapping[idx] = idx
            else:
                mapping[idx] = allele_to_idx[allele]

        return mapping

    def UniqueLengthGenotypes(self):
        """
        Find allele indicies corresponding to the unique length alleles.

        Equivalent to calling set(UniqueLengthGenotypeMapping().values())
        """
        return set(self.UniqueLengthGenotypeMapping().values())

    def HasFullStringGenotypes(self):
        """
        Determine if this record has full string genotypes.

        Returns True iff GetFullStringGenotype(...) will return
        a different value than GetStringGenotype(...) for some
        alleles.
        """
        return self.full_alleles is not None

    def HasFabricatedRefAllele(self):
        """
        Determine if this record has a fabricated ref allels.

        Returns True iff ref_allele_length was passed to this
        record's constructor.
        """
        return self.ref_allele_length is not None

    def HasFabricatedAltAlleles(self):
        """
        Determine if this record has fabricated alt alleles.

        Returns True iff alt_allele_lengths was passed to this
        record's constructor.
        """
        return self.alt_allele_lengths is not None

    def GetGenotypeCounts(self,
                          samplelist=None,
                          uselength=True,
                          fullgenotypes=False):
        """
        Get the counts of each genotype for a record.

        Parameters
        ----------
        samplelist : list of str, optional
            List of samples to include when computing counts
        uselength : bool, optional
            If True, represent alleles as lengths
            else represent as strings
        fullgenotypes : bool, optional
            If True, include flanking basepairs in allele representations
            Only makes sense when uselength=False

        Returns
        -------
        genotype_counts: dict of (tuple: int)
            Gives the count of each genotype.
            Genotypes are represented as tuples of alleles.
        """
        if uselength and fullgenotypes:
            raise ValueError("Can't specify both uselength and fullgenotypes")

        genotype_counts = {}
        for sample in self:
            if samplelist is not None and sample.sample not in samplelist:
                continue
            if sample.called:
                if uselength:
                    alleles = tuple(self.GetLengthGenotype(sample))
                elif fullgenotypes:
                    alleles = tuple(self.GetFullStringGenotype(sample))
                else:
                    alleles = tuple(self.GetStringGenotype(sample))
                genotype_counts[alleles] = genotype_counts.get(alleles, 0) + 1

        return genotype_counts

    def GetAlleleCounts(self,
                        samplelist=None,
                        *,
                        uselength=True,
                        fullgenotypes=False):
        """
        Get the counts of each allele for a record.

        Parameters
        ----------
        samplelist : list of str, optional
            List of samples to include when computing counts
        uselength : bool, optional
            If True, represent alleles a lengths
            else represent as strings
        fullgenotypes : bool, optional
            If True, include flanking basepairs in allele representations
            Only makes sense when uselength=False

        Returns
        -------
        allele_counts: dict of (object: int)
            Gives the count of each allele.
            Alleles may be represented as floats or strings
        """
        if uselength and fullgenotypes:
            raise ValueError("Can't specify both uselength and fullgenotypes")

        allele_counts = {}
        for sample in self:
            if samplelist is not None and sample.sample not in samplelist:
                continue
            if sample.called:
                if uselength:
                    alleles = self.GetLengthGenotype(sample)
                elif fullgenotypes:
                    alleles = self.GetFullStringGenotype(sample)
                else:
                    alleles = self.GetStringGenotype(sample)
                for a in alleles:
                    allele_counts[a] = allele_counts.get(a, 0) + 1
        return allele_counts

    def GetAlleleFreqs(self,
                       samplelist=None,
                       *,
                       uselength=True,
                       fullgenotypes=False):
        """
        Get the frequencies of each allele for a record.

        Parameters
        ----------
        samplelist : list of str, optional
            List of samples to include when computing frequencies
        uselength : bool, optional
            If True, represent alleles a lengths
            else represent as strings
        fullgenotypes : bool, optional
            If True, include flanking basepairs in allele representations
            Only makes sense when uselength=False

        Returns
        -------
        allele_freqs: dict of (object: float)
            Gives the frequency of each allele.
            Alleles may be represented as floats or strings
        """
        allele_counts = self.GetAlleleCounts(uselength=uselength,
                                             fullgenotypes=fullgenotypes,
                                             samplelist=samplelist)
        total = float(sum(allele_counts.values()))
        allele_freqs = {}
        for key in allele_counts.keys():
            allele_freqs[key] = allele_counts[key] / total
        return allele_freqs

    def GetMaxAllele(self,
                     samplelist=None,
                     fullgenotypes=False):
        """
        Get the maximum allele length called in a record.

        Parameters
        ----------
        samplelist : list of str, optional
            List of samples to include when computing max allele
        fullgenotypes : bool, optional
            Whether or not to report the length of the full genotype
            or the length of the flank trimmed genotype (in cases
            where these differ)

        Returns
        -------
        maxallele : float
            The maximum allele length called (in number of repeat units)
        """
        alleles = self.GetAlleleCounts(uselength=True,
                                       samplelist=samplelist).keys()
        if len(alleles) == 0:
            return np.nan
        max_len = max(alleles)
        if not self.HasFullStringGenotypes() or not fullgenotypes:
            return max_len
        else:
            # Assumes that the length difference between the full ref and
            # trimmed ref allele is the difference between all full and
            # trimmed alleles
            if not self.HasFabricatedRefAllele():
                return (max_len + len(self.full_alleles[0])
                        - len(self.ref_allele))
            else:
                return (max_len + len(self.full_alleles[0])
                        - self.ref_allele_length)

    def __str__(self):
        """Generate a summary of the variant described by this record."""
        record_id = self.record_id
        if record_id is None:
            record_id = "{}:{}".format(self.vcfrecord.CHROM,
                                       self.vcfrecord.POS)
        if self.HasFullStringGenotypes():
            string = "{} {} {} ".format(record_id,
                                        self.motif,
                                        self.full_alleles[0])
            string += ",".join(self.full_alleles[1])
            return string

        if self.HasFabricatedRefAllele():
            string = "{} {} n_reps:{} ".format(record_id,
                                               self.motif,
                                               self.ref_allele_length)
        else:
            string = "{} {} {} ".format(record_id,
                                        self.motif,
                                        self.ref_allele)

        if len(self.alt_alleles) == 0:
            string += '.'
        elif self.HasFabricatedAltAlleles():
            string += ",".join("n_reps:" + str(length) for length
                               in self.alt_allele_lengths)
        else:
            string += ','.join(self.alt_alleles)

        return string

#TODO check all users of this class for new options
