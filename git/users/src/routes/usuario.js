import { Router } from "express";
import { postUserController,getAllUsersController,getUsersByIdcontroller,putUsers, loginUserController  } from "../controllers/usuarioContoroller.js";
import { veryficationToken } from "../middleware/validateUser.js";
const router = Router();
 

router.post("/usuario", postUserController);
router.get("/usuario", veryficationToken, getAllUsersController);
router.get("/usuario/:id",getUsersByIdcontroller);
router.put("/usuario/:id",putUsers);

//login
router.post("/login",loginUserController )

export default router;
