const express = require('express');// delcaração do express
const router = express.Router();// delcaração do router

router.get('/', (req, res, next) => {
	res.status(200).send({
		message: 'Usando metodo GEt dentro da rota produtos',
	});
});// delcaração do metodo GET

router.post('/', (req, res, next) => {
	res.status(201).send({
		message: 'Usando o Post dentro da rota de produtos',
	});
});

module.exports = router;


