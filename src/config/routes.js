const express = require('express');

module.exports = function(server){
    //definição da URL para todas as rotas
    const router = express.Router();
    server.use('/api', router);

    //rotas relacionadas a cada model
    const Contatos = require('../ws/contatos/contatoService');
    Contatos.register(router, '/contatos');

    const Produtos = require('../ws/produtos/produtoService');
    Produtos.register(router, '/produtos');

    const Cliente = require('../ws/clientes/clienteService');
    Produtos.register(router, '/clientes');
}