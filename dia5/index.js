const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const PORT = 3000
const home = `${__dirname}/views/index.html`
app.use(bodyParser.json())
//endpoint
app.get('/', (request, response)=>{
    response.status(200).sendFile(home)
})

app.post('/suma', (request,response)=>{
    console.log(request.body)
    const {num1, num2} = request.body
    const result = num1 + num2
    response.status().statusCode.send(result)
  
})

app.get('/name',(request,response)=>{
    const name = {
        name: "Camilo",
        age: 30
    }
    response.status(200).send(name)
})
// Ultima linea del servidor
app.listen(PORT,()=>{
    console.log('Servidor arriba en el puerto ' + PORT)
})