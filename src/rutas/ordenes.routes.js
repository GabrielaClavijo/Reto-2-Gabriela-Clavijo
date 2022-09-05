import { Router } from "express";
import { getOrdenes } from "../controlers/Ordenes.controller.js";
const router=Router()
router.get('/admin/ordenes', getOrdenes)
export default router;
