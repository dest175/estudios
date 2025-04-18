import { DataTypes } from "sequelize";
import sequelize from "../db/db.js";
const Mensaje = sequelize.define('mensaje_prueba',{
    id_mensaje:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    mensaje:{
        type: DataTypes.STRING,

    },
    id_conversacion: {
        type: DataTypes.INTEGER,
    },

})

export default Mensaje;