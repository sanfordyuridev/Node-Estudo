import mongoose from "mongoose";

const exercicioSchema = new mongoose.Schema(
    {
        id: {type: String},
        grupo: {type: String, required: true},
        nome: {type: String, required: true}
    }
);

const exercicios = mongoose.model('Exercicios', exercicioSchema);

export default exercicios;