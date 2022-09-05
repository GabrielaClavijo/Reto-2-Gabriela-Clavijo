import express from 'express';
import { ordenes } from "../helpers/ordenes.js";
import { productos } from "../helpers/productos.js";

import productosRoutes from "./rutas/productos.routes.js"
const app=express()
const port=3000
app.listen(port, "127.0.0.1")
console.log(`activo en el puerto ${port}`);
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(productosRoutes)

