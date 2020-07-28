
const Testimonial = require("../models/Testimoniales");

exports.InfoTestimoniales = async  (req, res) => {
       const testimoniales = await Testimonial.findAll()
       res.render("testimoniales", {
         pagina: "Los testimoniales",
         testimoniales,
       });
       }

exports.PostTestimoniales = async  (req, res) => {
  let { nombre, correo, mensaje } = req.body;
  let errores = [];
  if (!nombre) {
    errores.push({ mensaje: "Agregar tu Nombre" });
  }
  if (!mensaje) {
    errores.push({ mensaje: "Agregar tu mensaje" });
  }
  if (!correo) {
    errores.push({ mensaje: "Agregar tu correo" });
  }
  if (errores.length > 0) {
    const testimoniales = await Testimonial.findAll()
    res.render("testimoniales", {
      nombre,
      correo,
      mensaje,
      errores,
      pagina:'Testimoniales',
      testimoniales
    });
  } else {
    //almacenamos en la base de datos
    Testimonial.create({
      nombre,
      correo,
      mensaje,
    })
      .then((testimonial) => res.redirect("/testimoniales"))
      .catch((error) => console.log(error));
  }
};