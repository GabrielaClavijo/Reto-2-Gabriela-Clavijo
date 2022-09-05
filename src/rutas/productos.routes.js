import { Router } from "express";
import { getProducto, getProductos } from "../controlers/productos.controller.js";

const router=Router()
router.get('/admin/producto', getProductos) 
router.get('/admin/producto/:sku', getProducto) 

export default router;