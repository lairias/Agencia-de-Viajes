const Viaje = require("../models/Viajes");

exports.IdViajes = (req, res) => {
  //  res.send(req.params.id)
  Viaje.findByPk(req.params.id)
    .then((viaje) =>
      res.render("viaje", {
        viaje,
      })
    )
    .catch((error) => console.log(error));
};

exports.InfoViajes = (req, res) => {
  Viaje.findAll()
    .then((viajes) =>
      res.render("viajes", {
        pagina: "Próximos Viajes",
        viajes,
      })
    )
    .catch((error) => console.log(error));
};