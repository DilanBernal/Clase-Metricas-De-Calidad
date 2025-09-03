import { Request, Response, Router } from "express";
import UserAdapter from "../adapter/UserAdapter";
import UserApplication from "../../application/UserApplication";
import { UserController } from '../controller/UserController';
import authenticateToken from "../web/authMiddleware";

//Express
const router = Router();
//Inicializacion de capas
const userAdapter = new UserAdapter();
const userApp = new UserApplication(userAdapter);
const userController = new UserController(userApp);

//Login
router.post("/login", async (req: Request, res: Response) => {
  await userController.login(req, res);
});

//Definicion de rutas o endopoints
router.post("/user", async (request, response) => {
  try {
    await userController.registerUser(request, response);
  } catch (error: any) {
    console.error("Error en usuario: ", error);
    response
      .status(error.statusCode ?? 500)
      .json({ message: "Error en la creacion del usuario" });
  }
});

router.get("/users", authenticateToken, async (req, res) => {
  try {
    await userController.allUsers(req, res);
  } catch (error: any) {
    res.status(error.statusCode ?? 500)
      .json({
        message: "Error al traer los usuarios"
      });
  }
});

router.get("/users/id/:id", authenticateToken, async (req, res) => {
  try {
    await userController.searchUserById(req, res);
  } catch (error: any) {
    const errorMessage = error.message ?? "Error al traer el usuario";
    res.status(error.statusCode ?? 500)
      .json({
        message: errorMessage
      });
  }
});

router.get("/users/email/:email", authenticateToken, async (req, res) => {
  try {
    await userController.searchUserByEmail(req, res);
  } catch (error: any) {
    const errorMessage = error.message ?? "Error al traer el usuario";
    res.status(error.statusCode ?? 500)
      .json({
        message: errorMessage
      });
  }
});

router.put("/users/:id", authenticateToken, async (req, res) => {
  try {
    await userController.updataUser(req, res);
  } catch (error: any) {
    const errorMessage: string = error.message ?? "Error al actualizar el usuario";
    res.status(error.statusCode ?? 500)
      .json({
        message: errorMessage
      });
  }
})

router.delete("/users/:id", async (req, res) => {
  try {
    await userController.deleteUser(req, res);
  } catch (error: any) {
    const errorMessage = error.message ?? "Error al eliminar el usuario";
    res.status(error.statusCode ?? 500)
      .json({
        message: errorMessage
      });
    console.error(errorMessage, error);
    res.status(400)
      .json({
        message: errorMessage
      })
  }

})
export default router;