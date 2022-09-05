import express from 'express';
import { ordenes } from "../helpers/ordenes.js";
import { productos } from "../helpers/productos.js";
import fs from "fs";

const app=express()
const port=3000
const jsonproducts=fs.readFileSync("./helpers/ordenes.json")
const products=JSON.parse(jsonproducts)
app.listen(port, "127.0.0.1")
console.log(`activo en el puerto ${port}`);

//Aplicación web
//Listar productos
app.get('/admin/producto', (req, resp) => {
    try {
        console.log(resp.json(productos));
        resp.json(productos)
    } catch (error)
     {
        resp.status(500)
        resp.send(error.message)
    }
}) 
