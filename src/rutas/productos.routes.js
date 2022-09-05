import { Router } from "express";
import { deleteProducto, getProducto, getProductos, postProducto, putProducto } from "../controlers/productos.controller.js";

const router=Router()
router.get('/admin/producto', getProductos) 
router.get('/admin/producto/:sku', getProducto) 
router.post('/admin/producto', postProducto)
router.put('/admin/producto/:sku', putProducto)
router.delete('/admin/producto/:sku', deleteProducto)
export default router;