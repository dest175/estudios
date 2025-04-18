import { DataTypes } from "sequelize";
import sequelize from "../db/db.js";
import bcript from "bcrypt"
const t_usuario = sequelize.define(
    't_usuario',
    {
        id_usuario: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:{isEmail:true}
        },
        nombre: {
            type: DataTypes.STRING
        },
        direccion: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING,
            allowNull:false,
//            validate:{len:(8, 100)}
        }
    }
)

export default t_usuario;