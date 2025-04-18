import t_usuario from "../models/usuarios.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export const createUser = async (data)=>{
    console.log(data)
    const contraseñaEncriptada = await bcrypt.hash(data.password, 10);
    console.log(contraseñaEncriptada)
    data.password = contraseñaEncriptada; 
    console.log(data)
    const newUser= await t_usuario.create(data)
    if(newUser){
        return{
            status: 201,
            newUser
        }
    }else {
        return {
            status: 400,
            data: null
        }
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

const JWT_SECRET = "1234"
export const LoginUser = async (email, password)=>{
    try{
        const user = await t_usuario.findOne({where: {email}});
        console.log(user);
        const checkPassword = await bcrypt.compare(password, user.password);
        console.log(checkPassword);
        if(!checkPassword){
            throw error;
        }else {
            const token = jwt.sign({id: user.id_usuario },JWT_SECRET, {expiresIn: "24h"} );
            return{
            status:200,
            mensaje:"usted ha ingresao a salvo",
            token: token,
            };
        } 
    }catch(error){
        console.log(error);
        return{
            status: 500,
            mensaje:"error de adentro eeeeejeeee",
            error,
        };
    }
}

