import { DataTypes } from "sequelize";
import sequelize from "../db/db.js";
const Conversacion = sequelize.define('conversacion_prueba',{
    id_conversacion:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    id_contacto:{
        type : DataTypes.INTEGER
    },
    id_usuario:{
        type : DataTypes.INTEGER
    }
})

export default Conversacion;