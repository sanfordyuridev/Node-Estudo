import exercicios from "../models/Exercicio.js";
import Constantes from "../config/Utils.js";

class ExercicioController {

    static getAllExercicios = (req, res) => {
        exercicios.find((err, exercicios) => {
            res.status(Constantes.OK).json(exercicios);
        });
    }

    static getExerciciosPorGrupo = (req, res) => {
        exercicios.find((err, exercicios) => {
            let exercicioGrupo = exercicios.filter((e) => e.grupo == req.params.grupo)
            res.status(Constantes.OK).json(exercicioGrupo);
        });
    }

}

export default ExercicioController;