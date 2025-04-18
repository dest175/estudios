import Contacto from "../models/contactos.js";

export const createContacto = async(data)=>{
    try{
        const contacto = await Contacto(data)
        return {
            mensaje:" contacto creado",
            contacto
        }
    }catch(error){
        return {
            mensaje:"error al crear",error
        }
    }
}