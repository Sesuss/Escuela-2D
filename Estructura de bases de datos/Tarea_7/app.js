class Producto{
    constructor(Nombre,Precio,ID,Cantidad){
            this.Nombre=Nombre
            this.Precio=Precio
            this.ID=ID
            this.Cantidad=Cantidad
    }
    info(){
        return "Nombre: "+this.Nombre+"<br>"+"Precio: "+this.Precio+"<br>"+"ID: "+this.ID+"<br>"+"Cantidad: "+this.Cantidad+"<br>"
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
            if (this.datos[i].ID===ID) {
                return this.datos[i]
            }
        }
        return null
    }
    borrar(ID){
        for(let i=0;i<this.datos.length; i++){
            if (this.datos[i].ID===ID) {
                this.datos.splice(i,1)
    
            }
        }
        }   
}


let Tienda=new Inventario()



function habili(){
    document.getElementById("Nombre").disabled = false;
    document.getElementById("Precio").disabled = false;
    document.getElementById("ID").disabled = false;
    document.getElementById("Cantidad").disabled = false;
}
function desabi(){
    document.getElementById("Nombre").disabled = true;
    document.getElementById("Precio").disabled = true;
    document.getElementById("ID").disabled = true;
    document.getElementById("Cantidad").disabled = true;
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
    document.getElementById("Precio").value="";
    document.getElementById("ID").value="";
    document.getElementById("Cantidad").value="";
    document.getElementById("Nuevo").innerHTML="Guardar";
    }
    else if(document.getElementById("Nuevo").innerHTML=="Guardar"){
    let ID,Nombre,Precio,Cantidad
    Nombre=document.getElementById("Nombre").value
    Precio=document.getElementById("Precio").value
    ID=document.getElementById("ID").value
    Cantidad=document.getElementById("Cantidad").value
    let pro=new Producto(Nombre,Precio,ID,Cantidad)
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

    }else{
        document.getElementById("resultado").innerHTML="Se encontro <br>"+res.info()
        document.getElementById("Borrar").hidden=false
        
    }
}

function Borrar(){
    let ID=document.getElementById("textoabuscar").value
    let res=Tienda.borrar(ID)
        document.getElementById("resultado").innerHTML="Listo"
}
function lista(){
    document.getElementById("lista").value=""
    let res=Tienda.listar()
    document.getElementById("lista").innerHTML=res
    
}