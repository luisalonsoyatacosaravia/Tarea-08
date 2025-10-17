const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");

const mascotasRoutes = require("./routes/mascotasRoutes");

app.use(cors());
app.use(express.json()); 

app.use("/api/mascotas", mascotasRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});