import bcrypt from "bcrypt"
import t_usuario from "../models/usuarios.js";

export const createUser = async (data) => {
    try {
      const hashedPassword = await bcrypt.hash(data.password, 10); // Hash de contraseña
      const newUser = await t_usuario.create({ ...data, password: hashedPassword });
      return { status: 201, data: newUser };
    } catch (error) {
      return { status: 400, error: "Error al crear usuario" };
    }
  }
export const GetAllUser = async ()=>{
    const User= await t_usuario.findAll()
    if(User){
        return{
            status: 201,
            User
        }
    }else {
        return {
            status: 400,
            data: null
        }
    }
}

export const getUserByIdService = async (id)=>{
    const userFound = await t_usuario.findByPk(id);
    if(userFound){
        return{
            status: 201,
            userFound,
        }
    }else{
        return {
            status: 400,
            data: null
        }
    }
}

export const putUser = async(id,data)=>{
    const userFound = await t_usuario.findByPk(id)
    const updateUser = userFound

    if(userFound){
        for(const params in data){
            updateUser[params]= data[params]
        }
        const updateUsers = userFound.save(updateUser)
        return ("conseguio y actualizado",data)

    }else{
        return {
            status: 400,
            data: null
        }
    }
}
