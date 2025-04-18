import express from "express";
import sequelize from "./src/db/db.js";
import userRoutes from "./src/routes/usuario.js";
import "./src/models/usuarios.js"
const app = express();
const PORT = 3000;

app.use(express.json())

app.use(userRoutes)
app.listen(PORT, ()=>{
    sequelize.authenticate;
    sequelize.sync()
    console.log("si sirvio en el puerto",PORT)
});