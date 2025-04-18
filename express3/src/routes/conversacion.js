import { Router } from "express";
import { getAllConversacionController, getConversacionByIdcontroller, postConversacionController, putConversacionController,postConversacionbyid } from "../controllers/conversacionController.js";
const router = Router();

router.post("/conversacion", postConversacionController);
router.get("/conversacion", getAllConversacionController);
router.get("/conversacion/:id", getConversacionByIdcontroller);
router.put("/conversacion/:id",putConversacionController );
router.post("/conversacion_prueba/:id", postConversacionbyid);

export default router;