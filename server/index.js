//----------------------Intance seccion
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
//----------------------Variable Import Section 
const Routes = require('./routes');

//----------------------Section the setting 
const app = express()

//importamos la configuracion de la base de datos
const db = require('./config/database.js')

require('dotenv').config({path:'variables.env'})


db.authenticate()
    .then(()=> console.log('Conactado a la base de datos'))
//     .catch(error => console.log(error))

//----------------------setting Template Engine 
app.set('view engine','pug');
app.set('views', path.join(__dirname,'./views'))
//send variables to pug engine 
app.use((req,res,next)=>{
    res.locals.fechaActual = new Date().getFullYear();
    res.locals.Destacando = req.path;
    // console.log(res.locals);
    return next();
})
//**************************************** */

//----------------------Section the Routes or Middleware
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:true}))
app.use('/',Routes())

//puerto host de la app

const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3000;
//-----------------------Section del  PORT
app.listen(port, host,()=>{
    console.log('El servidor conectado')
});