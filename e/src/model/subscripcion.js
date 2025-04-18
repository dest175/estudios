import { DataTypes } from "sequelize";
import sequelize from "../db/db.js";

const Subscripcion = sequelize.define('Subscripcion',{
    id_Subscripcion:{
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true,
    },
    tipo: {
        type:DataTypes.ENUM("premium","megaPremiun","normal","admirador"),
        defaultValue:"admirador"
    }
});

export default Subscripcion;