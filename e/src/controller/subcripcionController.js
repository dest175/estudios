import { createSubcripcionService } from "../service/subcripcionService.js";

export const createSubcripcionController = async (req,res)=>{
    try{
        const data = req.body;
        const respuesta = await createSubcripcionService(data)
        res.json({
            status:200,
            respuesta
        })
    }catch(error){
        res.json({
            status:404,
            error
        })
    }
    
};
