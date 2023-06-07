import express from "express";
import ExercicioController from "../controllers/exercicioController.js";

const router = express.Router();

router.get('/Exercicios', ExercicioController.getAllExercicios);
router.get('/Exercicios/:grupo', ExercicioController.getExerciciosPorGrupo);

router.post('/Exercicios', ExercicioController.cadastrarExercicio);

export default router;