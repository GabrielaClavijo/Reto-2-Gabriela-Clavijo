import { Router } from "express";
import { getProductos } from "../controlers/productos.controller.js";

const router=Router()
router.get('/admin/producto', getProductos) 

export default router;