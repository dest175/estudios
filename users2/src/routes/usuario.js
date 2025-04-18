import { Router } from "express";
import { loginUser } from "../services/authService.js";
import { postUserController,getAllUsersController,getUsersByIdcontroller,putUsers } from "../controllers/usuarioContoroller.js";
const router = Router();
 

router.post("/usuario",postUserController);
router.get("/usuario",getAllUsersController);
router.get("/usuario/:id",getUsersByIdcontroller);
router.put("/usuario/:id",putUsers);
//login and get 
router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const respuesta = await loginUser(email, password);
    res.status(respuesta.status).json(respuesta);
  });
  
router.get("/profile", verifyToken, async (req, res) => {
    const user = await getUserByIdService(req.userId);
    res.json(user);
  });

export default router;
