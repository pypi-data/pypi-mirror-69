import pytest

from .helpers import enable_trio_mode

test_text = """
import pytest
import trio
from hypothesis import given, settings, strategies

async def test_pass():
    await trio.sleep(0)

async def test_fail():
    await trio.sleep(0)
    assert False

@settings(deadline=None, max_examples=5)
@given(strategies.binary())
async def test_hypothesis_pass(b):
    await trio.sleep(0)
    assert isinstance(b, bytes)

@settings(deadline=None, max_examples=5)
@given(strategies.binary())
async def test_hypothesis_fail(b):
    await trio.sleep(0)
    assert isinstance(b, int)
"""


@enable_trio_mode
def test_trio_mode(testdir, enable_trio_mode):
    enable_trio_mode(testdir)

    testdir.makepyfile(test_text)

    result = testdir.runpytest()
    result.assert_outcomes(passed=2, failed=2)
