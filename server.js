require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')
const indexRoutes = require('./backend/routes/index')
const operationRoutes = require('./backend/routes/operations')


app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(express.static(__dirname + '/views'));
app.use('/',indexRoutes)
app.use('/',operationRoutes)
app.use(cors())


app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')



const PORT = process.env.PORT || 3000
app.listen(PORT,()=>{
    console.log(`Server listening at ${PORT}`)
})