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
    const nuevoProducto = { sku, nombre, precio, url, marca, descripcion, iva, descuento, inventario, fecha_creacion }
    products.push(nuevoProducto)
    fs.writeFileSync('./helpers/productos.json', JSON.stringify(products))
    resp.send(200, { message: "registro completo" })
  } catch (error) {
    resp.status(500)
    resp.send(error.message)
  }
}

//Actualizar producto

export const putProducto =(req, resp) => {
  try {
    const skuupt = req.params.sku
    const producto=products.find(producto=>producto.sku ===skuupt)
    let{ nombre, precio, url, marca, descripcion, iva, descuento, inventario, fecha_creacion } = req.body
    if (!nombre) {
      nombre =producto.nombre
    }
    if (!precio) {
      precio = producto.precio
    }
    if (!url) {
      url = producto.url
    }
    if (!marca) {
      marca = producto.marca
    }
    if (!descripcion) {
      descripcion = producto.descripcion
    }
    if (!iva) {
      iva = producto.iva
    }
    if (!descuento) {
      descuento = producto.descuento
    }
    if (!inventario) {
      inventario = producto.inventario
    }
    if (!fecha_creacion) {  
      fecha_creacion = producto.fecha_creacion
    }
    
    const nuevoProducto = { sku: skuupt, nombre, precio, url, marca, descripcion, iva, descuento, inventario, fecha_creacion }
    
    let posicion = products.indexOf(producto)
    products.splice(posicion, 1, nuevoProducto)
    fs.writeFileSync('./helpers/productos.json', JSON.stringify(products))
    resp.send(200, { message: "registro completo" })
  } catch (error) {
    resp.status(500)
    resp.send(error.message)
    }
  }