import { CreateUsuario } from "../services/usuarioServices.js";
import { connectConversationUtils } from "../utils/connectConversation.js";

export const createUsuarioController = async (req,res)=>{
    try{
        const data =  req.body
        const response = await CreateUsuario(data);
        
        res.json({
            status:200,
            response

        })
    }catch(error){
        res.json({
            status:500,
            error
        })
    }
}


export const connectConversationController = async(req,res)=>{
    const data = req.body;
    const utils = await connectConversationUtils(data);
    res.json({
        status: 200,
        utils
    })
}