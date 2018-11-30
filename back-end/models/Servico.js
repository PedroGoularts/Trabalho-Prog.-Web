const mongoose = require('mongoose');

module.exports = function(){
    const schema = mongoose.Schema({
        descricao:{
            type: String,
            required: true
        },
        tempoDemandado:{
            type: Number,
            required: true
        },
        preco:{
            type: Number,
            required: true
        }
    });
    return mongoose.model('Servico',schema, 'servicos');
}