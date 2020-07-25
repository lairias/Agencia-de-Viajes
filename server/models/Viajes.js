const Sequelize = require('sequelize')

const db = require("../config/database.js");

//configuramos las atributos de la tabla de Viajes
const Viaje = db.define('viaje',{
    titulo:{
        type:Sequelize.STRING
    },
    precio:{
        type:Sequelize.STRING
    },
    fecha_ida:{
        type:Sequelize.DATE
    },
    fecha_vuelta:{
        type:Sequelize.DATE
    },
    imagen:{
        type:Sequelize.STRING
    },
    descripcion:{
        type:Sequelize.STRING
    },
    disponibles:{
        type:Sequelize.fa-strikethrough
    }

})

module.exports = Viaje