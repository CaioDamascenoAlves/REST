const express = require('express');// importando express from
const app = express();// instaciando variavel do express

const rotaProdutos= require('./routes/produtos');// importando arquivo produtos na pasta router
const rotaPedidos= require('./routes/pedidos');

app.use('/produtos', rotaProdutos);// Usando rota produtos
app.use('/pedidos', rotaPedidos);

module.exports = app;