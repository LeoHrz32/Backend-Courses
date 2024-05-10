const express = require('express');
const router = express.Router();
const courseController = require('../course/courseController');


// Ruta para crear un nuevo aprendiz
router.post('/Cursos', courseController.createCourse);

// Ruta para obtener todos los aprendices
router.get('/Cursos', courseController.getAllCourses);

// Ruta para obtener un aprendiz por su ID
router.get('/Cursos/:id',courseController.getCourseById);


// Ruta para actualizar un aprendiz existente
router.put('/Cursos/:id', courseController.updateCourse);

// Ruta para eliminar un aprendiz
router.delete('/Cursos/:id', courseController.deleteCourse);

module.exports = router;
