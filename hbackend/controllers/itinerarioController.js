import { allItinerario, postItinerarioService, ItinerarioId, itinerarioput } from "../services/itinerarioService.js";

const getAllItinerariocontroller = async (req, res) => {
    const show = await allItinerario();

    
    

    res.json(show);
};

 const getItinerarioId = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await ItinerarioId(id);

        if (result.data) {
            return res.status(200).json(result);
        }

        return res.status(404).json(result);
    } catch (error) {
        console.error("Error en el controlador:", error);
        res.status(500).json({ mensaje: "Error interno del servidor." });
    }
};





const postItinerarionew = async (req, res) => {
    const data = req.body
    const show = await postItinerarioService(data);

    
    
    res.json(show);
    console.log(postItinerarionew())
};


const updateItinerarioId = async (req, res)=> {
    const id = req.params.id;
    const data = req.body;
    const findItinerariPut = await itinerarioput(id,data);
    res.json(findItinerariPut);
}

export { getAllItinerariocontroller, getItinerarioId, postItinerarionew, updateItinerarioId}

