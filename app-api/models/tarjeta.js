'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TarjetaSchema = Schema({
		word: String,
    example: String,
    translate: String,
		picture: String
	});
module.exports = mongoose.model('Tarjeta', TarjetaSchema);
