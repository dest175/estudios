import { Router } from "express";
import { createSubcripcionController } from "../controller/subcripcionController.js";

const router = Router();


router.post("/createSubscripcion", createSubcripcionController);
router.get("/getSubcription",)

export default router;