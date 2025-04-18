import { DataTypes } from "sequelize";
import sequelize from "./db.js";
const Solicitudes = sequelize.define('Solicitudes', {
    id_Solicitudes: { type: DataTypes.INTEGER, primaryKey: true },
    prioridad: { type: DataTypes.ENUM('Alta','Media','Baja') },
    description : {type: DataTypes.STRING},
    solicitud : {type: DataTypes.STRING},
    tlf : {type: DataTypes.BIGINT },
    identificacion : {type: DataTypes.BIGINT },
    direccion : {type: DataTypes.STRING}

})
export default Solicitudes;