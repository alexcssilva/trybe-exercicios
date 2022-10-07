# Exercício 3: Crie um algoritmo recursivo que encontre, em uma lista, o maior
# número inteiro.

def maiorinnteiro_aux(lista, tamanho):
    if tamanho == 1:
        return lista[0]
    else:
        maior_do_resto_da_lista = maiorinnteiro_aux(lista, tamanho - 1)
        if maior_do_resto_da_lista > lista[tamanho-1]:
            return maior_do_resto_da_lista
        else:
            return lista[tamanho-1]


def maiorinteiro(lista):
    tamanho = len(lista)
    return maiorinnteiro_aux(lista, tamanho)


print(maiorinteiro([1, 21, 300, 4, 5]))
