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

    static getExerciciosPorId = (req, res) => {
        let id = req.params.id;
        exercicios.findById(id, (err, exercicios) => {
            if (err) {
              res.status(400).send('Erro ao consultar exercício com ID = ' + id);
            } else {
              res.status(200).send(exercicios);
            }
          });
    }

    static cadastrarExercicio = (req, res) => {
        let exercicio = new exercicios(req.body);
        exercicio.save((err) => {
            if(err) {
                res.status(500).send({message: `Erro ao cadastrar exercício: ${err.message}`})
            } else {
                res.status(201).json(exercicio);
            }
        });
    }

    static removerExercicio = (req, res) => {
        let id = req.params.id;
        exercicios.findByIdAndDelete(id, (err) => {
            if(err) {
                res.status(500).send({message: `Erro ao excluir exercício: ${err.message}`});
            } else {
                res.status(200).send('Exercício excluído com sucesso');
            }
        });
    }

    static atualizarExercicio = (req, res) => {
        let id = req.params.id;
        let novoExercicio = new exercicios(req.body);
        exercicios.findByIdAndUpdate(id, {$set: novoExercicio}, (err) => {
            if(err) {
                res.status(500).send({message: `Erro ao atualizar exercício: ${err.message}`});
            } else {
                res.status(200).send('Exercício atualizado com sucesso');
            }
        });
    }

}

export default ExercicioController;