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