const Usuario = require('../models/Usuario')(/*Construtor*/);

module.exports = function(){
    const controller ={};
    controller.novo = function(req,res){
        Usuario.create(req.body).then(
            function(){
                // Deu certo
                res.status(201).end();
            },
            function(erro){
                // Erro
                console.log(erro);
                res.status(500).end();
            
            }
        );
    }
    controller.listar = function(req,res){
        Usuario.find().populate('tipousuario').exec().then(
            function(usuarios){
                res.json(usuarios).end();
            },
            function(erro){
                console.log(erro);
                res.status(500).end();
            }
        );
    }
    controller.obterUm = function(req,res){
        Usuario.findById(req.params.id).exec().then(
            function(usuarios){
                if(usuarios){
                    // Se o artigo existe(não veio vazio)
                    //Retorna o artigo com status 200
                    res.json(usuarios).end();
                }
                else{
                    //HTTP 404:Não encontrado
                    res.status(404).end();
                }
            },
            function(erro){
                console.log(erro);
                res.status(500).end();
            }
        );
    }
    controller.atualizar = function(req,res){
        Usuario.findByIdAndUpdate(req.body._id,req.body).exec().then(
            function(){
                //HTTP 204: OK, sem dados
                res.send(204).end();
            },
            function(erro){
                console.log(erro);
                res.send(500).end();
            }
        );
    }
    controller.excluir = function(req,res){
        Usuario.findOneAndRemove(req.params.id).exec().then(
            function(){
                res.send(204).end();
            },
            function(erro){
                console.log(erro);
                res.send(500).end();
            }
        )

    }
    return controller;
}