numero=int(input("digite un numero positivo"))
print(numero)
if numero<0:
    print("por favor digite un numero positivo")
    numero=int(input("Porfavor digite un numero y revise que sea positivo"))
    if numero<0:
        print(f"por favor digite un numero positivo, usted digitó {numero}")
        numero =int(input("por favor digite un numero positivo"))
print("finalizó el programa")