import mongoose from "mongoose";

mongoose.connect("mongodb+srv://yuri:3OgMD8Ln0gV49ADe@cluster0.lglwx37.mongodb.net/node-estudo");

let db = mongoose.connection;

export default db;