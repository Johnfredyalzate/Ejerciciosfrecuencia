
'''Ejercicios de archivos con Python
Ejercicio 1: Escribir y leer un archivo de texto simple
Este ejercicio te ayudará a familiarizarte con las
operaciones básicas de abrir, escribir y leer archivos de
texto.
1.Escribir: Crea un archivo llamado lista_compras.txt.
Dentro del archivo, escribe los siguientes ítems, cada
uno en una nueva línea:
•Leche
•Huevos
•Pan
•Manzanas
2.Leer: Abre el archivo que acabas de crear y lee su
contenido línea por línea. Imprime cada línea en la
consola. Asegúrate de cerrar el archivo correctamente
después de cada operación.'''
import pandas as pd
# Lista de ítems
items = ['Leche', 'Huevos', 'Pan', 'Manzanas']

# Convertimos la lista a un DataFrame de pandas
df = pd.DataFrame(items)

# Guardamos el DataFrame en un archivo de texto
df.to_csv('lista_compras.txt', index=False, header=False)

# Abrir y leer el archivo línea por línea
with open('lista_compras.txt', 'r', encoding='utf-8') as archivo:
    for linea in archivo:
        print(linea.strip())  # strip() elimina el salto de línea

'''Ejercicio 2: Exportar e importar datos a un archivo CSV
El formato CSV (Comma-Separated Values) es muy común
para manejar datos tabulares. Este ejercicio usa el módulo
csv de Python.
1.Exportar: Tienes la siguiente lista de diccionarios que
representan a empleados:
empleados = [ {'nombre': 'Ana', 'puesto': 'Gerente',
'salario': 60000}, {'nombre': 'Luis', 'puesto': 'Analista',
'salario': 45000}, {'nombre': 'Sofía', 'puesto':
'Desarrolladora', 'salario': 55000} ]
Crea un archivo llamado empleados.csv y exporta esta
información. La primera fila del archivo debe ser el
encabezado (nombre, puesto, salario).
2.Importar: Lee el archivo empleados.csv que creaste'''


import pandas as pd

# Lista de diccionarios
empleados = [
    {'nombre': 'Ana', 'puesto': 'Gerente', 'salario': 60000},
    {'nombre': 'Luis', 'puesto': 'Analista', 'salario': 45000},
    {'nombre': 'Sofía', 'puesto': 'Desarrolladora', 'salario': 55000}
]

# Convertir a DataFrame de pandas
df = pd.DataFrame(empleados)

# Exportar a archivo CSV
df.to_csv('empleados.csv', index=False, encoding='utf-8')

'''Esto crea un archivo empleados.csv con el siguiente contenido:

nombre,puesto,salario
Ana,Gerente,60000
Luis,Analista,45000
Sofía,Desarrolladora,55000  '''

#Importar el archivo empleados.csv y mostrar el contenido
# Leer el archivo CSV
df_leido = pd.read_csv('empleados.csv')

# Imprimir contenido
print(df_leido)

#¿Cómo guardar también como archivo Excel (.xlsx) usando openpyxl?
# Guardar el DataFrame como archivo Excel
df.to_excel('empleados.xlsx', index=False, engine='openpyxl')

#si quisieras leer el archivo Excel:

df_excel = pd.read_excel('empleados.xlsx', engine='openpyxl')
print(df_excel)






