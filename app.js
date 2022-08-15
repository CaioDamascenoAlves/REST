const express = require('express');// importando express from
const app = express();// instaciando variavel do express

app.use((req, res, next) =>{
	res.status(200).send({
		mensagem: 'Deu Certo GUIZINHO!'
	});
});//Consumindo metodo do express

module.exports = app;