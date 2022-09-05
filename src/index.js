import express from 'express';
import productosRoutes from "./rutas/productos.routes.js"
import ordenesRoutes from "./rutas/ordenes.routes.js"
const app = express()
const port=3000
app.listen(port, "127.0.0.1")
console.log(`activo en el puerto ${port}`);
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(productosRoutes)
app.use(ordenesRoutes)
