import { DataTypes } from "sequelize";
import sequelize from "./db.js";
const Task = sequelize.define('Task', {
    id: { type: DataTypes.STRING, primaryKey: true },
    name: { type: DataTypes.STRING },
    description: {type: DataTypes.STRING},
    date: {type: DataTypes.DATEONLY}

})
export default Task;