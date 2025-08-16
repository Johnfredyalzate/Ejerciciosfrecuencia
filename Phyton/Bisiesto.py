# Escribe un programa que solicite a un usuario un año y determien si es bisiesto. un año es bisiesto si es divisible por 4, pero no por 100, a menos que tambien sea divisible por 400.

year=int(input("ingrse el año para saber si es Bisiesto "))

if year % 4 == 0 and year % 100 !=0 or year % 400 == 0:
    print (" el año que ingreso es bisiesto")
else:
    print (" el año que ingreso no es bisiesto ")
