////
var rp = require('request-promise');
class Books {
    constructor (name){
        this.name = name
    }

  
 getBook(){

    var options = {
   
        uri: `http://openlibrary.org/search.json?q=${this.name}`,
        resolveWithFullResponse: true 
    }

     return(rp(options).promise())

}

}
module.exports = Books