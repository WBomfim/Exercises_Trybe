# Recebe uma palavra e imprime uma coluna
# removendo uma letra do final a cada linha
def print_word_vertical_reverse(word):
    for i in range(len(word)-1, -1, -1):
        print(word[0:i + 1])


if __name__ == '__main__':
    word = input('Digite uma palavra: ')
    print_word_vertical_reverse(word)
