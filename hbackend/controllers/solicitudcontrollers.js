import {allSolicitudes, SolicitudId, postSolicitudService} from "../services/solicitudService.js";

const getAllsolicitudcontroller = async (req, res) => {
    const show = await allSolicitudes();
    
    

    res.json(show);
};



const getSolicitudId = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await SolicitudId(id);

        if (result.data) {
            return res.status(200).json(result);
        }

        return res.status(404).json(result);
    } catch (error) {
        console.error("Error en el controlador:", error);
        res.status(500).json({ mensaje: "Error interno del servidor." });
    }
};



const postSolicitudnew = async (req, res) => {
    const data = req.body
    const show = await postSolicitudService(data);

    
    
    res.json(show);
    console.log(postSolicitudnew)
};


 export  {getAllsolicitudcontroller, getSolicitudId,postSolicitudnew};