import { Router } from "express";
import { verificarTokenJWT } from "../middlewares/authmiddleware.js";
import { actualizarReservas, crearReservas, eliminarReservas, listarReservas, obtenerReservasPorID } from "../controllers/reservas_controller.js";

const router = Router()

router.post("/Reservas", verificarTokenJWT, crearReservas)
router.get("/listarRe", verificarTokenJWT, listarReservas)
router.get("/obtenerRe/:id", verificarTokenJWT, obtenerReservasPorID)
router.put("/actualizarRe/:id", verificarTokenJWT, actualizarReservas)
router.delete("/eliminarRe/:id", verificarTokenJWT, eliminarReservas)

export default router


