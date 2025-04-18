import { DataTypes } from "sequelize";
import sequelize from "./db.js";
const Itinerario = sequelize.define('Itinerario', {
    id_Itinerario: { type: DataTypes.STRING, primaryKey: true },
    name: { type: DataTypes.STRING },
    description: {type: DataTypes.STRING},
    id : {type: DataTypes.STRING},
    dificultad: {type: DataTypes.INTEGER },
    categoria: {type: DataTypes.STRING}

})
export default Itinerario;