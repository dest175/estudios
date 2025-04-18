import conversacion from "../models/conversacion.js";
import { createConversacion, GetAllConversacion, getConversacionByIdService, putConversacionService,postConversacionByIdService } from "../services/conversacionService.js";


export const postConversacionController = async(req,res)=>{
    const data = req.body
    const respuesta = await createConversacion(data)
    res.json({mensaje: " listo postiao mano ", respuesta});

}
export const getAllConversacionController = async(req,res)=>{
    const params = req.query
    const respuesta = await GetAllConversacion(params)
    console.log(respuesta)
    res.json({mensaje: "obtenido todos los conversaciones mano", respuesta})
}


export const getConversacionByIdcontroller = async(req,res)=>{
    console.log(req.params)
    const id = req.params.id;
    const respuesta = await getConversacionByIdService(id)
    res.json({mensaje: "esto ya esta hecho mano ", respuesta})


}

export const putConversacionController = async(req,res)=>{
    const id= req.params.id
    const data= req.body
    const respuesta = await putConversacionService(id,data)
    res.json({mensaje: "actualizaaooo mano", respuesta})

}

export const postConversacionbyid = async(req,res)=>{
    const id= req.params.id
    const data= req.body
    const respuesta = await postConversacionByIdService(id,data)
    res.json({mensaje: "conversacion creada para conversar xD", respuesta})

}

