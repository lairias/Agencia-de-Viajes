const Viaje = require("../models/Viajes");
const Testimonial = require("../models/Testimoniales");

exports.HomeInfo = (req, res) => {
  const promises = [];
  promises.push(
    Viaje.findAll({
      limit: 3,
    })
  );
  promises.push(
    Testimonial.findAll({
      limit: 3,
    })
  );
  //ejecutar el promis
  const resultado = Promise.all(promises);
  resultado
    .then((resultado) =>
      res.render("index", {
        viajes: resultado[0],
        testimoniales: resultado[1],
        pagina: "Agencia de Viajes",
        clase: "home",
      })
    )
    .catch((error) => console.log(error));
};