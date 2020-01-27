class Maestro {
    constructor(materia, calificaciones){
        this.materia = materia
        this.calificaciones = calificaciones
    }

    getPromedio(){
       var notas = 0
        for (let i = 0; i < this.calificaciones.length; i++) {
            notas += this.calificaciones[i]
        
        }
         return notas/this.calificaciones.length
    }

}

class maestroFisica extends Maestro {
    constructor(materia,calificaciones,antiguedad){
        super(materia, calificaciones)
        this.antiguedad = antiguedad
    }

}

class maestroMusica extends Maestro{
    constructor(materia,calificaciones,edad){
        super(materia, calificaciones)
        this.edad = edad
    }
}

var fisica = new maestroFisica('Fisica',[3.5,2,4.2,5],5 )
console.log(fisica)
var promedio = fisica.getPromedio()
console.log(promedio)

var musica = new maestroMusica('musica',[5,5,5,5],20 )
console.log(musica)
var promedio = musica.getPromedio()
console.log(promedio)

// Ejercicio 2

class Construccion{
    constructor(numPuertas, numVentanas, numPisos,direccion,altura,largo,anchoterreno){
        this.numPuertas = numPuertas
        this.numVentanas = numVentanas
        this.numPisos = numPisos
        this.direccion = direccion
        this.altura = altura
        this.largo = largo
        this.anchoterreno = anchoterreno
    }
}
class casa extends Construccion {
    constructor(metrosCuadrado){
        super (numPuertas, numVentanas, numPisos,direccion,altura,largo,anchoterreno)
        this.metrosCuadrado = metrosCuadrado
    }
}

class edificio  extends Construccion{

}