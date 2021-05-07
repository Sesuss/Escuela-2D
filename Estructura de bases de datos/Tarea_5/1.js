//Clase ALumno
let Alumno=function (nombre, numeroCuenta, promedio){
    this.nombre=nombre;
    this.numeroCuenta=numeroCuenta;
    this.promedio=promedio;
    this.semestre=1;
    this.info=function(){
        return "<h3>" + this.nombre + "</h1>" +
               "<p>" + this.numeroCuenta + "<p>" +
               "<p> Promedio= " + this.promedio + "<br>" +
               "semestre= " + this.semestre + "</p>";
    }
}
 
//clase grupo
let Grupo=function(){
    this.datos=Array()
    this.agregar=function(nuevo){
        this.datos.push(nuevo);
    }
    this.buscar=function(nombre){
        //buscar por el nombre y regresar el alumno
        return this.datos[0]; //null
    }
    this.listar=function(){
        let lista='';
        for (let i=0;i<this.datos.length;i++){
            lista+=this.datos[i].info() + "<br>";
        }
        return lista;
    }
    this.eliminar=function(nombre){
        //buscarlo y si existe lo elimino ydigo true y si no digo false
        return true;
    }
}
 
//codigo de interacción
 
let g2d=new Grupo();
 
let btnCrear=document.getElementById('btnCrear');
btnCrear.addEventListener('click',()=>{
    let nom, numc, prom;
    nom=document.getElementById('txtNombre').value;
    numc=document.getElementById('txtNoCuenta').value;
    prom=document.getElementById('txtPromedio').value;
    let alumno=new Alumno(nom,numc,prom);
    g2d.agregar(alumno); //aqui lo agrego
    //let res=document.getElementById('resultados');
    //res.innerHTML+=alumno.info();
});
 
let btnListar=document.getElementById('btnListar');
btnListar.addEventListener('click',()=>{
  let res=document.getElementById('resultados');
  res.innerHTML+="<h2>Lista</h2>" + g2d.listar();  
});
 
let btnBuscar=document.getElementById('btnBuscar');
btnBuscar.addEventListener('click',()=>{
    let nombre=document.getElementById('txtNombre').value;
    let buscado=g2d.buscar(nombre);
    let res=document.getElementById('resultados');
    if (buscado!=null){
        res.innerHTML+=buscado.info();
        document.getElementById('txtNoCuenta').value=buscado.numeroCuenta;
        document.getElementById('txtPromedio').value=buscado.promedio;
    }else{
        res.innerHTML+="No se encontro" + g2d.listar()
    }
})
