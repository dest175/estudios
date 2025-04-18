import Usuario from "../models/usuarios.js";

export const CreateUsuario = async(data)=>{
    try{
        const usuario = await Usuario.create(data)
        return{
            mensaje:"usuario creado ",
            usuario
        }
    }catch(error){
        return{
            mensaje:"error al crear usuario",
            error
        }
    }
}