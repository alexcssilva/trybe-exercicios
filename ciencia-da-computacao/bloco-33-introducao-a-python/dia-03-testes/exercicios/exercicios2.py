# Exercício 2 Em alguns lugares é comum lembrar um número do telefone
#  associando seus dígitos a letras. Dessa maneira a expressão MY LOVE
# significa 69 5683. Claro que existem alguns problemas, uma vez que alguns
# números de telefone não formam uma palavra ou uma frase e os dígitos 1 e 0
# não estão associados a nenhuma letra.
# Sua tarefa é ler uma expressão e encontrar o número de telefone
# correspondente baseado na tabela abaixo. Uma expressão é composta por letras
#  maiúsculas (A-Z), hifens (-) e os números 1 e 0.

def translate_to_number(expression):
    if not 1 < len(expression) <= 30:
        raise ValueError("Expression with invalid length")
    number = ""
    for char in expression:
        if char in "ABC":
            number += "2"
        elif char in "DEF":
            number += "3"
        elif char in "GHI":
            number += "4"
        elif char in "JKL":
            number += "5"
        elif char in "MNO":
            number += "6"
        elif char in "PQRS":
            number += "7"
        elif char in "TUV":
            number += "8"
        elif char in "WXYZ":
            number += "9"
        elif char in "-01":
            number += char
        else:
            raise ValueError("Invalid character")
    return number
