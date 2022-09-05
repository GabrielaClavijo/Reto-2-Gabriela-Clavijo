import fs from "fs";
const jsonproducts = fs.readFileSync("./helpers/productos.json")
const products = JSON.parse(jsonproducts)

//Listar productos
export const getProductos = (req, resp) => {
    try {
        
        resp.json(products)
    } catch (error)
     {
        resp.status(500)
        resp.send(error.message)
    }
}

//Consultar producto

export const getProducto = (req, resp) => {
  try {
    const sku = req.params.sku
    const producto=products.find(producto=>producto.sku ===sku)
    resp.json(producto)
    } catch (error)
     {
      resp.status(500)
      resp.send(error.message)
    }

}