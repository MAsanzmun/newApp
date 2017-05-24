'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 4801;


mongoose.connect('mongodb://localhost:27017/app_tarjeta', (err, res)=>{
  if(err){
    throw err;
  }else{
    console.log("La base de datos esta funcionando correctamente.");
    app.listen(port, function(){
      console.log("API RESTFULL de la nueva APP esta escuchando ......")
    });
  }
});
