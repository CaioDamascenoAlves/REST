const express = require('express');// importando express from
const app = express();// instaciando variavel do express

const rotaProdutos= require('./routes/produtos');// importando arquivo produtos na pasta router

app.use('/produtos', rotaProdutos);// Usando rota produtos

module.exports = app;