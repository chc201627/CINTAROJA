const modulesBooks = require('./modules/book.js')
class iBooks {
    constructor (title,author_name){
        this.title = title
        this.author_name = author_name
    }
  
}

const callBook = (libroAutor) =>{
    console.log(new iBooks(libroAutor.title,libroAutor.author_name))
}

let autorLibro=  new modulesBooks('Robots').getBook()
    .then((request)=>console.log(callBook(request.body)))
    .catch(error=>console.log(`Error ${error}`))
