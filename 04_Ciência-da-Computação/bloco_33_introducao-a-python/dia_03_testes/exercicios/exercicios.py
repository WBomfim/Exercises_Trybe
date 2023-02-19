import re


def fizz_buzz(number):
    return [num
            for i in range(1, number + 1)
            for num in [
                        'FizzBuzz' if i % 3 == 0 and i % 5 == 0
                        else 'Fizz' if i % 3 == 0
                        else 'Buzz' if i % 5 == 0
                        else i]]


def validate_email(email):
    regex = re.compile(r"^[a-zA-Z][a-zA-Z0-9_-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$")
    if not regex.match(email):
        raise ValueError("Invalid email")
    return None


def validate_email_unit_element(email):
    if not email[0].isalpha():
        raise ValueError("Username should starts with a letter")

    for letter in email:
        if (
            not letter.isalpha()
            and not letter.isdigit()
            and letter not in ("_", "-")
            and letter != "@"
            and letter != "."
        ):
            raise ValueError(
                "Username should contains only letters, "
                "digits, dashes or underscores"
            )

    if email.count("@") != 1:
        raise ValueError("Email should contains only one @")

    if email.count(".") != 1:
        raise ValueError("Email should contains only one dot")

    username, website = email.split("@")
    website, extension = website.split(".")

    if len(extension) > 3:
        raise ValueError("Extension maximum length is 3")

    return None
