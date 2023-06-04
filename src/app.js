import express from "express";
import db from "./config/dbConnect.js";
import exercicios from "./models/Exercicio.js";

db.on("error", console.log.bind(console, 'Erro de conexão'));
db.once("open", () => {
    console.log('Conexão com banco feita com sucesso');
});

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send('Lista de exercícios para ficar boladão');
});

app.get("/biceps", async (req, res) => {
    exercicios.find((err, exercicios) => {
        res.status(200).json(exercicios);
    });
});

app.post('/biceps', (req, res) => {
    exercicios.push(req.body);
    res.status(201).send('Exercício cadastrado com sucesso'); 
});

app.put('/biceps/:id', (req, res) => {
    const index = buscaExercicio('Biceps', req.params.id);
    exercicios[index] = req.body;
    res.status(200).json(exercicios);
});

app.get('/biceps/:id', (req, res) => {
    const index = buscaExercicio('Biceps', req.params.id);
    res.status(200).json(exercicios[index]);
});

app.delete('/biceps/:id', (req, res) => {
    let {id} = req.params;
    let index = buscaExercicio('Biceps', id);
    exercicios.splice(index, 1);
    res.send('Exercício ' + id + ' excluído com sucesso');
});

function buscaExercicio(grupo, id) {
    const ex = exercicios.filter((exercicio) => exercicio.grupo === grupo);
    return ex.findIndex((ex) => ex.id == id);
}

export default app;