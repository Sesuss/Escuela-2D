var a=parseInt(prompt("Dame el valor de a"));
var b=parseInt(prompt("Dame el valor de b"));
var c=parseInt(prompt("Dame el valor de c"));
var x1=0
var x2=0

if (isNaN(a)||isNaN(b)||isNaN(c)   ) {
    window.alert("Algun valor no es un numero")
} else{
b*=-1
c=(b*b)-(4*(a*c))
a*=2
if (c<0){
    window.alert("Es una ecuacion imposible")
}
else{
    c= Math.sqrt(c);
    x1=b+c
    x2=b-c
    document.write("X1")
    document.write("X1 es -"+x1+"/"+a+"<br>");
    document.write("X2 es -"+x2+"/"+a);
    console.log("X1 es "+x1+"/"+a)
    console.log("X2 es "+x2+"/"+a)
}
}



