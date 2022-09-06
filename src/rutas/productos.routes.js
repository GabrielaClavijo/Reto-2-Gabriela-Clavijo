import { Router } from "express";
import {
  deleteProducto,
  getConsultarApp,
  getProducto,
  getProductos,
  getProductosApp,
  postProducto,
  putProducto,
} from "../controlers/productos.controller.js";

//Rutas que se llaman en cada método de productos.controller.js
const router = Router();
router.get("/admin/producto", getProductos);
router.get("/admin/producto/:sku", getProducto);
router.post("/admin/producto", postProducto);
router.put("/admin/producto/:sku", putProducto);
router.delete("/admin/producto/:sku", deleteProducto);
router.get("/producto", getProductosApp);
router.get("/producto/:sku", getConsultarApp);

export default router;
