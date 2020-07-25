//----------------------Intance seccion
const express = require('express');
const path = require('path');

//----------------------Variable Import Section 
const Routes = require('./routes');

//----------------------Section the setting 
const app = express()

//importamos la configuracion de la base de datos
// const db = require('./config/database.js')
// db.authenticate()
//     .then(()=> console.log('Conactado a la base de datos'))
//     .catch(error => console.log(error))

//----------------------setting Template Engine 
app.set('view engine','pug');
app.set('views', path.join(__dirname,'./views'))
//send variables to pug engine 
app.use((req,res,next)=>{
    res.locals.fechaActual = new Date().getFullYear();
    // console.log(res.locals);
    return next();
})
//**************************************** */

//----------------------Section the Routes or Middleware
app.use(express.static('public'))
app.use('/',Routes())




//-----------------------Section del  PORT
app.listen(3000);