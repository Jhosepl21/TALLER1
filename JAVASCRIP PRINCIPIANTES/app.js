
let radio=prompt('Ingrese el radio del circulo:','');
console.log("El area del circulo es "+radio*radio+"π");
 if(radio*radio>25){
    console.log("EL CIRCULO ES MUY GRANDE")
  }else{
    console.log("muy chico")}
  
console.log("Numero fibonacci");
var x=1;
var a=0;
var b=1;
let n=prompt("INGRESE EL TAMAÑO DE NUMEROS GENERADOS");
while(x<=n){
  if(x%2==1){
    letraA=a+"<br>";
    document.write(letraA)
    a=a+b
  }else{
    letraB=b+"<br>"
    document.write(letraB)
      b=b+a
    
  }
 x=x+1
}
  