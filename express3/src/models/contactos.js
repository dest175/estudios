import { DataTypes } from "sequelize";
import sequelize from "../db/db.js";
const Contacto = sequelize.define('contacto_prueba',{
    id_contacto:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre:{
        type: DataTypes.STRING,

    },
    numDtelefono:{
        type:DataTypes.STRING
    },
    identidad:{
        type: DataTypes.STRING
    }
    

 
})

export  default Contacto
