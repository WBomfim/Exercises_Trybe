""" 1 - OK
0 - Instabilidades """

valores_coletados_1 = [0, 1, 1, 1, 0, 0, 1, 1]
resultado = 3

valores_coletados_2 = [1, 1, 1, 1, 0, 0, 1, 1]
resultado = 4


def instabilidade_analise(valores_coletados):
    current_time = 0
    max_time = 0

    for value in valores_coletados:
        if value == 1:
            current_time += 1
        else:
            current_time = 0

        if current_time > max_time:
            max_time = current_time

    return max_time


print(instabilidade_analise(valores_coletados_1))
print(instabilidade_analise(valores_coletados_2))
