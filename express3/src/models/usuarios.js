import { DataTypes } from "sequelize";
import sequelize from "../db/db.js";

const Usuario = sequelize.define('usuario_prueba',{
    id_usuario:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre:{
        type: DataTypes.STRING,
        
    },
    identidad: {
        type: DataTypes.STRING,
    },
    numDtelefono:{
        type: DataTypes.STRING
    },
    rol:{
        type: DataTypes.ENUM("admin", "normal"),
        defaultValue : "normal"
    }

})

export  default Usuario
