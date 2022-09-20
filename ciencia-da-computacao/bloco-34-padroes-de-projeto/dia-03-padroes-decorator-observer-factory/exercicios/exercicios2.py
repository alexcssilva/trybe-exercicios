# Exercício 2: Utilizando o Padrão Observer, você esta desenvolvendo um novo
# despertador para a Assistente virtual Alexa, que ao despertar, aciona
# algumas rotinas especiais na casa. Implemente um objeto Alarme que consiga
# acionar as tarefas de rotinas previamente cadastradas,
# sempre que o alarme despertar. Exemplos de rotinas:
# Acender as luzes;
# Preparar o café;
# Ligar o computador.

from abc import ABC, abstractmethod


class Alarme:
    def __init__(self):
        self.__rotinas = []

    def adicionar_rotinas(self, rotina):
        self.__rotinas.append(rotina)

    def acionar_todas_rotinas(self):
        for rotina in self.__rotinas:
            rotina.acionar()

    def despertar(self):
        print("Som do alarme: Triiiiiiim, Triiiiiiim")
        self.acionar_todas_rotinas()


# Interface Observer
class Acionador(ABC):
    @abstractmethod
    def acionar(self):
        pass


# Observador Rotina Luzes
class AcionadorLuzes(Acionador):
    def __init__(self, alarme):
        self.alarme = alarme
        self.alarme.adicionar_rotinas(self)

    def acionar(self):
        print("Acendendo as Luzes")


# Observador Cafeteira
class AcionadorCafeteira(Acionador):
    def __init__(self, alarme):
        self.alarme = alarme
        self.alarme.adicionar_rotinas(self)

    def acionar(self):
        print("Preparando o café")


# Observador Computador
class AcionadorComputador(Acionador):
    def __init__(self, alarme):
        self.alarme = alarme
        self.alarme.adicionar_rotinas(self)

    def acionar(self):
        print("Ligar computador")


# Cliente
if __name__ == "__main__":
    alarme_manha = Alarme()
    AcionadorLuzes(alarme_manha)
    AcionadorCafeteira(alarme_manha)
    AcionadorComputador(alarme_manha)

    alarme_manha.despertar()

    alarme_tarde = Alarme()
    AcionadorCafeteira(alarme_tarde)

    alarme_tarde.despertar()
