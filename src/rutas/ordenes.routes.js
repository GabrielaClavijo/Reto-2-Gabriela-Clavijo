import { Router } from "express";
import { getOrdenes } from "../controlers/Ordenes.controller.js";

//Rutas que se llaman en ordenes.controller.js
const router=Router()
router.get('/admin/ordenes', getOrdenes)
export default router;
