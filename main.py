print("NUMERO FIBONACCI")
n=int(input("CUANTOS NUMEROS SE DESEA GENERAR"))
x=1
a=0
b=1
while x<=n:
    if x%2==1:
        print(a)
        a=a+b
    else:
        print(b)
        b=b+a
    x=x+1