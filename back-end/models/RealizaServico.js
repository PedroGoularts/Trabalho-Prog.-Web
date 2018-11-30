const mongoose = require('mongoose');

module.exports = function(){
    const schema = mongoose.Schema({
         usuario:{
             type: mongoose.SchemaTypes.ObjectId,
             ref: 'Usuario',
             require : true
         },
         servico:{
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'Servico',
            require : true
         },
         desc_servicoPrestado:{
             type: String,
             require: true
         }
    });
    return mongoose.model('RealizaServico',schema, 'realizaservicos');
}