
const express = require('express');
const jwt = require('jsonwebtoken');

const rutasProtegidas = express.Router(); 
const config = {
	llave : "miclaveultrasecreta123*"
};




 rutasProtegidas.get('/test',  (req, res) => {

  console.log('sopa de caracol');

  
});

 rutasProtegidas.post('/authentication', (req, res) => {

  

  if(req.body.usuario === "admin" && req.body.contrasena === "admin") {
  const payload = {
    check:  true
  };
  const token = jwt.sign(payload, config.llave, {
    expiresIn: 1440
  });
  res.json({
    mensaje: 'Autenticación correcta',
    token: token
  });
  } else {
      res.json({ mensaje: "Usuario o contraseña incorrectos"})
  }
})

 module.exports = rutasProtegidas;
 