const RealizaServico = require('../models/RealizaServico')(/**/);;
module.exports = function(){
    const controller ={};
    controller.novo = function(req,res){
        RealizaServico.create(req.body).then(
            function(){
                res.status(201).end();
            },
            function(erro){
                console.log(erro);
                 res.status(500).end();
             }
        );
    }
    controller.listar = function(req,res){
        RealizaServico.find().populate('usuario').populate('servico').exec().then(
            function(realizaservicos){
                res.json(realizaservicos).end();
            },
            function(erro){
                console.log(erro);
                res.status(500).end();
            }
        )
    }
    controller.obterUm = function(req,res){
        RealizaServico.findById(req.params.id).exec().then(
            function(realizaservicos){
                if(realizaservicos){
                    res.json(realizaservicos).end();
                }
                else{
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
        RealizaServico.findByIdAndUpdate(req.body._id, req.body).exec().then(
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
        RealizaServico.findOneAndRemove(req.params.id).exec().then(
            function(){
                res.send(204).end();
            },
            function(erro){
                console.log(erro);
                res.send(500).end()
            }
        )
    }
    return controller;
}