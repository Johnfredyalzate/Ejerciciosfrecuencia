# Escribe un programa que solicite al usuario la longitud de los 
# tres lados de un triangulo y determine si es equilatero, isosceles o escaleno
# equilatero sus tres lados iguales
# isosceles solo dos lados son iguales
# escaleno todos los lados son desiguales
lado1=int(input("Ingrese el lado 1 del triangulo "))
lado2=int(input("Ingrese el lado 2 del triangulo "))
lado3=int(input("Ingrese el lado 3 del triangulo "))


if lado1==lado2 and lado1==lado3:
    print("El triangulo es equilatero ")
elif lado1==lado2 or lado1==lado3 or lado2==lado3:
    print("El triangulo es isosceles ")
else:
    print(" El triangulo es escaleno ")