import { Router } from "express";
import { getProducto, getProductos, postProducto } from "../controlers/productos.controller.js";

const router=Router()
router.get('/admin/producto', getProductos) 
router.get('/admin/producto/:sku', getProducto) 
router.post('/admin/producto', postProducto)

export default router;