var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Expose } from 'class-transformer';
import { IsDefined, IsNumber, IsString } from 'class-validator';
export class Libro {
    constructor(id_libro, id_autor, id_categoria, id_editorial, titulo, anio_publicacion, isbn, num_paginas, id_estado) {
        this.idLibro = id_libro;
        this.idAutor = id_autor;
        this.idCategoria = id_categoria;
        this.idEditorial = id_editorial;
        this.titulo = titulo;
        this.anioPublicacion = anio_publicacion;
        this.isbn = isbn;
        this.numPaginas = num_paginas;
        this.idEstado = id_estado;
    }
}
__decorate([
    Expose({ name: 'id_libro' }),
    IsDefined({ message: () => { throw { status: 422, message: "El parametro id libro es obligatorio" }; } }),
    IsNumber({}, { message: () => { throw { status: 406, message: "El parametro id libro debe ser numerico" }; } }),
    __metadata("design:type", Number)
], Libro.prototype, "idLibro", void 0);
__decorate([
    Expose({ name: 'id_autor' }),
    IsDefined({ message: () => { throw { status: 422, message: "El parametro id autor es obligatorio" }; } }),
    IsNumber({}, { message: () => { throw { status: 406, message: "El parametro id autor debe ser numerico" }; } }),
    __metadata("design:type", Number)
], Libro.prototype, "idAutor", void 0);
__decorate([
    Expose({ name: 'id_categoria' }),
    IsDefined({ message: () => { throw { status: 422, message: "El parametro id categoria es obligatorio" }; } }),
    IsNumber({}, { message: () => { throw { status: 406, message: "El parametro id categoria debe ser numerico" }; } }),
    __metadata("design:type", Number)
], Libro.prototype, "idCategoria", void 0);
__decorate([
    Expose({ name: 'id_editorial' }),
    IsDefined({ message: () => { throw { status: 422, message: "El parametro id editorial es obligatorio" }; } }),
    IsNumber({}, { message: () => { throw { status: 406, message: "El parametro id editorial debe ser numerico" }; } }),
    __metadata("design:type", Number)
], Libro.prototype, "idEditorial", void 0);
__decorate([
    Expose({ name: 'titulo' }),
    IsString({ message: () => { throw { status: 406, message: "El parametro debe ser una cadena de texto" }; } }),
    __metadata("design:type", String)
], Libro.prototype, "titulo", void 0);
__decorate([
    Expose({ name: 'anio_publicacion' }),
    IsNumber({}, { message: () => { throw { status: 406, message: "El parametro debe ser numerico" }; } }),
    __metadata("design:type", Number)
], Libro.prototype, "anioPublicacion", void 0);
__decorate([
    Expose({ name: 'isbn' }),
    IsDefined({ message: () => { throw { status: 422, message: "El parametro isbn es obligatorio" }; } }),
    IsString({ message: () => { throw { status: 406, message: "El parametro debe ser una cadena de texto" }; } }),
    __metadata("design:type", String)
], Libro.prototype, "isbn", void 0);
__decorate([
    Expose({ name: 'num_paginas' }),
    IsNumber({}, { message: () => { throw { status: 406, message: "El parametro num_paginas debe ser numerico" }; } }),
    __metadata("design:type", Number)
], Libro.prototype, "numPaginas", void 0);
__decorate([
    Expose({ name: 'id_estado' }),
    IsDefined({ message: () => { throw { status: 422, message: "El parametro id estado es obligatorio" }; } }),
    IsNumber({}, { message: () => { throw { status: 406, message: "El parametro id estado debe ser numerico" }; } }),
    __metadata("design:type", Number)
], Libro.prototype, "idEstado", void 0);
