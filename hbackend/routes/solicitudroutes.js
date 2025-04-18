import { Router } from "express";
import {getAllsolicitudcontroller, getSolicitudId, postSolicitudnew} from "../controllers/solicitudcontrollers.js";

const router = Router();

router.get("/solicitudNew", getAllsolicitudcontroller);

router.get("/solicitudNew/:id", getSolicitudId);

router.post("/solicitudPost",postSolicitudnew);

export default router;
