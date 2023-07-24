import express from 'express';
import 'reflect-metadata';
import { plainToClass } from 'class-transformer';
import { Libro } from '../../dist/Libro.js';
import { validate } from 'class-validator';

const storageLibros = express();
storageLibros.use(async(req,res,next)=>{
    try {
        let data = plainToClass(Libro, req.body, { excludeExtraneousValues: true });
        req.body = data;
        await validate(data);
        next();
    } catch (err) {
        res.status(err.status).send(err.message);
    }
})

export default storageLibros;