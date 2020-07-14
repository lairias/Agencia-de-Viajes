//----------------------Intance seccion
const express = require('express');

//----------------------Section the setting 
const app = express()
//----------------------Section the Routes
app.use('/',(req,res)=>{
    res.send('Hola mundo');
});

//-----------------------Section del  PORT
app.listen(3000);