const express = require("express");
const { dbConnection } = require("./database/config");
require("dotenv").config();
const cors = require("cors");

// * Crear el servidor de express
const app = express();

//* Base de datos
dbConnection();

// * CORS
app.use(cors());

// * Lectura y parseo del body
app.use(express.json());

// * Rutas
app.use("/api/auth", require("./routes/auth"));
app.use("/api/events", require("./routes/events"));

// * Directorio público
app.use(express.static("public"));

// * Escuchar peticiones
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
