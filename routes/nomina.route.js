const express = require('express');
const router = express.Router();
const rutasProtegidas = require('./autenticacion');
const validarTOken = require('./authMiddleware.js').validarToken;

// Require the controllers WHICH WE DID NOT CREATE YET!!
const nomina_controller = require('../controllers/nomina.controller');

router.post('/', validarTOken,nomina_controller.nomina_create);


module.exports = router;