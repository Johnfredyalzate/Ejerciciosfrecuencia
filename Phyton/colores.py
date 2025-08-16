print("este programa mezcla colores")
color1=int(input("seleccine 1 para rojo, 2 para azul y 3 para verde"))
color2=int(input("seleccine 1 para rojo, 2 para azul y 3 para verde"))

if color1==1:
    if color2==1:
        print("el color resultante es rojo")
    elif color2==2:
        print("el color resultante es morado")
    elif color2==3:
        print("el color resultante es  cafe")
    else:
        print("revise su selección de colores color 2")


if color1 ==2:
    if color2==1:
        print("el color resultante es morado")
    elif color2==2:
        print("el color resultante es azul")
    elif color2==3:
        print("el color resultante es  cyan")
    else:
        print("revise su selección de colores color 2")


if color1 ==3:
    if color2==1:
        print("el color resultante es cafe")
    elif color2==2:
        print("el color resultante es cyan")
    elif color2==3:
        print("el color resultante es  verde")
    else:
        print("revise su seleccion de colores")
else:
        print("revise su selección de colores color 2")