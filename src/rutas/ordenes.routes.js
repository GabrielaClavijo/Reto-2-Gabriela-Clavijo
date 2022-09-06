import { Router } from "express";
import {
  getOrdenes,
  postResumenApp,
} from "../controlers/Ordenes.controller.js";

//Rutas que se llaman en ordenes.controller.js
const router = Router();
router.get("/admin/ordenes", getOrdenes);
router.post("/resumen", postResumenApp);
export default router;
