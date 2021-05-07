var n1=parseInt(prompt("Dame el primer valor"))
var n2=parseInt(prompt("Dame el segundo valor"))
var n3=parseInt(prompt("Dame el tercer valor"))
var nx=1
for(k=1; k<=n1; k++){

for(x=1; x<=n1; x++){
document.write("*")

}
document.write("<br>")
}
document.write("<br>"+"<br>"+"<br>")

for(m=1; m<=n2; m++){
    
    for(f=1; f<=nx; f++ ){
        document.write("*")
    }
    nx++
    document.write("<br>")
}

document.write("<br>"+"<br>"+"<br>")
nx=n3
for(m=1; m<=n3; m++){
    
    for(f=1; f<=nx; f++ ){
        document.write("*")
    }
    nx--
    document.write("<br>")
}

document.write("<br>"+"<br>"+"<br>")

for(g=0; g<=24; g++){

    for(v=0; v<=58; v++){

        for(n=0; n<=58; n++){

            document.write(g+":"+v+":"+n+"<br>")
        }

        document.write(g+":"+v+":"+n+"<br>")
    }   
    
    document.write(g+":"+v+":"+n+"<br>")
}