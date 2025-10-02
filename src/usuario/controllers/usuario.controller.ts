import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { Usuario } from '../entities/usuario.entity';
import { UsuarioService } from '../services/usuario.service';

@Controller('/usuarios') // Define o prefixo de rota: /usuarios
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED) // Retorna 201 Created
  async create(@Body() usuario: Partial<Usuario>): Promise<Usuario> {
    return this.usuarioService.create(usuario);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Usuario[]> {
    return this.usuarioService.findAll();
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  async findById(@Param('id', ParseIntPipe) id: number): Promise<Usuario> {
    // O serviço já lança NotFoundException se não encontrar
    return this.usuarioService.findOne(id);
  }

  @Put()
  @HttpCode(HttpStatus.OK)
  async update(@Body() usuario: Partial<Usuario>): Promise<Usuario> {
    return this.usuarioService.update(usuario);
  }
}
