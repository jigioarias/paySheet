var express = require('express');
const jwt = require('jsonwebtoken');

var router = express.Router();
var product = require("./product.route");
var nomina = require("./nomina.route");
var autenticacion = require("./autenticacion");

router.use('/products',product);
router.use('/nomina',nomina);
router.use('/',autenticacion);





const config = {
	llave : "miclaveultrasecreta123*"
};



router.use((req, res, next) => {
    const token = req.headers['access-token'];
  
    if (token) {
      jwt.verify(token,  config.llave, (err, decoded) => {      
        if (err) {
          return res.json({ mensaje: 'Token inválida' });    
        } else {
          req.decoded = decoded;    
          next();
        }
      });
    } else {
      res.send({ 
          mensaje: 'Token no proveída.' 
      });
    }
  });






module.exports = router;


