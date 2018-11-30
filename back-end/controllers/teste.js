// Inicializando um objeto imutavel chamado controller com conteúdo vazio
module.exports = function(){
    const controller ={};
    /*
        Toda função de controller tem pelo menos dois parametros:
        1º Parametro: req = requisição recebida
        2º Parametro: res = resposta para o cliente
    */

    controller.ola_mundo = function(req,res){
        //Enviando uma mensagem de resposta
        res.send('Ola,mundo').end();

    };
    return controller;
};
