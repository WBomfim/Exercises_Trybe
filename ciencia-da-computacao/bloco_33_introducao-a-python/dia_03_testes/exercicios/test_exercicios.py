import pytest
from exercicios import (
    fizz_buzz,
    validate_email,
    validate_email_unit_element
)


def test_fizz_buzz_returns():
    assert fizz_buzz(15) == [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz',
                             'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz']
    assert fizz_buzz(5) == [1, 2, 'Fizz', 4, 'Buzz']
    assert fizz_buzz(3) == [1, 2, 'Fizz']


def test_username_can_only_contain_letters():
    assert validate_email("test@website.com") is None
    assert validate_email_unit_element("test@website.com") is None


def test_username_can_contain_letters_and_digits():
    assert validate_email("test123@website.com") is None
    assert validate_email_unit_element("test123@website.com") is None


def test_username_can_contain_letters_digits_dashes_and_underscores():
    assert validate_email("test_123-p@website.com") is None
    assert validate_email_unit_element("test_123-p@website.com") is None


def test_website_contain_only_letters_and_digits():
    assert validate_email("test@website123.com") is None
    assert validate_email_unit_element("test@website123.com") is None


def test_username_when_dont_start_with_letter_raise_exception():
    with pytest.raises(ValueError):
        validate_email("1@nomewebsite.com")
    with pytest.raises(ValueError):
        validate_email_unit_element("1@nomewebsite.com")


def test_website_invalid_chars_raise_exception():
    with pytest.raises(ValueError):
        validate_email("test@website!123.com")
    with pytest.raises(ValueError):
        validate_email_unit_element("test@website!123.com")


def test_extension_invalid_chars_raise_exception():
    with pytest.raises(ValueError):
        validate_email("test@website.python")
    with pytest.raises(ValueError):
        validate_email_unit_element("test@website.python")
