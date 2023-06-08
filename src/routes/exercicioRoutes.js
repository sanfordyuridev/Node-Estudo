import express from "express";
import ExercicioController from "../controllers/exercicioController.js";

const router = express.Router();

router.get('/Exercicios', ExercicioController.obterTodosExercicios);
router.get('/Exercicios/:id', ExercicioController.obterExerciciosPorId);
router.get('/Exercicios/grupo/:grupo', ExercicioController.obterExerciciosPorGrupo);

router.post('/Exercicios', ExercicioController.cadastrarExercicio);

router.delete('/Exercicios/:id', ExercicioController.removerExercicio);

router.put('/Exercicios/:id', ExercicioController.atualizarExercicio);

export default router;