class miClaseUno{
    constructor(primero, segundo){
        this.uno= primero
        this.dos= segundo
        this.tres ="Hola mundo"
    }
    mimetodouno(){
        return this.uno
    }
    mimetododos(parametrouno, parametrodos){
        document.write("El parametro uno es "+parametrouno+
        "<br>El parametro dos es "+ parametrodos)
    }
}

class miclasedos extends miClaseUno{
constructor(uno, dos, cuatro){
    super (uno, dos)
    this.cuatro= cuatro
}
}

var objetotres=new miclasedos("Miguel", "Gonzales", 55)
document.write(objetotres.uno)