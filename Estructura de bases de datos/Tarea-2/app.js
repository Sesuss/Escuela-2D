class Producto{
    constructor(Nombre,Precio,ID,Cantidad){
            this.Nombre=Nombre
            this.Precio=Precio
            this.ID=ID
            this.Cantidad=Cantidad
            this.siguiente=null
            this.anterior=null
    }
    info(){
        return "Nombre: "+this.Nombre+"<br>"+"Precio: "+this.Precio+"<br>"+"ID: "+this.ID+"<br>"+"Cantidad: "+this.Cantidad+"<br>"
    }
}

class Inventario{
    constructor(){
        this.inicio=null
    }

    agreagar(nuevo){
        
        if(this.inicio===null){
            this.inicio=nuevo
    } else if(nuevo.ID<this.inicio.ID){
        this.inicio.anterior=nuevo
        nuevo.siguiente=this.inicio
        this.inicio=nuevo
    }else{
            let a = this.inicio
            let g = 1
            while(nuevo.ID > a.ID && g!=5){
                if(a.siguiente===null){
                    a.siguiente=nuevo
                    nuevo.anterior=a
                    g=5
                    return
                } else{
                    a=a.siguiente
                }
            }
            nuevo.siguiente=a
            nuevo.anterior=a.anterior
            a.anterior.siguiente=nuevo
            a.anterior=nuevo
        }
    
    }
    listar(){
        let a=this.inicio
        let li=""
        if(a.siguiente==null){
        li=a.info()+"<br>"
        return li
    } else {
        while(a.siguiente!=null){
            li=li+a.info()+"<br>"
            a=a.siguiente
        }
        li=li+a.info()+"<br>"
        return li
    }
    }

    buscar(ID){
        let a=this.inicio
        if (a.ID===ID) {
            return a  
          }
        while(a.siguiente!=null && ID>=a.ID){
        a=a.siguiente
        if (a.ID===ID) {
          return a  
        }
        }
        return null
    }
    borrar(ID){
        let b
        let a=this.inicio
        if (a.ID===ID) {
            a=a.siguiente
            this.inicio=a
            this.anterior=null
          }
        while(a.siguiente!=null){
        b=a
        a=a.siguiente
        
        if (a.ID===ID) {
            if (a.siguiente===null) {
                a.anterior.siguiente=null
            }else{
                a.anterior.siguiente=a.siguiente
                a.siguiente.anterior=a.anterior

            }
        }
        }
        document.getElementById("textoabuscar").value=""
        lista()

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
    document.getElementById("Nombre").value=" ";
    document.getElementById("Precio").value=" ";
    document.getElementById("ID").value=" ";
    document.getElementById("Cantidad").value=" ";
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