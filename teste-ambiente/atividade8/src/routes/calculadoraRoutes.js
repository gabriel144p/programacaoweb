const express = require('express');
const router = express.Router();

const calculadoraController = require('../controller/calculadoraController.js');

router.get('/',calculadoraController.indexView);
router.post('/calcular',calculadoraController.calcular);

module.exports = router;