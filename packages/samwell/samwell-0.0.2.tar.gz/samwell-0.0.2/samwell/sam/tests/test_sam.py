"""Tests for :py:mod:`~samwell.sam`"""

from pathlib import Path
from tempfile import NamedTemporaryFile as NamedTemp
from typing import Any
from typing import Dict
from typing import Generator
from typing import List
from typing import Tuple
from typing import Union

import pysam
import pytest
from py._path.local import LocalPath as TmpDir

import samwell.sam as sam
from samwell.sam import Cigar
from samwell.sam import CigarElement
from samwell.sam import CigarOp
from samwell.sam import CigarParsingException
from samwell.sam import SamFileType
from samwell.sam.sambuilder import SamBuilder


@pytest.mark.parametrize("file_type", list(SamFileType))
@pytest.mark.parametrize("as_str", [True, False])
def test_sam_file_type_from_path(file_type: SamFileType, as_str: bool) -> None:
    path: Union[Path, str]
    if as_str:
        path = "/path/to/some/file" + file_type.ext
    else:
        path = Path("/path/to/some/file" + file_type.ext)
    assert SamFileType.from_path(path=path) == file_type


def test_sam_file_type_invalid_path() -> None:
    path = "/path/to/excel.xls"
    with pytest.raises(ValueError) as ex:
        SamFileType.from_path(path=path)
    assert "Could not infer file type from " + path in str(ex)


@pytest.fixture
def valid_sam() -> Path:
    return Path(__file__).parent / 'data' / 'valid.sam'


@pytest.fixture
def valid_bam(valid_sam: Path) -> Generator[Path, None, None]:
    bam: Path = Path(__file__).parent / 'data' / 'valid.bam'
    num_read = 0
    with sam.reader(valid_sam) as fh_in:
        with sam.writer(bam, fh_in.header, file_type=SamFileType.BAM) as fh_out:
            for rec in fh_in:
                num_read += 1
                fh_out.write(rec)
    assert num_read == 8
    yield bam
    bam.unlink()


@pytest.fixture(scope="function")
def in_path(request: Any, valid_sam: Path, valid_bam: Path) -> Path:
    """A fixture for test_sam_file_open_reading to modify in_path prior to executing.

    Returns:
         the path corresponding to the given file type (i.e. SAM or BAM).
    """
    file_type = request.param
    return valid_sam if file_type == SamFileType.SAM else valid_bam


@pytest.mark.parametrize("in_path,file_type", [
    (SamFileType.SAM, SamFileType.SAM),
    (SamFileType.BAM, SamFileType.BAM)
], indirect=['in_path'])  # Note: This modifies in_path via the in_path fixture
def test_sam_file_open_reading(in_path: Path,
                               file_type: SamFileType) -> None:

    # file pointer
    with in_path.open(mode="rb") as fp:
        with sam._pysam_open(path=fp, open_for_reading=True, file_type=file_type) as samfile:
            assert sum(1 for _ in samfile) == 8

    # Path
    with sam._pysam_open(path=in_path, open_for_reading=True, file_type=file_type) as samfile:
        assert sum(1 for _ in samfile) == 8

    # str
    str_path = str(in_path)
    with sam._pysam_open(path=str_path, open_for_reading=True, file_type=file_type) as samfile:
        assert sum(1 for _ in samfile) == 8


def test_sam_file_open_reading_autorecognize(valid_sam: Path) -> None:
    with sam._pysam_open(path=valid_sam, open_for_reading=True, file_type=None) as samfile:
        assert sum(1 for _ in samfile) == 8


def test_sam_file_open_reading_with_reader(valid_sam: Path) -> None:
    with sam.reader(path=valid_sam, file_type=None) as samfile:
        assert sum(1 for _ in samfile) == 8


@pytest.fixture
def expected_records(valid_sam: Path) -> List[pysam.AlignedSegment]:
    """Returns the records that are found in the valid_sam. """
    with sam.reader(valid_sam) as fh:
        return [r for r in fh]


@pytest.fixture
def header_dict(valid_sam: Path) -> Dict[str, Any]:
    """Returns the multi-level dictionary in the valid_sam. """
    with sam.reader(valid_sam) as fh:
        return fh.header


@pytest.fixture
def header_text(valid_sam: Path) -> Dict[str, Any]:
    """Returns the raw dictionary text in the valid_sam. """
    with sam.reader(valid_sam) as fh:
        return fh.text


