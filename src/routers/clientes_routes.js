import { Router } from "express";
import { verificarTokenJWT } from "../middlewares/authmiddleware.js";
import { actualizarClientes, crearClientes, eliminarClientes, listarClientes, obtenerClientesPorID } from "../controllers/clientes_controller.js";

const router = Router()

router.post("/Clientes", verificarTokenJWT, crearClientes)
router.get("/listarCl", verificarTokenJWT, listarClientes)
router.get("/obtenerCl/:id", verificarTokenJWT, obtenerClientesPorID)
router.put("/actualizarCl/:id", verificarTokenJWT, actualizarClientes)
router.delete("/eliminarCl/:id", verificarTokenJWT, eliminarClientes)

export default router