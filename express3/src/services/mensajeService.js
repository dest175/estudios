import Mensaje from "../models/mensaje.js";


export const createMensaje = async (data)=>{
   
    const newmensaje= await Mensaje.create(data)
    
    if(newmensaje){
        return{
            status: 201,
            newmensaje
        }
    }else {
        return {
            status: 400,
            data: null
        }
    }
};

export const GetAllMensaje = async (filterParams)=>{
    const allmensaje= await Mensaje.findAll({where: filterParams})
     if(allmensaje){
        return{
            status: 201,
            allmensaje
        }
    }else {
        return {
            status: 400,
            data: null
        }
    }
};

export const getMensajeByIdService = async (id)=>{
    const mensajeFound = await Mensaje.findByPk(id);
    if(mensajeFound){
        return{
            status: 201,
            mensajeFound,
        }
    }else{
        return {
            status: 400,
            data: null
        }
    }
};

export const putmensajeService = async(id,data)=>{
    const mensajeFound = await Mensaje.findByPk(id)
    const updatemensaje = mensajeFound

    if(mensajeFound){
        for(const params in data){
            updatemensaje[params] = data[params]
        }
        const updatemensajes = mensajeFound.save(updatemensaje)
        return ("conseguio y actualizado",data)

    }else{
        return {
            status: 400,
            data: null
        }
    }
};