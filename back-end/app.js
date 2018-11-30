var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

const db = require('./config/database');

db('mongodb://localhost:27017/trab-progweb');

//Ligando a Aplicação a rota
const teste = require('./routes/teste');
//Associando a rota /ola a rota
app.use('/ola', teste);

const usuario = require('./routes/usuario');
app.use('/usuario', usuario);

const tipo_usuario = require('./routes/tipo_usuario');
app.use('/tipo_usuario', tipo_usuario);

const horario = require('./routes/horario');
app.use('/horario', horario);

const servico = require('./routes/servico');
app.use('/servico', servico);

const realizaservico = require('./routes/realizaservico');
app.use('/realizaservico', realizaservico);

module.exports = app;
