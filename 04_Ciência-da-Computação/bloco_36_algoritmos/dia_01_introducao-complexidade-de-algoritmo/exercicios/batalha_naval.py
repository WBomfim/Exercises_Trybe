""" resultado para (0, 4) = True
resultado para (1, 1) = False """

entrada = [[0, 0, 0, 0, 1], [0, 0, 0, 0, 1], [1, 1, 1, 1, 1], [0, 0, 0, 1, 0]]


def batalha_naval(entrada, linha, coluna):
    return True if entrada[linha][coluna] == 1 else False


"""A ordem de complexidade é O(1),
pois a função não depende do tamanho da entrada"""


"""A complexidade de espaço é O(1),
pois desconsideramos a entrada em seu cálculo"""


if __name__ == "__main__":
    print(batalha_naval(entrada, 0, 4))
    print(batalha_naval(entrada, 1, 1))
