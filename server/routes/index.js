//----Intance Seccion
const express = require("express");
const router = express.Router();

//--------------Controladores             
const {InfoNosotros}=require('../controllers/nosotroControlles')
const {HomeInfo} = require('../controllers/homeControlles')
const {InfoTestimoniales,PostTestimoniales} = require('../controllers/testimonialesControlles')
const {IdViajes,InfoViajes} = require('../controllers/viajeControlles')
//---------------Fin Controladores

module.exports = function () {
    //------------Peticiones GET----------------
    router.get("/",HomeInfo);

    router.get("/nosotros",InfoNosotros);

    router.get("/testimoniales", InfoTestimoniales);
    
    router.get("/viajes/:id",IdViajes);
    
    router.get("/viajes", InfoViajes);
    
    //------------Peticiones POST ----------------
    router.post("/testimoniales", PostTestimoniales);
    return router;
};
