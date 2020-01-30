const express = require('express')
const bodyParser = require('body-parser')
const PORT = 3000
const app = express()
const programs = `${__dirname}/views/programs.html`
app.use(bodyParser.json())

app.get('/',(request,response)=>{
    response.status(200).send("Hola")
})

app.post('/alumni',(request,response)=>{

    const {name,program} = request.body
    const status = 'Inscrito'
    const respuesta = {
        name,
        program,
        status
    }
    response
    .status(200)
    .send(respuesta)
})

app.get('/programs',(request,response)=>{
   
    const{hola,location} =request.query
    //funcion(gclid,location)
    console.log(hola)
    console.log(location)
    response.status(200).sendFile(programs)
})

app.listen(PORT,()=>{
    console.log(`Server runnin on port1 ${PORT}`)
})


//pokeapi.co/api/v2/pikachu
//params

app.get('/getProgram/:program',(request,response)=>{
    console.log(request.params)
    const{program}=request.params
    switch (program) {
        case 'cintaroja':
            const cintaRoja ={
                name: "CintaRoja",
                content: {
                    javascript: 'ES6',
                    backend: '4.17',
                    bd: 'Mongo',
                    frontend:'ReacjJS'
                }
            }
            response.status(200).send(cintaRoja)
            break;
        case 'cintablanca':
            const cintaBlanca ={
                name: "CintaRoja",
                content: {
                    javascript: 'JS Basico',
                    backend: '4.17',
                    bd: 'No aplica',
                    frontend:'Bootstraps'
                
            }
        }
        break;
        default:
            response.status(404).send('Programa no ecnontrado😢😢')
            break;
    }
})