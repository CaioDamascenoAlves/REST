const express = require('express');// importando express from
const app = express();// instanciando variavel do express
const morgan = require('morgan');// instanciando variavel do morgan

const rotaProdutos= require('./routes/produtos');// importando arquivo produtos na pasta router
const rotaPedidos= require('./routes/pedidos');

app.use(morgan('dev'));

app.use('/produtos', rotaProdutos);// Usando rota produtos
app.use('/pedidos', rotaPedidos);

app.use((req,res, next) => {
	const erro = new Error('Error Não encontrado');
	erro.status = 404
	next(erro);
});

app.use((error, req, res, next) => {
	res.status(error.status || 500);
	return res.send({
		erro: {
			mensagem: error.message
		}
	});
});

module.exports = app;