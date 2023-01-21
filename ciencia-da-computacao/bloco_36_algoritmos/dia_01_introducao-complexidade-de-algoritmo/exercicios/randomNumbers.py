import random


def random_numbers(n):
    list_of_averages = []

    for _ in range(100):
        average = 0

        for _ in range(n):
            average += random.randrange(1, n)

        average = average/n
        list_of_averages.append(average)

    return list_of_averages


"""A ordem de complexidade é O(n),
pois conforme a entrada aumenta, o número de operações também cresce"""


"""A complexidade de espaço é O(1),
pois independentemente da entrada,
sempre retornará uma lista de 100 números"""


if __name__ == "__main__":
    random_numbers(10)
