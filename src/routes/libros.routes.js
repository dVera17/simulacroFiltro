import { Router } from "express";
import { methodsLibros } from "../controllers/libros.controllers.js";
import storageLibros from "../middleware/mwLibros.js";

const router = Router();

router.post('/', storageLibros, methodsLibros.librosPrueba);

export default router;  