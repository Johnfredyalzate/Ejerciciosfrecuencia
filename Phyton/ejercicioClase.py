# Crear dos listas con mínimo 5 elementos cada una y generar: 
# -Elementos que se repita en las dos listas
# -Una lista de elementos que aparezca en la primera lista y no en la segunda
# -Una lista de elementos que aparezca en la primera lista pero o en la segunda
# -Una lista de elementos que aparezcan en ambas listas
"""

lista1 = [1,2,3,4,5]
lista2 = [1,5,6,9,2]

# 1) Elementos que se repiten en ambas listas (intersección, manteniendo repeticiones según primera lista)
repetido = [x for x in lista1 if x in lista2]

# 2) Elementos que están en la primera lista y no en la segunda
soloLista1 = [x for x in lista1 if x not in lista2]


# 3) Elementos que están en la primera lista pero o en la segunda
soloLista2 = [x for x in lista2 if x not in lista1]


# 4) Elementos que aparecen en ambas listas (sin duplicados)
noduplicados = list(set(lista1) & set(lista2))

print(" Elementos que repiten en ambas listas:", repetido)
print(" Elementos que están en la primera lista y no en la segunda:", soloLista1)
print(" Elementos que están en la segunda lista y no en la primera:", soloLista2)
print(" Elementos que aparecen en ambas listas (sin duplicados):", noduplicados)



# 6 Crear una lista con 5 elementos de tipo carácter, una con 3 elementos tipo entero y una tercera que
# contenga los 8 elementos de las dos primeras. Mostrar en pantalla las 3 listas generadas.

lis1=["manzana","pera","banano","1","2"]
lis2=[1,2,3]
lis3=lis1+lis2

print(lis1)
print(lis2)
print(lis3)

 """

# Ejercicio 10
# Crear un programa de forma libre en el que se manipulen listas, usando diferentes funciones y
# operaciones entre este tipo de estructura de datos.

# 1. Definir una lista de números (pueden repetirse)
lista = [1, 2, 3, 2, 4, 5, 1, 6]

# 2. Convertir lista a set para eliminar duplicados
conjunto_unicos = set(lista)

# 5. Crear una lista filtrada con números pares (a partir de 'lista')
solo_pares = [x for x in lista if x % 2 == 0]


print("Lista:", lista)
print("Sin Duplicados", conjunto_unicos)
print("Lista filtrada con solo pares:", solo_pares)