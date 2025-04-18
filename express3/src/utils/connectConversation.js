import { createConversacion, GetAllConversacion } from "../services/conversacionService.js"
import { createMensaje, getMensajeByIdService } from "../services/mensajeService.js";

export const connectConversationUtils = async (data)=>{
    try {
        const {id_usuario,id_contacto,mensaje} =  data
        const filterparams = {id_contacto,id_usuario};       
        const conversacionEncontrada = await GetAllConversacion(filterparams);

        const idConversacion = conversacionEncontrada.conversacion[0].dataValues.id_conversacion
        console.log(idConversacion);
        const id_conversacion = idConversacion
        const idConversacionMensaje = {id_conversacion,mensaje}
        const Mensaje = await createMensaje(idConversacionMensaje);
        console.log(Mensaje)        
        
    } catch (error) {
        console.error(error)
    }

}