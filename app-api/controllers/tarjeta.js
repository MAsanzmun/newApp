'use strict'

var Tarjeta = require('../models/tarjeta');

function getTarjeta(req,res){
  var tarjetaId = req.params.id;

  Tarjeta.findById(tarjetaId, (err, tarjeta)=>{
    if(err){
      res.status(500).send({message: "Error al obtener la tarjeta."});
    }else{
      if(!tarjeta){
        res.status(404).send({message: "No existe la tarjeta con id: "+tarjetaId+"."});
      }else{
        res.status(200).send({tarjeta});
      }
    }
  });

}

function getTarjetas(req,res){
  Tarjeta.find({}, (err, tarjeta)=>{
    if(err){
      res.status(500).send({message: 'Error al obtener la tarjeta.'});
    }else{
      if(!tarjeta){
        res.status(404).send({message: 'No existe la tarjeta.'});
      }else{
        res.status(200).send({tarjeta:tarjeta});
      }
    }
  });

}

function guardarTarjeta(req,res){
  var params = req.body;
  var tarjeta = new Tarjeta();
  tarjeta.word = params.word;
  tarjeta.example = params.example;
  tarjeta.translate = params.translate;

  tarjeta.save((err, tarjetaStored)=>{
  if(err){
    res.status(500).send({message:'Error en el servidor (metodo save)'});
  }else{
    if(!tarjetaStored){
      res.status(404).send({message:'No se encontro la tarjeta.'})
    } else{
      res.status(200).send({tarjeta:tarjetaStored});
    }
  }
});
}
function pruebas(req,res){
	res.status(200).send({message: 'Pruebas de controlador de imagenes'});
}

function deleteTarjeta(req,res){
  var tarjetaId = req.params.id;
  Tarjeta.findByIdAndRemove(tarjetaId, (err, tarjetaRemoved)=>{
    if(err){
      res.status(500).send({message:'Error en el servidor.'});
    }else{
      if(!tarjetaRemoved){
        res.status(404).send({message:'No se ha encontrado la tarjeta con id: '+tarjetaId});
      }else{
        res.status(200).send({tarjeta:tarjetaRemoved});
      }
    }
  });
}

function updateTarjeta(req,res){
  var tarjetaId = req.params.id;

  var tarjeta = new Tarjeta();
  var update = req.body;

  tarjeta.findByIdAndUpdate(tarjetaId, update, (err, tarjetaUpdated)=>{
    if(err){
      res.status(500).send({message:'Error en el servidor'});
    }else{
      if(!tarjetaUpdated){
        res.status(404).send({message:'No se ha encontrado la tarjeta con id: '+tarjetaId});
      }else{
        res.status(200).send({tarjeta:tarjetaUpdated});
      }
    }
  });
}



module.exports = {
	getTarjeta,
  getTarjetas,
  guardarTarjeta,
  deleteTarjeta,
  updateTarjeta
};
