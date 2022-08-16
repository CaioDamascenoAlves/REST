const express = require('express');// delcaração do express
const router = express.Router();// delcaração do router


// delcaração do metodo GET || retorna todos os pedidos
router.get('/', (req, res, next) => {
	res.status(200).send({
		message: 'Retorna todos os pedidos',
	});
});

//INsere um pedido
router.post('/', (req, res, next) => {
	res.status(201).send({
		message: 'O pedido foi criado',
	});
});

//delcaração do GET || pega detalhe id_pedido
router.get('/:id_pedido', (req, res, next) => {
	const id = req.params.id_pedido
	res.status(200).send({
		message: 'Detalhes do pedido',
		id : id,
	});
});

//delcaração do DELETE || deleção de um pedido
router.delete('/', (req, res, next) => {
	res.status(201).send({
		message: 'Pedido excluído',
	});
});

module.exports = router;


