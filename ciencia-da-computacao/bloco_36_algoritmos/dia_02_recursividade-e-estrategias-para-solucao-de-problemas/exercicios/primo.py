def temdivisor(n, i, j):
    if i > j:
        return False
    elif n % i == 0:
        return True
    else:
        return temdivisor(n, i + 1, j)


def primo(n):
    return n > 1 and not (temdivisor(n, 2, n - 1))


if __name__ == "__main__":
    print(primo(10))
    print(primo(5))
    print(primo(7))
    print(primo(9))
    print(primo(11))
