def count_pairs(n: int) -> int:
    count: int = 0
    for i in range(n):
        if i % 2 == 0:
            count += 1
    return count


def count_pairs_Recursve(n: int) -> int:
    if n % 2 == 0:
        return 1 + count_pairs_Recursve(n - 1)
    return 0 if n == 1 else count_pairs_Recursve(n - 1)


if __name__ == "__main__":
    print(count_pairs(10))
    print(count_pairs_Recursve(10))
