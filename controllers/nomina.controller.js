const Nomina = require('../models/nomina.model');
const mongoose = require('mongoose');
let empleados = [];

function onInsert(err, docs) {
    if (err) {
        // TODO: handle error
    } else {
        //console.log(docs.ops);
        empleados = docs.ops;
        
        
    }
}

exports.nomina_create =  function (req, res) {
   
   
    var empleados = mongoose.model('Nomina');
    var listaEmpleados= [];

    req.body.employees.forEach(element => {
        listaEmpleados.push(new Nomina(element));
      });

      
    empleados.collection.insertMany(listaEmpleados, function (err,data) {
    if (err) {
    res.json({empleados:listaEmpleados,mensaje:"eror:"+err});
    return err;
    }
    else {
      
        empleados = data.ops;
        res.json({empleados:empleados,mensaje:"OK"});

  
    }
    });

 
  
};





