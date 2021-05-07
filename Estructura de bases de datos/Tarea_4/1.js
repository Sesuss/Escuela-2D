let n= parseInt(prompt("Cuantos valores vas a introducir"))
let numeros = new Array(n)
let cambionumeros = new Array(n)
let cambiogirar = new Array(n)
document.write("Girar vectores:<br>")
for(let i=0; i<n; i++)
{
    numeros[i]=parseInt(prompt("Ingrese el numero "+(1+i)))
    document.write(numeros[i]+" ")
}
document.write("<br>")


function Girar(){
    let x
    for(let i=0; i<=n-1; i++)
    {
        x=numeros[n-1]
        numeros[n-i]=numeros[i-1]
        numeros[n-1]=x
         
        document.write(numeros[i-1]+" ")
    }
    cambiogirar[n-1]=numeros[0]
    document.write(cambiogirar[n-1])
}
Girar()


