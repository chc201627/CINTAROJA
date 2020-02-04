const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = mongoose.Schema.ObjectId

const movieSchema = new Schema({
    movieID: ObjectId,
    tittle: String,
    year: Number,
    description: {
        type: String,
        required: true
    },
    image:{
        type: String,
        default: 'https://ichef.bbci.co.uk/news/320/cpsprodpb/10E9B/production/_109757296_gettyimages-1128004359.jpg'
    },
    theme:{
        type:String,
        enum:['comedia','terror','Drama','Infantil','Accion']
    },
    director:{
        type:String,
        default:'Desconocido'
    }
})

const Movie = mongoose.model('Movie',movieSchema)

module.exports = Movie