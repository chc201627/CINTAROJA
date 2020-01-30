const express = require('express')
const bodyparser = require('body-parser')
const PORT = 3000

app = express()
app.use(bodyparser.json())


app.get('/api/',(req,res)=>{
    res.status(200).send('Hola Mundo')
})

app.get('/api/suma',(req,res)=>{
    console.log(req.query)
    const {num1,num2} = req.query
    const respuesta = parseInt(num1) + parseInt(num2)
    console.log(respuesta)

    res.status(200).send(respuesta.toString())

})

app.get('/api/usuario',(req,res)=>{
    const{usuario} = req.query
    respuesta = {
        usuario
    }
    res.status(200).send(respuesta)
})

app.listen(PORT,()=>{
    console.log(`Server running in port ${PORT}`)
  })