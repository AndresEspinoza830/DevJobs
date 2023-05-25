const express = require("express");
const { create } = require("express-handlebars");
//Hnadlebars actualizado documentacion
const handlebars = require("handlebars");
const {
  allowInsecurePrototypeAccess,
} = require("@handlebars/allow-prototype-access");
const router = require("./routes/index.js");
const conexionDB = require("./config/db.js");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();

//Contiene toda la informacion de express
const app = express();

//Para que reciba los datos de los formularios y para subir archivos
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Helpers handlebars
const hbs = create({
  handlebars: allowInsecurePrototypeAccess(handlebars),
  helpers: require("./helpers/handlebars.js"),
});

//Habilitar handlebars documentacion
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.set("views", "./views");

//Archivos estaticos
app.use(express.static("public"));

app.use(cookieParser());

app.use(
  session({
    secret: process.env.SECRETO,
    key: process.env.KEY,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.DATABASE }),
  })
);

//Conexion base de datos
conexionDB();

//RUTAS
app.use("/", router);

//Escuchar el servidor en un puerto
const port = process.env.PORT || 5001;
app.listen(port, (req, res) => {
  console.log(`Escuchando servidor desde el puerto ${port}`);
});
