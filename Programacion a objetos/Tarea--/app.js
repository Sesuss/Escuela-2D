class Producto{
    constructor(Nombre){
            this.Nombre=Nombre

    }
    info(){
        return "Nombre: "+this.Nombre+"<br>"
    }
}

class Inventario{
    constructor(){
        this.datos=[]
    }
    agreagar(nuevo){
        this.datos.push(nuevo)
    }
    listar(){
        let txtt=""
        for(let i=0; i<this.datos.length; i++){
            txtt=txtt+this.datos[i].info()+"<br>"
        }
        return txtt
    }

    buscar(ID){
        for(let i=0;i<this.datos.length; i++){
            if (this.datos[i].Nombre===ID) {
                return this.datos[i]
            }
        }
        return null
    }
    borrar(ID){
        for(let i=0;i<this.datos.length; i++){
            if (this.datos[i].Nombre===ID) {
                this.datos.splice(i,1)
    
            }
        }
        }  
        
    Cambiar(ID){
        if(document.getElementById("Boto").hidden==true){
            habili()
            document.getElementById("Nombre").innerHTML=" "
            document.getElementById("Boto").hidden=false
            document.getElementById("Nuevo").hidden=true
                       
        }else{
            let gg =document.getElementById("Nombre").value
            for(let i=0;i<this.datos.length; i++){
                if (this.datos[i].Nombre===ID) {
                    this.datos[i].Nombre=gg
                }
                }
                desabi()
                limpiar()
                lista()
                document.getElementById("Nombre").innerHTML=" "
                document.getElementById("Boto").hidden=true
                document.getElementById("Nuevo").hidden=false

        }

    }
}


let Tienda=new Inventario()



function habili(){
    document.getElementById("Nombre").disabled = false;

}
function desabi(){
    document.getElementById("Nombre").disabled = true;

}
function limpiar(){
    document.getElementById("resultado").innerHTML=""
    document.getElementById("lista").innerHTML=""
    document.getElementById("Borrar").hidden=true
    document.getElementById("textoabuscar").value=""

  }



function Agregar(){
    if (document.getElementById("Nuevo").innerHTML=="Nuevo") {

    habili()
    document.getElementById("Nombre").value="";
    document.getElementById("Nuevo").innerHTML="Guardar";
    }

    else if(document.getElementById("Nuevo").innerHTML=="Guardar"){
    let Nombre
    Nombre=document.getElementById("Nombre").value
    let pro=new Producto(Nombre)
    Tienda.agreagar(pro)
    document.getElementById("Nuevo").innerHTML="Nuevo";
    desabi()
    }
}

function Buscar(){
    let ID=document.getElementById("textoabuscar").value
    let res=Tienda.buscar(ID)
    if (res==null) {
        document.getElementById("resultado").innerHTML="No se encontro nada"
        document.getElementById("Borrar").hidden=true
        document.getElementById("Cambiar").hidden=true


    }else{
        document.getElementById("resultado").innerHTML="Se encontro <br>"+res.info()
        document.getElementById("Borrar").hidden=false
        document.getElementById("Cambiar").hidden=false
        
    }
}
function Cambiar(){
    if(document.getElementById("Boto").hidden==true){
        document.getElementById("resultado").innerHTML="Escribe el nuevo nombre"
        Tienda.Cambiar(1)

    }else{
        let ID=document.getElementById("textoabuscar").value
        Tienda.Cambiar(ID)
    }
    
}

function Borrar(){
    let ID=document.getElementById("textoabuscar").value
    Tienda.borrar(ID)
        document.getElementById("resultado").innerHTML="Listo"
}
function lista(){
    document.getElementById("lista").value=""
    let res=Tienda.listar()
    document.getElementById("lista").innerHTML=res
    
}
