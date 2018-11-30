const mongoose = require('mongoose');

module.exports = function(uri){
        mongoose.connect(uri,{useNewUrlParser: true});
        mongoose.connection.on('connected',function(){
                console.log('Mongoose! Conectado a'+ uri);
        });
        mongoose.connection.on('disconnected',function(){
                console.log('Mongoose! Desconectado de'+ uri);
        });
        mongoose.connection.on('error',function(erro){
                console.log(`Mongoose! ERRO: Não foi possivel se conectar ao MongoDB em ${uri}. MOTIVO: ${erro}`);
        });
        // Capturamos um sinal de encerramento (SIGINT), Ctrl+C
        process.on('SIGINT',function(){
                mongoose.connection.close(function(){
                        console.log('Mongoose! Desconectado pelo termino da aplicação');
                        // 0 indica que a finalização ocorreu sem erros
                        process.exit(0);
                });
        });
}