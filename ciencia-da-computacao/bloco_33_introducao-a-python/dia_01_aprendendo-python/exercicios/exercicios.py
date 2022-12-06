import math


# Função que recebe dois números e retorna o maior
def max_number(a, b):
    return max(a, b)


# Função que recebe um número e retorna a média dos números de 1 até o número
def average_list(number):
    total = 0
    for num in number:
        total += num
    return total / len(number)


# Função que imprime um quadrado de asteriscos
def square_number(number):
    for row in range(number):
        print("*" * number)


# Função que retorna a maior palavra de uma lista
def max_length_word(words):
    return max(words, key=len)


# Função que retorna uma tupla com a quantidade de latas e o valor da tinta
def amount_ink(size):
    liters = int(size / 3)
    cans = math.ceil(liters / 18)
    price = cans * 80.00
    return cans, price


# Função que recebe 3 lados de um triângulo e retorna o seu tipo
def is_triangle(a, b, c):
    if not (a + b > c and a + c > b and b + c > a):
        return "Não é um triângulo"
    if a == b == c:
        return "Triângulo equilátero"
    if a == b or a == c or b == c:
        return "Triângulo isósceles"
    if a != b != c:
        return "Triângulo escaleno"
