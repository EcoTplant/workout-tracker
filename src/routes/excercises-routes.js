const express = require('express');
const router = express.Router();
const exercisesController = require('../../controllers/exercises.controller');

router.use((req, res, next) => {
  req.exercises = [
    { id: 1, nombre: "Press de Banca", descripcion: "Ejercicio compuesto para desarrollar la fuerza del pecho, hombros y tríceps.", categoria: "fuerza", grupo_muscular: "pecho" },
    { id: 2, nombre: "Sentadillas", descripcion: "Ejercicio fundamental para piernas y glúteos.", categoria: "fuerza", grupo_muscular: "piernas" },
    { id: 3, nombre: "Dominadas", descripcion: "Ejercicio para espalda y brazos usando el peso corporal.", categoria: "fuerza", grupo_muscular: "espalda" }
  ];
  next();
});

// Rutas GET
router.get('/', exercisesController.getAllExercises);
router.get('/:id', exercisesController.getExerciseById);

// Ruta POST
router.post('/', exercisesController.createExercise);

// Rutas PUT y PATCH
router.put('/:id', exercisesController.updateExercise);
router.patch('/:id', exercisesController.patchExercise);

// Ruta DELETE
router.delete('/:id', exercisesController.deleteExercise);

module.exports = router;
