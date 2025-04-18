import { createUser, putUser,getUserByIdService, GetAllUser } from "../services/usersServices.js";

export const postUserController = async(req,res)=>{
    const data = req.body;
    try {
        const respuesta = await createUser(data);
        res.status(respuesta.status).json({ success: true, data: respuesta.data });
      } catch (error) {
        res.status(500).json({ success: false, error: "Error interno del servidor" });
      }
    };

export const getAllUsersController = async(req,res)=>{
    const respuesta = await GetAllUser()
    res.json({mensaje: "obtenido todos los usuarios mano", respuesta})
}


export const getUsersByIdcontroller = async(req,res)=>{
    console.log(req.params)
    const id = req.params.id;
    const respuesta = await getUserByIdService(id)
    res.json({mensaje: "esto ya esta hecho mano ", respuesta})


}

export const putUsers = async(req,res)=>{
    const id= req.params.id
    const data= req.body
    const respuesta = await putUser(id,data)
    res.json({mensaje: "actualizaaooo mano", respuesta})

}

