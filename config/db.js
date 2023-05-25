const mongoose = require("mongoose");

const conexionDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE, {
      useNewUrlParser: true,
    });
    console.log("Conexion exitosa a la base de datos");
  } catch (error) {
    console.log(error);
  }
};

//importar los modelos
require("../models/Vacantes.js");

module.exports = conexionDB;
