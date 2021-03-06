const restful = require('node-restful');
const mongoose = restful.mongoose;

//definindo o schema (modelo)
const contatoSchema = new mongoose.Schema({
    nome: {type: String, required: true},
    email: {type: String, required: true},
    celular: {type: String}
});

module.exports = restful.model('contatos', contatoSchema);