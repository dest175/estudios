import { createUser, putUser,getUserByIdService, GetAllUser, LoginUser} from "../services/usersServices.js";

export const postUserController = async(req,res)=>{
    const data = req.body;
    const respuesta = await createUser(data)
    res.json({mensaje: " listo postiao mano ", respuesta});

}

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

export const loginUserController = async (req, res) => {
    try {
      const { email, password } = req.body; // email, password
  
      const respuesta = await LoginUser(email, password);
  
      res.json({ mensaje: "Usuario Registrado", respuesta });
    } catch (error) {
      res.json({ mensaje: "Error", respuesta });
    }
  };