import express from "express";

const app = express();

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

export default app;