def assert_actual_vs_expected(actual_path: str,
                              expected_records: List[pysam.AlignedSegment]) -> None:
    """Helper method to ensure the expected records are in the SAM/BAM at the actual path."""
    with sam.reader(actual_path) as sam_reader:
        actual_records = [r for r in sam_reader]
    for actual, expected in zip(actual_records, expected_records):
        assert actual == expected
    assert len(actual_records) == len(expected_records)


@pytest.mark.parametrize("file_type", [SamFileType.SAM, SamFileType.BAM])
def test_sam_file_open_writing(file_type: SamFileType,
                               expected_records: List[pysam.AlignedSegment],
                               header_dict: Dict[str, Any],
                               tmpdir: TmpDir) -> None:
    # use header as a keyword argument
    with NamedTemp(suffix=file_type.ext, dir=tmpdir, mode='w', delete=False) as fp:
        kwargs = {"header": header_dict}
        with sam._pysam_open(path=fp.file,  # type: ignore
                             open_for_reading=False,
                             file_type=file_type,
                             **kwargs) as sam_writer:
            for r in expected_records:
                sam_writer.write(r)
    assert_actual_vs_expected(fp.name, expected_records)


def test_sam_file_open_writing_header_keyword(expected_records: List[pysam.AlignedSegment],
                                              header_dict: Dict[str, Any],
                                              tmpdir: TmpDir) -> None:
    # Use SamWriter
    # use header as a keyword argument
    with NamedTemp(suffix=".sam", dir=tmpdir, mode='w', delete=False) as fp:
        with sam.writer(path=fp.name,
                        header=header_dict,
                        file_type=SamFileType.SAM) as sam_writer:
            for r in expected_records:
                sam_writer.write(r)
    assert_actual_vs_expected(fp.name, expected_records)

# FIXME: Bug in pysam
# https://github.com/pysam-developers/pysam/pull/656
# def test_sam_file_open_writing_text_keyword(expected_records: List[pysam.AlignedSegment],
#                                             header_text: str,
#                                             tmpdir: TmpDir) -> None:
#     # Try without a file type
#     with NamedTemp(suffix=".sam", dir=tmpdir, mode='w', delete=False) as fp:
#         kwargs = {"text": header_text}
#         with sam.writer(path=fp.name,
#                             header=header_dict,
#                             file_type=None) as sam_writer:
#             for r in expected_records:
#                 sam_writer.write(r)
#     assert_actual_vs_expected(fp.name, expected_records)


def test_cigar_op_util_from_character() -> None:
    operators = [operator for operator in CigarOp]
    characters = [operator.character for operator in operators]
    for i, character in enumerate(characters):
        assert CigarOp.from_character(character) == operators[i]


def test_cigar_op_util_from_code() -> None:
    operators = [operator for operator in CigarOp]
    codes = [operator.code for operator in operators]
    for i, code in enumerate(codes):
        assert CigarOp.from_code(code) == operators[i]


@pytest.mark.parametrize("character,operator_length,length_on_query,length_on_target", [
    ("M", 10, 10, 10),
    ("I", 10, 10, 0),
    ("D", 10, 0, 10),
    ("S", 10, 10, 0)
])
def test_cigar_element_length_on(character: str,
                                 operator_length: int,
                                 length_on_query: int,
                                 length_on_target: int) -> None:
    operator = CigarOp.from_character(character)
    element = CigarElement(operator_length, operator)
    assert element.length == operator_length
    assert element.length_on_query == length_on_query
    assert element.length_on_target == length_on_target


@pytest.mark.parametrize("cigartuples,cigarstring", [
    ([], "*"),  # Empty cigar
    ([(0, 10), (1, 5), (0, 1)], "10M5I1M"),  # A simple example
    ([(0, 10), (1, 5), (1, 5)], "10M5I5I"),  # do not join adjacent operators of the same type
    ([(op.code, op.code + 1) for op in CigarOp], "1M2I3D4N5S6H7P8=9X")  # all operators
])
def test_cigar_from_cigartuples(cigartuples: List[Tuple[int, int]], cigarstring: str) -> None:
    cigar = Cigar.from_cigartuples(cigartuples)
    assert str(cigar) == cigarstring


