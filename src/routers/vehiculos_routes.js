import { Router } from "express";
import { verificarTokenJWT } from "../middlewares/authmiddleware.js";
import { actualizarVehiculos, crearVehiculos, eliminarVehiculos, listarVehiculos, obtenerVehiculosPorID } from "../controllers/vehiculos_controller.js";

const router = Router()

router.post("/Vehiculos", verificarTokenJWT, crearVehiculos)
router.get("/listarVe", verificarTokenJWT, listarVehiculos)
router.get("/obtenerVe/:id", verificarTokenJWT, obtenerVehiculosPorID)
router.put("/actualizarVe/:id", verificarTokenJWT, actualizarVehiculos)
router.delete("/eliminarVe/:id", verificarTokenJWT, eliminarVehiculos)

export default router