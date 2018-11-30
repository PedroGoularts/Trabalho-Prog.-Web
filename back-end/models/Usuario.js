const mongoose = require('mongoose');

module.exports = function(){
     const schema = mongoose.Schema({
            nome:{
                 type: String,
                 required: true // O atributo não pode ficar em branco
            },
            email:{
                 type:String,
                 require: true
            },
            senha:{
                 type: String,
                 require: true
            },
            cpf:{
                 type: Number,
                 require: true
            },
            tipousuario:{
                type: mongoose.SchemaTypes.ObjectId,
                ref: 'Tipo_Usuario',
                require: true
            },
            inicioDisponibilidade:{
                type: Date,
                default:Date.now
            },
            fimDisponibilidade:{
                type: Date
            }

     });
     //1º Parametro nome do modelo
     //2º Parametro Esquema do modelo
     //3º Parametro Nome da coleção onde os objetos estão armazenados
     //4º Parametro nome do modelo
     return mongoose.model('Usuario',schema, 'usuarios');
}