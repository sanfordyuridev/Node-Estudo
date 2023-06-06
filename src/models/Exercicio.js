import mongoose from "mongoose";
import Constantes from "../config/Utils.js";

const exercicioSchema = new mongoose.Schema(
    {
        id: {type: String},
        grupo: {type: String, required: true},
        nome: {type: String, required: true}
    }
);

const exercicios = mongoose.model(Constantes.NOME_SCHEMA, exercicioSchema);

export default exercicios;