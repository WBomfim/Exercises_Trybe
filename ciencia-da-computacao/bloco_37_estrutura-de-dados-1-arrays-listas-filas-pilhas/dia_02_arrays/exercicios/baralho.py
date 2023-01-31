""" Exemplo 1:
cartas = [2, 6, 4, 5]
cartas por parte = 2

resultado = [2, 4, 6, 5]

Exemplo 2:
cartas = [1, 4, 4, 7, 6, 6]
cartas por parte = 3

resultado = [1, 7, 4, 6, 4, 6] """


def embaralhar(cartas):
    cartas_por_parte = len(cartas) // 2
    cartas_1 = cartas[:cartas_por_parte]
    cartas_2 = cartas[cartas_por_parte:]

    resultado = []
    for i in range(cartas_por_parte):
        resultado.append(cartas_1[i])
        resultado.append(cartas_2[i])

    return resultado


cartas = [1, 4, 4, 7, 6, 6]

print(embaralhar(cartas))


""" Solução proposta pelo course da Trybe:
def shuffle(items):
    answer = []
    div_cards_by_two = len(items) // 2
    for offset in range(div_cards_by_two):
        answer.extend(items[offset::div_cards_by_two])
    return answer
"""
