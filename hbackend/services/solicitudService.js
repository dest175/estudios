import Solicitudes from "../Solicitudes.js";


export const allSolicitudes = async (req,res) =>{
    const data = await Solicitudes.findAll();
    
    if(!data){
        return{
            data : null,
            mensaje : "nose pudo mano "
        }
    
    }
   return  {mensaje:"solicitudes cargadas correctamente  ", data};
}

export const SolicitudId = async (id) => {
    try {
        const data = await Solicitudes.findByPk(id);

        if (!data) {
            return {
                data: null,
                mensaje: "No se encontró la solicitud con el ID proporcionado.",
            };
        }

        return {
            mensaje: "Solicitud cargada correctamente.",
            data,
        };
    } catch (error) {
        console.error("Error al obtener la solicitud:", error);
        throw new Error("Error al buscar la solicitud.");
    }
};

export const postSolicitudService = async (data) => {
    try{
       
        const newSolicitud = await Solicitudes.create(data);

    if(!newSolicitud){
        return{
            data : null,
            mensaje : "nose pudo mano "
        }
    
    }
   return  {mensaje:"solicitudes creada correctamente  ", newSolicitud};    
    }catch(error) {
        console.error("Error al obtener la solicitud:", error);
        throw new Error("Error al buscar la solicitud.");
    }

      
};
