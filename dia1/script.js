//String 
var name = 'Gerardo'

// Número 
var age = 24

// Booleanas

var llueve = false;

// Arreglos

var countries = ['Colombia','Mexico','Costa Rica']

//Objetos literales se define como una variable

var car = {
    color: 'Rojo',
    speed: 150,
    wheels: 'Michellin',
    engine:'v8',

    start: function(){
        alert('Este auto va a ' + this.speed+'km/h')
    },
    stop: function(a){
        alert('Para, hay un ' + a + ' en el  camino')
    }

}
console.log(car)
car.height = 140

car.color = 'Verde'
console.log(car)
// console.log(car.color)
// car.start()
// car.stop('perro')


//Clases
class Pokemon{
    constructor(name, type, age){
        this.name = name,
        this.type = type,
        this.age  = age
    }
}
// Instancia de la clase pokemon
var pikachu = new Pokemon('pikachu','Electrico',20)
var  bulbasaur = new Pokemon('Bulbasaur','planta',3)
console.log(pikachu)
console.log(bulbasaur)


//Herencia

class animal {
    constructor(legs){
        this.brain = true
        this.legs = legs
    }
}

var human = new animal(2)

//SubClase
class pet extends animal {
    constructor(legs,fleas){
        super(legs)
        this.fleas = fleas
        
    }
}
var dog = new pet(4)


// Ejercicio 1

var myPenguin ={
    character: 'Misha',
    origin: ['Death and the Penguin','Penguin Lost'],
    author: 'Andrey Kurkov',
    notes:'A cheeky penguin who gets in over his head in mafia affairs and political intrigue.',
    
    hello: function(){
        console.log (`Hola, soy un pinguino mi nombre es: ${this.character}`)
    }
}
myPenguin.hello()
myPenguin.puedeVolar= false
myPenguin.graznar= function(){
    console.log("kaww kaww")
}
myPenguin.saludar = function(){
    console.log (`Hola, soy un pinguino mi nombre es: ${this.character}`)
}
myPenguin.character = 'Señor Pingu'
myPenguin.saludar()
myPenguin.volar = function(){
    if(myPenguin.volar){
        console.log ('¡Puedo volar!' )
    }else{
        console.log('No puedo volar :(')
    }
    
}
myPenguin.puedeVolar = true
myPenguin.volar()

// Receta
class Receta{
    constructor(titulo, porciones, ingredientes){
        this.titulo = titulo
        this.porciones = porciones
        this.ingredientes = ingredientes
    }

    
}

var mole = new Receta('Mole',2,["canela","comino","cocoa"])
console.log(mole)

//Libro
class Libro{
    constructor(titulo,autor,leido){
        this.titulo = titulo
        this.autor = autor
        this.leido = leido
    }
}

var books = [
    {
        title: 'El coronel no tiene quien le escriba',
        author: 'Gabriel García Márquez',
        read: true
    },
    {
        title: 'Do Androids Dream of Electric Sheep',
        author: 'Phillip K. Dick',
        read: false
    }
];
for (var i = 0; i < books.length; i++) {
    console.log(`Titulo: ${books[i].title}, Autor: ${books[i].author}, Leido: ${books[i].read == true ? 'si' : 'no'}`);    
}

