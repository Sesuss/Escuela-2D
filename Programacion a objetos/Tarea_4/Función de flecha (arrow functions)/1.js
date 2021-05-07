let nu=parseInt(prompt("Cuantos numeros vas a introducir?"))
    let vo=[]
    for(let i=1; i<=nu; i++){
    vo[i-1]=parseFloat(prompt("Dame el valor  "+i+" del arreglo"))
    document.write(vo[i-1]+"<br>")
    }
   
let v=parseInt(prompt("Que numero va a buscar?"))
 let con=0
        
for (let x=1;x<=nu; x++){

if (vo[x-1]==v){
 con=con+1
        
}
}
if (con!=0) {
document.write("Se encontro "+con+" veces el numero "+v)
} else{document.write("No se enconto ninguna vez  -1")}
