const mongoose = require("mongoose");
const slug = require("slug");
const shortid = require("shortid");

const vacantesSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: "El nombre de la vacante es obligatorio",
    trim: true,
  },
  empresa: {
    type: String,
    trim: true,
  },
  ubicacion: {
    type: String,
    trim: true,
    required: "La ubicacion es obligatoria",
  },
  salario: {
    type: String,
    default: 0,
    trim: true,
  },
  contrato: {
    type: String,
  },
  descripcion: {
    type: String,
    trim: true,
  },
  url: {
    type: String,
    lowercase: true,
  },
  skills: [String],
  candidatos: [
    {
      nombre: String,
      email: String,
      cv: String,
    },
  ],
});

vacantesSchema.pre("save", function (next) {
  //crear url
  const url = slug(this.titulo);
  this.url = `${url}-${shortid.generate()}`;
  next();
});

const Vacante = mongoose.model("Vacante", vacantesSchema);
module.exports = Vacante;
