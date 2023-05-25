const Vacante = require("../models/Vacantes");

const mostrarTrabajos = async (req, res, next) => {
  //Listando todas las vacantes de base de datos
  const vacantes = await Vacante.find();
  console.log(vacantes);

  if (!vacantes) {
    return next();
  }

  res.render("home", {
    nombrePagina: "devJobs",
    tagline: "Encuentra y publica trabajos para Desarrolladores Web",
    barra: true,
    boton: true,
    vacantes,
  });
};

module.exports = {
  mostrarTrabajos,
};
