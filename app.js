//console.log("Bienvenidosss!!");
const express=require("express");
const mongo=require("mongoose");

const ruta = require("./routes/tipoEquipoRuta");
const ruta2 = require("./routes/estadoEquipoRuta");
const ruta3 = require("./routes/usuarioRuta");
const ruta4 = require("./routes/marcaRuta");
const ruta5 = require("./routes/inventarioRuta");


const app=express();

app.use(express.json());
app.use("/tipos", ruta);
app.use("/estados", ruta2);
app.use("/usuarios", ruta3);
app.use("/marcas", ruta4);
app.use("/inventario", ruta5);

mongo.connect("mongodb+srv://admin:nwqVYCL0WZNX59v4@cluster0.qihhlsg.mongodb.net/?retryWrites=true&w=majority").then(
    ()=>app.listen(5000,()=>console.log("Conexion exitosa en el puerto 5000"))
)
.catch((err)=> console.log(err))




