const mongoose = require('mongoose');

module.exports = function(){
    const schema = mongoose.Schema({
        descricao:{
            type: String,
            required: true
        },
        permissoes:{
            type: String,
            require: true
        }
    });

    return mongoose.model('Tipo_Usuario',schema,'tipo_usuarios');

}
