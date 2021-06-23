const mongoose = require('mongoose');
module.exports = mongoose.connect('mongodb+srv://avanade:passw0rd@cluster0.xabpi.mongodb.net/db_produtos?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});