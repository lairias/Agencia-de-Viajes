//configuracion de la base de datos
const Sequelize = require('sequelize')

module.exports = new Sequelize("agencia de viajes", "root", "", {
  host: "127.0.0.1",
  ports: "3306",
  dialect:'mysql',
  define: {
      timestamps: false
  },
  poll:{
      max:5,
      min:0,
      acquire:30000,
      idle: 10000
  },
  operatorsAliases: false
});