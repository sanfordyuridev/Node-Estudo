import express from "express";
import ExercicioController from "../controllers/exercicioController.js";

const router = express.Router();

router.get('/Exercicios', ExercicioController.getAllExercicios);
router.get('/Exercicios/grupo/:grupo', ExercicioController.getExerciciosPorGrupo);
router.get('/Exercicios/:id', ExercicioController.getExerciciosPorId);

router.post('/Exercicios', ExercicioController.cadastrarExercicio);
router.delete('/Exercicios/:id', ExercicioController.removerExercicio);
router.put('/Exercicios/:id', ExercicioController.atualizarExercicio);

export default router;