#Escribe un programa que solicite al usuario 3 números y determine cual es el mayor de ellos.
may1=int(input("Ingrese Numero 1 "))
may2=int(input("Ingrese Numero 2 "))
may3=int(input("Ingrese Numero 3 "))

if may1>may2 and may1>may3:
    print(f"el numero mayor es {may1} ")
elif may2>may1 and may2>may3:
    print(f"el numero mayor es {may2} ")
else:
    print(f" El numero mayor es:  {may3} ")