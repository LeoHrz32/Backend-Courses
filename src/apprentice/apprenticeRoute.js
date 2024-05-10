const express = require('express');
const router = express.Router();
const apprenticeController = require('../apprentice/apprenticeController');


// Ruta para crear un nuevo aprendiz
router.post('/Aprendices', apprenticeController.createApprentice);

// Ruta para obtener todos los aprendices
router.get('/Aprendices', apprenticeController.getAllApprentices);

// Ruta para obtener un aprendiz por su ID
router.get('/Aprendices/:id', apprenticeController.getApprenticeById);


// Ruta para actualizar un aprendiz existente
router.put('/Aprendices/:id', apprenticeController.updateApprentice);

// Ruta para eliminar un aprendiz
router.delete('/Aprendices/:id', apprenticeController.deleteApprentice);

module.exports = router;
