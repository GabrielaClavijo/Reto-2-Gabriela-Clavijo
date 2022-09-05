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

//Insertar producto

export const postProducto =(req, resp) => {
  try {
    const { sku, nombre, precio, url, marca, descripcion, iva, descuento, inventario, fecha_creacion } = req.body
    if (!sku   || !nombre   || !precio   || !url   || !marca   || !descripcion   || !iva   || !descuento   || !fecha_creacion  ) {
      return resp.status(400).json({ message: "registro incompleto" })
    }
    console.log(sku);
    const nuevoProducto = { sku, nombre, precio, url, marca, descripcion, iva, descuento, inventario, fecha_creacion }
    console.log(products);
    products.push(nuevoProducto)
    fs.writeFileSync('./helpers/productos.json', JSON.stringify(products))
    resp.send(200, { message: "registro completo" })
  } catch (error) {
    resp.status(500)
    resp.send(error.message)
  }
}