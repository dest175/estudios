import Itinerario from "../itirenario.js";

export const allItinerario = async (req,res) =>{
    const data = await Itinerario.findAll();
    
    if(!data){
        return{
            data : null,
            mensaje : "nose pudo mano "
        }
    
    }
   return  {mensaje:"solicitudes cargadas correctamente  ", data};
}

export const postItinerarioService = async (data) => {
    try{
       
        const newItinerario = await Itinerario.create(data);

    if(!newItinerario){
        return{
            data : null,
            mensaje : "nose pudo mano "
        }
    
    }
   return  {mensaje:"solicitudes creada correctamente  ", newItinerario};    
    }catch(error) {
        console.error("Error al obtener la solicitud:", error);
        throw new Error("Error al buscar la solicitud.");
    }

      
};

export const ItinerarioId = async (id) => {
    try {
        const data = await Itinerario.findByPk(id);

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

export const itinerarioput = async (id,data)=>{
    
    const findItinerario= await Itinerario.findByPk(id);
    const itinerarioUpdate = findItinerario;

    for (const partespeks in data){
        itinerarioUpdate[partespeks] = data[partespeks]
    }
    const itinerarioToUpdate = itinerarioUpdate.save()
    return(`el itinerario mediante el id num : ${id}, se actualizo el dato `,data)
}