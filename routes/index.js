const express = require("express");
const { mostrarTrabajos } = require("../controllers/HomeController.js");
const {
  formularioNuevaVacante,
  agregarVacante,
} = require("../controllers/VacantesController.js");

const router = express.Router();

router.get("/", mostrarTrabajos);

//crear vacantes
router.get("/vacantes/nueva", formularioNuevaVacante);
router.post("/vacantes/nueva", agregarVacante);

module.exports = router;
