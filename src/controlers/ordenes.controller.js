import fs from "fs";
const jsonorders = fs.readFileSync("./helpers/ordenes.json");
const orders = JSON.parse(jsonorders);
const jsonproducts = fs.readFileSync("./helpers/productos.json");
const products = JSON.parse(jsonproducts);

//Consultar ordenes de compra
export const getOrdenes = (req, resp) => {
  try {
    const ordenesp = orders.map((orden) => {
      const list = [];
      orden.productos.forEach((element) => {
        const producto = products.find((e) => e.sku === element);
        if (producto) {
          const { sku, nombre, marca, url } = producto;
          list.push({ sku, nombre, marca, url });
        } else {
          list.push(element);
        }
      });
      orden.productos = list;
      return orden;
    });
    console.log(ordenesp);
    resp.json(ordenesp);
  } catch (error) {
    resp.status(500);
    resp.send(error.message);
  }
};

//Resumen de compra app movil
export const postResumenApp = (req, resp) => {
  try {
    const { productos } = req.body;
    const listaProductos = productos.split(",");
    const list = [];
    let precio_final = 0;
    if (listaProductos.length > 0) {
      listaProductos.forEach((element) => {
        const producto = products.find((e) => e.sku === element);
        if (producto) {
          const { sku, nombre, iva, descuento, precio } = producto;
          precio_final = precio - precio * descuento + precio * iva;
          list.push({ sku, nombre, precio_final });
        } else {
          list.push(element);
        }
      });
    }
    resp.json({ productos: list, precio_final });
  } catch (error) {
    resp.status(500);
    resp.send(error.message);
  }
};
