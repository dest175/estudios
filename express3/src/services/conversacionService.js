import Conversacion from "../models/conversacion.js";
import Mensaje from "../models/mensaje.js"
import { createMensaje } from "./mensajeService.js";


export const createConversacion = async (data)=>{
    console.log(data)
    const newConversacion= await Conversacion.create(data)
    if(newConversacion){
        return{
            status: 201,
            newConversacion
        }
    }else {
        return {
            status: 400,
            data: null
        }
    }
};

export const GetAllConversacion = async (filterParams)=>{
    const conversacion= await Conversacion.findAll({where:filterParams})
    if(conversacion){
        return{
            status: 201,
            conversacion
        }
    }else {
        return {
            status: 400,
            data: null
        }
    }
};

export const getConversacionByIdService = async (id)=>{
    const ConversacionFound = await Conversacion.findByPk(id);
    if(ConversacionFound){
        return{
            status: 201,
            ConversacionFound,
        }
    }else{
        return {
            status: 400,
            data: null
        }
    }
};

export const putConversacionService = async(id,data)=>{
    const ConversacionFound = await Conversacion.findByPk(id)
    const updateConversacion = ConversacionFound

    if(ConversacionFound){
        for(const params in data){
            updateConversacion[params]= data[params]
        }
        const updateConversacions = ConversacionFound.save(updateConversacion)
        return ("conseguio y actualizado",data)

    }else{
        return {
            status: 400,
            data: null
        }
    }
};


 export const postConversacionByIdService = async(id,data)=>{
    const conversacionFound = await Conversacion.findByPk(id)
    const checkId = conversacionFound.id_conversacion
    data.id_conversacion = checkId 
    const createMensajeConversacion = await createMensaje(data)
    if (createMensajeConversacion){
        return("creado el mensaje dentro de la conversacion", createMensajeConversacion)
    }else{
        return{
            status: 400,
            data:null
        }
    }
}


