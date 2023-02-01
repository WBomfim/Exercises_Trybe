def delete_duplicates(self):
    list_with_unique_elements = self()

    while self:
        current_node = self.remove_first()
        if list_with_unique_elements.index_of(current_node.value) == -1:
            list_with_unique_elements.insert_last(current_node.value)

    return list_with_unique_elements


class DoublyLinkedList:
    def index_of(self, value):
        position = 1
        current_value = self.head.next
        while current_value != self.tail:
            if current_value.value == value:
                return position
            current_value = current_value.next
            position += 1
        return -1

    def delete_duplicates(linkedList):
        list_with_unique_elements = DoublyLinkedList()

        while linkedList:
            current_node = linkedList.remove_first()
            if linkedList.index_of(current_node.value) == -1:
                list_with_unique_elements.insert_last(current_node.value)

        return list_with_unique_elements
