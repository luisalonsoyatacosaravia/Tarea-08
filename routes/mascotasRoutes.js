const express = require("express");
const router = express.Router();


const {
    crearMascota,
    obtenerMascotas,
    obtenerMascotaPorId,
    actualizarMascota,
    eliminarMascota,
} = require("../controllers/mascotasController"); 


router.post("/", crearMascota);        
router.get("/", obtenerMascotas);       
router.get("/:id", obtenerMascotaPorId);  
router.put("/:id", actualizarMascota);    
router.delete("/:id", eliminarMascota);  

module.exports = router;