import { Router } from "express";
import { createContactoController } from "../controllers/contactoControllers.js";
const router = Router();


router.post("/createContacto",createContactoController);

export default router;