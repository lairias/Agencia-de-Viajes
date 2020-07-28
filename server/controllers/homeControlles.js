const Viaje = require("../models/Viajes");
const Testimonial = require("../models/Testimoniales");

exports.HomeInfo = async (req, res) => {
  const viajes = await Viaje.findAll({
      limit: 3,
    });
  const testimoniales = await  Testimonial.findAll({
limit: 3,});
  res.render("index", {
    viajes,
    testimoniales,
    pagina: "Agencia de Viajes",
    clase: "home",
  });
};