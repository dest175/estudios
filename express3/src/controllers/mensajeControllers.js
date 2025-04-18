
import { createMensaje, GetAllMensaje, getMensajeByIdService,putmensajeService } from "../services/mensajeService.js";

export const postMensajeController = async(req,res)=>{
    console.log(req.body,"controller")
    const data = req.body;
    const respuesta = await createMensaje(data)
    res.json({mensaje: " listo postiao mano ", respuesta});

}
export const getAllMensajeController = async(req,res)=>{
    const params = req.query 
    const respuesta = await GetAllMensaje(params)
    console.log(respuesta)
    res.json({mensaje: "obtenido todos los usuarios mano", respuesta})
}


export const getMensajeByIdcontroller = async(req,res)=>{
    console.log(req.params)
    const id = req.params.id;
    const respuesta = await getMensajeByIdService(id)
    res.json({mensaje: "esto ya esta hecho mano ", respuesta})


}

export const putMensajeController = async(req,res)=>{
    const id= req.params.id
    const data= req.body
    const respuesta = await putmensajeService(id,data)
    res.json({mensaje: "actualizaaooo mano", respuesta})

}