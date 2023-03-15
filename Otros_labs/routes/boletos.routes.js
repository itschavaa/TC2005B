const express = require('express');
const router = express.Router();
const boletosController = require('../controllers/boletos.controller');

router.get('/boletos', boletosController.getBoletos);

router.post('/boletos', boletosController.postBoletos);

module.exports = router;