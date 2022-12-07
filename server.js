const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 8080;

const server = app.listen(PORT, ()=>{
    console.log(`Servidor http escuchando en el Puerto ${server.address().port}`)
})

server.on('error', error => console.log(`Error en el servidor ${error}`))

app.get('/productos', (req, res) => {

    const contenido = fs.readFileSync('productos.txt','utf-8');
    res.send(contenido);

})

app.get('/productoRandom', (req, res) => {
    
    const contenido = fs.readFileSync('productos.txt','utf-8');

    const contenidoParseado = JSON.parse(contenido);

    const tamaño = contenidoParseado.length -1

    const random = Math.round(Math.random() * (tamaño - 0) + 0);
    console.log(tamaño)
    console.log(random)
    res.send(contenidoParseado[random]);

})
