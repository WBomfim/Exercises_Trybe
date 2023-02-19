from LinkedList import LinkedList


class Stack:

    def __init__(self):
        self.__data = LinkedList()

    def is_empty(self):
        return not len(self.__data)

    def push(self, value):
        self.__data.insert_last(value)

    def pop(self):
        return self.__data.remove_last()

    def peek(self):
        return self.__data.get_element_at(len(self.__data))

    def min_value(self):
        if self.is_empty():
            return None

        min_value = self._data[0]

        for elem in self._data:
            if elem < min_value:
                min_value = elem

        return min_value


class LimitStack(Stack):
    def __init__(self, limit):
        super().__init__()
        self.limit = limit

    def push(self, value):
        if (self.size() + 1) > self.limit:
            raise Exception("Stack is full")
        super().push(value)
