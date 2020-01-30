const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const MONGO = require('./const')
const router = require('./routes/routes')
const PORT = 3000

//m3gV7fdUCSi5tqw
//mongodb+srv://camilo:<password>@clustercamilo-fsfzk.mongodb.net/test?retryWrites=true&w=majority
app = express()
app.use(bodyParser.json())


mongoose.connect(MONGO.URI,{useNewUrlParser: true,useUnifiedTopology: true})
    .then(()=>console.log(`Conectado a la BD 👍✔✔`))
    .catch(err=> console.log(`🤦‍♀️🤦‍♀️🤦‍♀️${err}`))
app.use('/', router)

app.listen(PORT,()=>{
    console.log(`Server Running ${PORT}`)
})
