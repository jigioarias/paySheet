
const jwt = require('jsonwebtoken');


const config = {
	llave : "miclaveultrasecreta123*"
};

const middlewares = {

    validarToken : function (req, res, next)  {
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
      }

    
};
module.exports = middlewares;