import { Router } from "express";
import { connectConversationController, createUsuarioController } from "../controllers/usuarioCOntrollers.js";

const router = Router();


router.post("/createUsuario",createUsuarioController);
router.post("/connect", connectConversationController);

export default router;