const express = require('express');// importando express from
const app = express();// instaciando variavel do express

app.use((req, res, next) =>{
	res.status(200).send({
		mensagem: 'Ok, Deu certo !'
	});
});//Consumindo metodo do express

module.exports = app;