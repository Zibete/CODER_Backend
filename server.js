import express from 'express';
import Productos from './api/productos.js'

let productos = new Productos;

const PORT = 8080;

const app = express();
const routerProductos = express.Router();

app.use(express.static('public'));
app.use('/api', routerProductos);

routerProductos.use(express.json());
routerProductos.use(express.urlencoded({extended: true}));





const server = app.listen(PORT, () =>{
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en el servidor ${error}`))


//Devuelve todos los productos
routerProductos.get('/productos/listar', (req, res) => {
    res.json(productos.listarAll());
})

//Devuelve un producto según su ID
routerProductos.get('/productos/listar/:id', (req, res) => {
    let { id } = req.params
    res.json(productos.listar(id))
})


//Recibe y agrega un producto, y lo devuelve con el ID asignado
routerProductos.post('/productos/guardar', (req, res) => {
    let producto = req.body
    productos.guardar(producto)
    res.json(producto)
})



//Recibe y actualiza un producto según su ID
routerProductos.put('/productos/actualizar/:id', (req,res) => {
    let { id } = req.params
    let producto = req.body
    productos.actualizar(producto,id)
    res.json(producto)
})


//Elimina un producto según su ID
routerProductos.delete('/productos/borrar/:id', (req,res) => {
    let { id } = req.params
    let producto = productos.borrar(id)
    res.json(producto)
})