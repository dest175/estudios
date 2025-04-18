import { createContacto } from "../services/contactoServices.js";

export const createContactoController = async (req,res)=>{
    try{
        const data =  req.body
        const response = await createContacto(data);
        
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