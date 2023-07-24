import conn from "../db/database.js";
import { plainToClass } from "class-transformer";

const librosPrueba = (req, res) => {
    try {
        conn.query(`SELECT * FROM autor`, (err, data, fields) => {
            if(err) console.log(err);
            res.status(200).send(data);
        });
    } catch (error) {
        res.status(500).send(error);
    }
}

export const methodsLibros = {
    librosPrueba
}