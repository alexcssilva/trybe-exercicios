# Exercício 2: A pessoa de id_num = 10 está com o nome errado, deveria ser
#  name30. Implemente um método com a assinatura abaixo, onde id_num é a
# chave para localizar o registro que queremos alterar e new_name é o
# nome a ser colocado. Verifique se o seu código está realmente alter
# ando o nome, imprimindo o nome antes e depois da alteração:


class HashMap:
    # ...

    def update_value(self, id_num, new_value):
        address = self.get_address(id_num)
        employee = self._buckets[address]
        employee.name = new_value


if __name__ == "__main__":

    # employees = [(14, 'name1'), (23, 'name2'), (10, 'name3'), (9, 'name4')]
    # registry = HashMap()

    # for id_num, name in employees:
    #     employee = Employee(id_num, name)
    #     registry.insert(employee)

    # print(registry.get_value(23))

    print(registry.get_value(10))
    registry.update_value(10, "name30")
    print(registry.get_value(10))
