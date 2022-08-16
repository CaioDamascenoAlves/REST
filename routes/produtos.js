const express = require('express');// delcaração do express
const router = express.Router();// delcaração do router


// delcaração do metodo GET || retorna todos os produtos
router.get('/', (req, res, next) => {
	res.status(200).send({
		message: 'Retorna todos os produtos',
	});
});

//INsere um produto
router.post('/', (req, res, next) => {
	res.status(201).send({
		message: 'Insere produto',
	});
});

//delcaração do GET || pega detalhe id_produto
router.get('/:id_produto', (req, res, next) => {
	const id = req.params.id_produto

	if(id === 'especial'){
		res.status(200).send({
			message: 'Usando o Get para um produto exclusivo',
			id : id,
		});
	}else{
		res.status(200).send({
            message: 'Você passou um ID',
        });
	}
});

//delcaração do PATCH || atualiza o produto
router.patch('/', (req, res, next) => {
	res.status(201).send({
		mensagem: 'Produto alterado',
	});
});

//delcaração do DELETE || deleção de um produto
router.delete('/', (req, res, next) => {
	res.status(201).send({
		message: 'Produto excluido',
	});
});

module.exports = router;


