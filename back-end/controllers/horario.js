const Horario = require('../models/Horario')(/**/);
module.exports = function(){
    const controller = {};
    controller.novo = function(req,res){
        Horario.create(req.body).then(
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
        Horario.find().populate('usuarioConsumidor').populate('usuarioPrestador').populate('servicoprestado').exec().then(
            function(horarios){
                res.json(horarios).end();
            },
            function(erro){
                console.log(erro);
                res.status(500).end();
            }
        )
    }
    controller.obterUm = function(req,res){
        Horario.findById(req.params.id).exec().then(
            function(horarios){
                if(horarios){
                    res.json(horarios).end();
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
        Horario.findByIdAndUpdate(req.body._id, req.body).exec().then(
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
        Horario.findOneAndRemove(req.params.id).exec().then(
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