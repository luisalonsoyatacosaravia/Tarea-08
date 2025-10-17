const MascotasModel = require("../models/mascotasModel"); 

exports.crearMascota = async (req, res) => {
    const { nombre, edad } = req.body; 

    if (!nombre || !edad) {
        return res.status(400).json({ mensaje: "Falta completar los campos obligatorios" });
    }

    try {
        const data = { nombre, edad };
        const id = await MascotasModel.create(data);
        res.status(201).json({ id: id, mensaje: "Mascota registrada correctamente" });
    } catch (e) {
        console.error(e);
        res.status(500).json({ mensaje: "Error interno del servidor" });
    }
};

exports.obtenerMascotas = async (req, res) => {
    try {
        const mascotas = await MascotasModel.getAll();
        res.status(200).json(mascotas);
    } catch (e) {
        console.error(e);
        res.status(500).json({ mensaje: "Error interno del servidor" });
    }
};

exports.obtenerMascotaPorId = async (req, res) => {
    const { id } = req.params;
    try {
        const mascota = await MascotasModel.getById(id);
        if (!mascota) {
            return res.status(404).json({ mensaje: "Mascota no encontrada" });
        }
        res.status(200).json(mascota);
    } catch (e) {
        console.error(e);
        res.status(500).json({ mensaje: "Error interno del servidor" });
    }
};


exports.actualizarMascota = async (req, res) => {
    const { id } = req.params;
    const updateData = req.body;

    if (Object.keys(updateData).length === 0) {
        return res.status(400).json({ mensaje: "No hay datos por actualizar" });
    }

    try {
        const affectedRows = await MascotasModel.update(id, updateData);

        if (affectedRows === 0) {
            return res.status(404).json({ mensaje: "Mascota no encontrada para actualizar" });
        }
        res.status(200).json({ mensaje: "Mascota actualizada correctamente" });
    } catch (e) {
        console.error(e);
        res.status(500).json({ mensaje: "Error interno del servidor" });
    }
};

exports.eliminarMascota = async (req, res) => {
    const { id } = req.params;
    try {
        const affectedRows = await MascotasModel.delete(id);

        if (affectedRows === 0) {
            return res.status(404).json({ mensaje: "Mascota no encontrada para eliminar" });
        }

        res.status(200).json({ mensaje: "Mascota eliminada correctamente" });
    } catch (e) {
        console.error(e);
        res.status(500).json({ mensaje: "Error interno del servidor" });
    }
};