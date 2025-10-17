const db = require("../config/db"); 
const Mascotas = {
    getAll: async () => {
        const [rows] = await db.query('SELECT * FROM mascotas');
        return rows;
    },
    getById: async (id) => {
        const [rows] = await db.query('SELECT * FROM mascotas WHERE id = ?', [id]);
        return rows[0]; 
    },
    create: async (data) => {
        const [result] = await db.query('INSERT INTO mascotas SET ?', data);
        return result.insertId;
    },
    update: async (id, data) => {
        const [result] = await db.query('UPDATE mascotas SET ? WHERE id = ?', [data, id]);
        return result.affectedRows;
    },
    delete: async (id) => {
        const [result] = await db.query('DELETE FROM mascotas WHERE id = ?', [id]);
        return result.affectedRows;
    },
};

module.exports = Mascotas;