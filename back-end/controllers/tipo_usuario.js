const Tipo_Usuario = require('../models/Tipo_Usuario')(/*Construtor*/);

module.exports = function(){
    const controller ={};
    controller.novo = function(req,res){
        Tipo_Usuario.create(req.body).then(
            function(){
                // Deu Certo
                res.status(201).end();
            },
            function(erro){
                //Erro 
                console.log(erro);
                res.status(500).end();
            }
        )
    }
    controller.listar = function(req,res){
        Tipo_Usuario.find().exec().then(
            function(tipo_usuarios){
                res.json(tipo_usuarios).end();
            },
            function(erro){
                console.log(erro);
                res.status(500).end();
            }
        );
    }
    controller.obterUm = function(req,res){
        Tipo_Usuario.findById(req.params.id).exec().then(
            function(tipo_usuarios){
                if(tipo_usuarios){
                    res.json(tipo_usuarios).end();
                }
                else{
                    res.status(404).end();
                }
            }

        );
    }
    controller.atualizar = function(req,res){
        Tipo_Usuario.findByIdAndUpdate(req.body._id,req.body).exec().then(
            function(){
                res.send(204).end();
            },
            function(erro){
                console.log(erro);
                res.send(500).end();
            }
        );
    }
    controller.excluir = function(req,res){
        Tipo_Usuario.findOneAndRemove(req.params.id).exec().then(
            function(){
                res.send(204).end();
            },
            function(erro){
                console.log(erro);
                res.send(500).end();
            }
        );
    }
    return controller;
}