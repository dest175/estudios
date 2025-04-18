import { Router } from "express";
import {postMensajeController, getAllMensajeController, getMensajeByIdcontroller, putMensajeController} from "../controllers/mensajeControllers.js"
const routerMensaje = Router();




routerMensaje.post("/mensaje", postMensajeController);
routerMensaje.get("/mensaje", getAllMensajeController);
routerMensaje.get("/mensaje/:id", getMensajeByIdcontroller);
routerMensaje.put("/mensaje/:id", putMensajeController);


export default routerMensaje;