const mongoose = require('mongoose');

module.exports = function(){
    const schema = mongoose.Schema({
        usuarioConsumidor:{
            type: mongoose.SchemaTypes.ObjectId,
            ref:'Usuario',
            required: true
        },
        usuarioPrestador:{
            type: mongoose.SchemaTypes.ObjectId,
            ref:'Usuario',
            required: true
        },
        servicoprestado:{
            type: mongoose.SchemaTypes.ObjectId,
            ref:'Servico',
            required: true
        },
        dataHoraAgendada:{
            type: Date,
            default: Date.now
        }
    });
    return mongoose.model('Horario',schema, 'horarios');
}