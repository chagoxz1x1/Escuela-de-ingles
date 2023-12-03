const express = require('express');
const router = express.Router();

const operacionesCtrl = require('../controllers/operaciones.controller');

router.get('/suma', operacionesCtrl.suma);


module.exports = router;