const port = 3200;
const express = require('express');
const server = express(); //novo servidor
const allowCors = require('./cors');

//para toda nova requisição, interceptar chegadas como urlenconded
server.use(express.urlencoded({ extended: true }));

//considerar o formato json no corpo da requisição
server.use(express.json());
server.use(allowCors);

server.listen(port, function(){
    console.log('Servidor no ar');
    
});

module.exports = server;