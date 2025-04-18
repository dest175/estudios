import { Router } from "express";
import {getAllItinerariocontroller, postItinerarionew,getItinerarioId, updateItinerarioId} from "../controllers/itinerarioController.js";
const routerItinerario = Router();


routerItinerario.get("/itinerarioGetAll",getAllItinerariocontroller);
routerItinerario.get("/itinerarioIDD/:id", getItinerarioId);
routerItinerario.post("/itinerarioPostman",postItinerarionew);
routerItinerario.put("/itinerarioputa/:id",updateItinerarioId);


export default routerItinerario;