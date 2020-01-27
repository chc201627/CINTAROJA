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
/* // ES6
///Antigua
var age = 5
 
// Puede cambiar
let name = 'Camilo'

//constantes

const pi = 3.1416

//Antiguo

// function getAge(x){
//      console.log(`la edad que escrbiste es ${x}`)
//  }
//  getAge(10)

//Arrow functions

 const getAge = x => `La edad que escribiste es ${x}`
 console.log(getAge(5))


 */

//  console.log(1);
//  console.log(2);
//  setTimeout(() => {
//      console.log(3);
     
//  }, 5000);
//  console.log(4);

const operacion = (tipo, x, y) => tipo(x,y)
const suma = (x,y) =>  x + y
const resta = (x,y) => x - y
const mult = (x,y) => x * y

console.log(operacion(resta, 7, 5))
console.log(operacion(suma, 5, 5))
console.log(operacion(mult, 5, 2))

const mayorEdad = (edad, menor, mayor) => {
    // if(edad >=18){
    //     return mayor()
    // } else {
    //     menor()
    // }

    //operador ternario
    // es un if compracion si 
    return edad >= 18 ? mayor() : menor()
}
const menorDeEdad = () => 'Eres menor de edad'
const mayorDeEdad = () => 'Eres mayor de edad'

console.log (mayorDeEdad(24, menorDeEdad,menorDeEdad))



//PROMESAS
//Pendiente (veremos)
// Se cumple la promesa (celular)
// No se cumple y razon

const birthday = (dinero, amor, rencores) => {
    return new Promise((resolve, reject) => {
        if(dinero && amor && !reconres){
            resolve('');
        }else{
            reject('')
        }
    })
}

birthday(true, true, false)
    .then((data) => console.log(data))
    .catch((razon)=>console.log(razon))
