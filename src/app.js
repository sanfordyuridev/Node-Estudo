import express from "express";

const app = express();

app.use(express.json());

const exercicios = [
    {id: 1, "nome": "rosca direta", "grupo": "Biceps"},
    {id: 2, "nome": "rosca inversa", "grupo": "Biceps"},
    {id: 3, "nome": "puxada alta", "grupo": "Dorsal"},
    {id: 4, "nome": "remada curvada", "grupo": "Dorsal"},
    {id: 5, "nome": "crussifixo", "grupo": "Peitoral"},
];

app.get('/', (req, res) => {
    res.status(200).send('Lista de exercícios para ficar boladão');
});

app.get('/biceps', (req, res) => {
    const exerciciosBiceps = exercicios.filter((exercicio) => exercicio.grupo === "Biceps");
    res.status(200).json(exerciciosBiceps);
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

function buscaExercicio(grupo, id) {
    const ex = exercicios.filter((exercicio) => exercicio.grupo === grupo);
    return ex.findIndex((ex) => ex.id == id);
}

export default app;