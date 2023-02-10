string = "serdevemuitolegalmasehprecisoestudarbastante"


""" def substring_len(string):
    biggest = 0

    for index, _ in enumerate(string):
        substr = set()

        for letter in string[index:]:
            if letter in substr:
                break
            substr.add(letter)

        if len(substr) > biggest:
            biggest = len(substr)

    return biggest """


def substring_len(string):
    last_occurrence = {}
    start = 0
    max_len = 0

    for end in range(len(string)):
        if string[end] in last_occurrence:
            start = max(start, last_occurrence[string[end]] + 1)

        last_occurrence[string[end]] = end
        max_len = max(max_len, end - start + 1)

    return max_len


if __name__ == '__main__':
    print(substring_len(string))
