import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from '../../usuario/entities/usuario.entity';
import { Apolice } from '../entities/apolice.entity';

@Injectable()
export class ApoliceService {
  constructor(
    @InjectRepository(Apolice)
    private readonly apoliceRepository: Repository<Apolice>,

    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
  ) {}

  async findAll(): Promise<Apolice[]> {
    return this.apoliceRepository.find();
  }

  async findById(id: number): Promise<Apolice> {
    const apolice = await this.apoliceRepository.findOne({
      where: { id: id },
    });

    if (!apolice) {
      throw new NotFoundException('Apólice não encontrada. Tente novamente.');
    }

    return apolice;
  }

  async create(apolice: Apolice): Promise<Apolice> {
    return this.apoliceRepository.save(apolice);
  }

  async update(apolice: Apolice): Promise<Apolice> {
    const existente = await this.findById(apolice.id);

    const atualizada = { ...existente, ...apolice };

    return this.apoliceRepository.save(atualizada);
  }

  async delete(id: number): Promise<void> {
    const apolice = await this.findById(id);
    await this.apoliceRepository.remove(apolice);
  }

  async aplicarDesconto(idApolice: number): Promise<Apolice> {
    const apolice = await this.findById(idApolice);

    if (!apolice.usuario) {
      throw new NotFoundException('Usuário não vinculado a esta apólice.');
    }

    if (apolice.usuario.idade < 30) {
      apolice.valor_premio = Number(apolice.valor_premio) * 0.9;
      return this.apoliceRepository.save(apolice);
    }

    return apolice;
  }
}
