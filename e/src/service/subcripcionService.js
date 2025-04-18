import Subscripcion from "../model/subscripcion.js";

export const createSubcripcionService = async (data)=>{
    try{
        const newSubcripcion = await Subscripcion.create(data);

        return{
            mensaje: "subscripcion creada xD",
            newSubcripcion
        }
    }
    catch(error){
        return{
            mensaje:"subcripcion failed",
            error}
        }
}