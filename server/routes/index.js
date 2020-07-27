//----Intance Seccion
const express = require("express");
const router = express.Router();
//el modelo siempre estara conectado a nuestra base de datos

const Viaje = require("../models/Viajes");
const Testimonial = require("../models/Testimoniales");

module.exports = function () {
    router.get("/", (req, res) => {
        const promises = [];
        promises.push(
            
            Viaje.findAll({
                limit:3
            })
        )
        promises.push(
            
            Testimonial.findAll({
                limit:3
            })
        )
//ejecutar el promis
const resultado = Promise.all(promises)
            resultado.then((resultado) =>
                res.render("index", {
                    
                    viajes:resultado[0],
                    testimoniales:resultado[1],
                    pagina: "Agencia de Viajes",
                    clase: "home",
                })
            )
            .catch((error) => console.log(error));



    });
    router.get("/nosotros", (req, res) => {
        res.render("nosotros", {
            pagina: "Sobre Nosotros",
        });
    });
    router.get("/testimoniales", (req, res) => {
        Testimonial.findAll().then((testimoniales) =>
            res.render("testimoniales", {
                pagina: "Los testimoniales",
                testimoniales,
            })
        );
    });
    //post cunedo se envia unos datos al formulario
    router.post("/testimoniales", (req, res) => {
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
            res.render("testimoniales", {
                nombre,
                correo,
                mensaje,
                errores,
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
    });

    router.get("/viajes/:id", (req, res) => {
        //  res.send(req.params.id)
        Viaje.findByPk(req.params.id)
            .then((viaje) =>
                res.render("viaje", {
                    viaje,
                })
            )
            .catch((error) => console.log(error));
    });

    router.get("/viajes", (req, res) => {
        Viaje.findAll()
            .then((viajes) =>
                res.render("viajes", {
                    pagina: "Próximos Viajes",
                    viajes,
                })
            )
            .catch((error) => console.log(error));
    });

    return router;
};
