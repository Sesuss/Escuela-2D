let nu=parseInt(prompt("Cuantos numeros vas a introducir?"))
let vo=[]

for(let i=1; i<=nu; i++){
vo[i-1]=parseFloat(prompt("Dame el valor  "+i))
}
let nme=vo[0]
let nma=vo[0]
for(let x=1; x<=nu; x++){
if (vo[x]<nma){
nma=vo[x]}
if(vo[x]>nme){
nme=vo[x]
}
}
document.write("El numero mayor es : "+nme+"<br>")
document.write("El numero menor es : "+nma)