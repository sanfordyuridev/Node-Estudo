import express from "express";
import rotasExercicio from "./exercicioRoutes.js";
import Constantes from "../config/Utils.js";

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(Constantes.OK).send({ titulo: "Exercicios" })
    });

    app.use(
        express.json(),
        rotasExercicio
    )
}

export default routes;