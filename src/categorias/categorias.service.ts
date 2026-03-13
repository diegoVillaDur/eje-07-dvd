import { Injectable } from '@nestjs/common';
import { Categoria } from './models/categoria';
import { CreateCategoriaDto } from './dto/create-categoria.dto';

@Injectable()
export class CategoriasService {
    private categorias: Categoria[] = [];
    private idContador: number = 1;

    createCategoria(nuevaCategoria: CreateCategoriaDto): Categoria {
        const categoria: Categoria = {
            id: this.idContador,
            nombre: nuevaCategoria.nombre,
            descripcion: nuevaCategoria.descripcion
        };

        this.categorias.push(categoria);
        this.idContador += 1;

        return categoria;
    }

    getAllCategorias(): Categoria[] {
        return this.categorias;
    }
}
