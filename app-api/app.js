'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();


// Carga de rutas
var tarjeta_routes = require('./routes/tarjeta');


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Configurar las cabeceras
app.use((req,res,next)=>{
  res.header("Access-Control-Allow-Origin","*");
	res.header("Access-Control-Allow-Headers", "X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
	res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
	res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
	next();
});

// Rutas base
app.use('/api', tarjeta_routes);

module.exports = app;
