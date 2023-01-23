def max_number(list_num: list) -> int:
    if len(list_num) == 1:
        return list_num[0]

    list_num.pop(1) if list_num[0] > list_num[1] else list_num.pop(0)

    return max_number(list_num)


if __name__ == "__main__":
    list_num = [1, 2, 100, 3, 4, 5, 20, 50]
    print(max_number(list_num))
