const Viaje = require("../models/Viajes");

exports.IdViajes = async (req, res) => {
  //  res.send(req.params.id)
  const viaje = await Viaje.findByPk(req.params.id)
    res.render("viaje", {
      viaje,
    });
};

exports.InfoViajes = async (req, res) => {
  const viajes = await Viaje.findAll()
   res.render("viajes", {
     pagina: "Próximos Viajes",
     viajes,
   });
};