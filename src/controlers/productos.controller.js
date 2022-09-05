import fs from "fs";
const jsonproducts = fs.readFileSync("./helpers/productos.json")
const products = JSON.parse(jsonproducts)


export const getProductos = (req, resp) => {
    try {
        
        resp.json(products)
    } catch (error)
     {
        resp.status(500)
        resp.send(error.message)
    }
}