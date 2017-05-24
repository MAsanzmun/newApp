'use strict'

var express = require('express');
var TarjetaController = require('../controllers/tarjeta');
var api = express.Router();

var multipart = require('connect-multiparty');
var multipartMiddleware = multipart({ uploadDir: './uploads' });


api.get('/tarjetas', TarjetaController.getTarjetas);
api.get('/tarjeta/:id', TarjetaController.getTarjeta);
api.post('/tarjeta', TarjetaController.guardarTarjeta);
api.put('/tarjeta/:id', TarjetaController.updateTarjeta);
api.delete('/tarjeta/:id', TarjetaController.deleteTarjeta);


module.exports = api;
