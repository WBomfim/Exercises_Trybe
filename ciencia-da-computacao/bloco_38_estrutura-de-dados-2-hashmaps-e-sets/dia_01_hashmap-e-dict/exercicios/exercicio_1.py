words = ["cat", "bt", "hat", "tree"]
chars = "atach"

""" def check_word(words, chars):
    for word in words:
        for char in word:
            if char not in chars:
                words.remove(word)
                break
    return words """

def check_word(words, chars):
    for word in words:
        for char in word:
            if char not in chars:
                break
        else:
            yield word

print(list(check_word(words, chars)))
