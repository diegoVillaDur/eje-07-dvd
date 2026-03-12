import { Body, Controller, Post } from '@nestjs/common';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { CategoriasService } from './categorias.service';
import { Categoria } from './models/categoria';

@Controller('categorias')
export class CategoriasController {

    constructor(private categoriaService: CategoriasService) { }

    @Post()
    create(@Body() nuevaCategoria: CreateCategoriaDto): Categoria {
        return this.categoriaService.createCategoria(nuevaCategoria);
    }
}
