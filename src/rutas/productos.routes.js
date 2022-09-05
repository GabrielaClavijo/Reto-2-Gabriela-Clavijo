import { Router } from "express";
import { getProducto, getProductos, postProducto, putProducto } from "../controlers/productos.controller.js";

const router=Router()
router.get('/admin/producto', getProductos) 
router.get('/admin/producto/:sku', getProducto) 
router.post('/admin/producto', postProducto)
router.put('/admin/producto/:sku', putProducto)

export default router;