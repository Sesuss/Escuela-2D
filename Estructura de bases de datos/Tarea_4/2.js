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
    for(let i=1; i<=n-1; i++)
    {
        cambiogirar[i-1]= numeros[i]
        document.write(cambiogirar[i-1]+" ")
    }
    cambiogirar[n-1]=numeros[0]
    document.write(cambiogirar[n-1])
}
Girar()


document.write("<br>Invertir vectores:<br>")
for(let i=0; i<n; i++)
{
    document.write(numeros[i]+" ")
}
document.write("<br>")
function invertir(){

    for(let i=1; i<=n; i++)
{
    cambionumeros[i-1]= numeros[n-i]
    document.write(cambionumeros[i-1]+" ")
}
}
invertir()