const Vacante = require("../models/Vacantes");

const formularioNuevaVacante = (req, res) => {
  res.render("nueva-vacante", {
    nombrePagina: "Nueva Vacante",
    tagline: "Llena el formulario y publica tu vacante",
  });
};

//agrega las vacantes a la base de datos
const agregarVacante = async (req, res) => {
  //instanciamos la vacante
  const vacante = new Vacante(req.body);

  //crear arreglo de habilidades (skilss)
  vacante.skills = req.body.skills.split(",");

  //almacenar en la base de datos
  const nuevaVacante = await vacante.save();

  //redireccionar
  res.redirect(`/vacantes/${nuevaVacante.url}`);
};

module.exports = {
  formularioNuevaVacante,
  agregarVacante,
};