def test_cigar_from_cigartuples_malformed() -> None:
    with pytest.raises(CigarParsingException, match=r'.*Malformed cigar tuples.*'):
        cigartuples = [(0, 10), (1, 5), (22, 1)]
        Cigar.from_cigartuples(cigartuples)


def test_pretty_cigarstring_exception() -> None:
    cigar = "10M5U4M"
    index = 4
    expected = "10M5[U]4M"
    with pytest.raises(CigarParsingException, match=r'.*Malformed cigar') as ex:
        raise Cigar._pretty_cigarstring_exception(cigar, index)
    assert expected in str(ex)

    expected = cigar + "[]"
    with pytest.raises(CigarParsingException, match=r'.*Malformed cigar') as ex:
        raise Cigar._pretty_cigarstring_exception(cigar, len(cigar))
    assert expected in str(ex)


def test_from_cigarstring() -> None:
    # Empty cigar
    assert str(Cigar.from_cigarstring("*")) == "*"

    elements = []
    for i, operator in enumerate(CigarOp):
        elements.append(CigarElement(i + 1, operator))
    cigarstring = str(Cigar(tuple(elements)))
    assert str(Cigar.from_cigarstring(cigarstring)) == cigarstring


def test_from_cigarstring_op_should_start_with_digit() -> None:
    cigars = ["", "M", "10MI", "10M5SU"]
    errors = ["", "[M]", "10M[I]", "10M5S[U]"]
    for cigar, error in zip(cigars, errors):
        match = "Malformed cigar: " + error if cigar else 'Cigar string was empty'
        with pytest.raises(CigarParsingException) as ex:
            Cigar.from_cigarstring(cigar)
        assert match in str(ex)


def test_from_cigarstring_no_length() -> None:
    cigars = ["M", "10MS"]
    errors = ["", "10M[S]"]
    for cigar, error in zip(cigars, errors):
        with pytest.raises(CigarParsingException) as ex:
            Cigar.from_cigarstring(cigar)
        assert "Malformed cigar: " + error in str(ex)


def test_from_cigarstring_invalid_operator() -> None:
    cigars = ["10U", "10M5U"]
    errors = ["10[U]", "10M5[U]"]
    for cigar, error in zip(cigars, errors):
        with pytest.raises(CigarParsingException) as ex:
            Cigar.from_cigarstring(cigar)
        assert "Malformed cigar: " + error in str(ex)


def test_from_cigarstring_missing_operator() -> None:
    cigars = ["10", "10M5"]
    errors = ["10[]", "10M5[]"]
    for cigar, error in zip(cigars, errors):
        with pytest.raises(CigarParsingException) as ex:
            Cigar.from_cigarstring(cigar)
        assert "Malformed cigar: " + error in str(ex)


def test_is_indel() -> None:
    indels = [op for op in CigarOp if op.is_indel]
    assert indels == [CigarOp.I, CigarOp.D]


def test_get_and_set_qc_fail() -> None:
    builder = SamBuilder()
    (r1, _) = builder.add_pair()

    def foo() -> None:
        pass

    # the record isn't qc failed, so get_qc_fail should return None
    assert sam.get_qc_fail(r1) is None
    assert sam.get_qc_fail_by_tool(r1) is None

    # the record is qc failed, but there are no tags set, so get_qc_fail should return None
    r1.is_qcfail = True
    assert sam.get_qc_fail(r1) is None
    assert sam.get_qc_fail_by_tool(r1) is None

    # the record is qc failed by a tool and with a reason, so we should get a return value
    sam.set_qc_fail(r1, test_get_and_set_qc_fail, "some reason")
    (tool, reason) = sam.get_qc_fail(r1)
    assert tool == test_get_and_set_qc_fail.__name__
    assert reason == "some reason"
    (tool, reason) = sam.get_qc_fail_by_tool(r1, tool=test_get_and_set_qc_fail)
    assert tool == test_get_and_set_qc_fail.__name__
    assert reason == "some reason"

    # returns None if a different tool set the record as QC fail
    assert sam.get_qc_fail_by_tool(r1, tool=foo) is None


def test_isize() -> None:
    builder = SamBuilder()
    r1, r2 = builder.add_pair(chrom="chr1", start1=100, cigar1="115M", start2=250, cigar2="40M")
    assert sam.isize(r1, r2) == 190
    assert sam.isize(r2, r1) == -190

    r2.is_unmapped = True
    assert sam.isize(r1, r2) == 0
