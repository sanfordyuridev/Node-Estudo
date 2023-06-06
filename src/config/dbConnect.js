import mongoose from "mongoose";
import Constantes from "./Utils.js";

mongoose.connect(Constantes.URL_DB);

let db = mongoose.connection;

export default db;