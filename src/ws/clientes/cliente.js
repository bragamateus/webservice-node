const restful = require('node-restful');
const mongoose = restful.mongoose;

//definindo o schema (modelo)
const clienteSchema = new mongoose.Schema({
    nome: {type: String, required: true},
    dataNascimento: {type: Date},
    cpf: {type: String, required: true},
    email: {type: String, required: true},
    produtos: {type: [Number]}
});

module.exports = restful.model('clientes', clienteSchema);