'''import pandas as pd

# Datos
hijos = [2, 1, 3, 0, 2, 4, 1, 2, 3, 1]

# Crear una serie de pandas
serie = pd.Series(hijos)

# Crear tabla de frecuencia
frecuencia = serie.value_counts().sort_index()

# Crear tabla de frecuencia acumulada
frecuencia_acumulada = frecuencia.cumsum()

# Crear DataFrame final
tabla_frecuencia = pd.DataFrame({
    'Descripción (N° hijos)': frecuencia.index,
    'Frecuencia': frecuencia.values,
    'Frecuencia acumulada': frecuencia_acumulada.values
})

# Mostrar tabla
print(tabla_frecuencia.to_string(index=False))'''

import pandas as pd

# Lista de tiempos de espera
tiempos = [5, 8, 3, 10, 6, 9, 4, 7, 11, 2]

# Crear una Serie
serie = pd.Series(tiempos)

# Calcular la frecuencia (ordenada)
frecuencia = serie.value_counts().sort_index()

# Calcular la frecuencia acumulada
frecuencia_acumulada = frecuencia.cumsum()

# Crear DataFrame de la tabla de frecuencias
tabla_frecuencia = pd.DataFrame({
    'Tiempo de espera (min)': frecuencia.index,
    'Frecuencia': frecuencia.values,
    'Frecuencia acumulada': frecuencia_acumulada.values
})

# Mostrar la tabla
print(tabla_frecuencia.to_string(index=False))
