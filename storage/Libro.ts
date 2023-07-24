import { Expose } from 'class-transformer';
import { IsDefined, MaxLength, MinLength, IsNumber, IsString } from 'class-validator';
export class Libro {

    @Expose({ name: 'id_libro' })
    @IsDefined({ message: () => { throw { status:422, message: "El parametro id libro es obligatorio"}}})
    @IsNumber({}, { message: () => { throw { status: 406, message: "El parametro id libro debe ser numerico"}}})
    idLibro: number
    @Expose({ name: 'id_autor' })
    @IsDefined({ message: () => { throw { status:422, message: "El parametro id autor es obligatorio"}}})
    @IsNumber({}, { message: () => { throw { status: 406, message: "El parametro id autor debe ser numerico"}}})
    idAutor: number
    @Expose({ name: 'id_categoria' })
    @IsDefined({ message: () => { throw { status:422, message: "El parametro id categoria es obligatorio"}}})
    @IsNumber({}, { message: () => { throw { status: 406, message: "El parametro id categoria debe ser numerico"}}})
    idCategoria: number
    @Expose({ name: 'id_editorial' })
    @IsDefined({ message: () => { throw { status:422, message: "El parametro id editorial es obligatorio"}}})
    @IsNumber({}, { message: () => { throw { status: 406, message: "El parametro id editorial debe ser numerico"}}})
    idEditorial: number
    @Expose({ name: 'titulo' })
    @IsString({ message: () => { throw { status: 406, message: "El parametro debe ser una cadena de texto"}}})
    titulo: string
    @Expose({ name: 'anio_publicacion' })
    @IsNumber({}, { message: () => { throw { status: 406, message: "El parametro debe ser numerico"}}})
    anioPublicacion: number
    @Expose({ name: 'isbn' })
    @IsDefined({ message: () => { throw { status:422, message: "El parametro isbn es obligatorio"}}})
    @IsString({ message: () => { throw { status: 406, message: "El parametro debe ser una cadena de texto"}}})
    isbn: string
    @Expose({ name: 'num_paginas' })
    @IsNumber({}, { message: () => { throw { status: 406, message: "El parametro num_paginas debe ser numerico"}}})
    numPaginas: number
    @Expose({ name: 'id_estado' })
    @IsDefined({ message: () => { throw { status:422, message: "El parametro id estado es obligatorio"}}})
    @IsNumber({}, { message: () => { throw { status: 406, message: "El parametro id estado debe ser numerico"}}})
    idEstado: number

    constructor(id_libro: number, id_autor: number, id_categoria: number, id_editorial: number, titulo:  string, anio_publicacion: number, isbn: string, num_paginas: number, id_estado: number) {
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