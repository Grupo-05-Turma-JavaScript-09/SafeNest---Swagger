import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from '../entities/usuario.entity';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
  ) {}

  // (Criar)usuarios
  async create(usuarioData: Partial<Usuario>): Promise<Usuario> {
    try {
      // O hash da senha acontece automaticamente no @BeforeInsert da Entidade
      const novoUsuario = this.usuarioRepository.create(usuarioData);
      return await this.usuarioRepository.save(novoUsuario);
    } catch (error) {
      // Trata erros de banco, como duplicidade (se 'usuario' for unique)
      if (
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        error.code === 'ER_DUP_ENTRY' ||
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
        error.detail?.includes('unique constraint')
      ) {
        throw new InternalServerErrorException(
          'Nome de usuário ou e-mail já está em uso.',
        );
      }
      throw error;
    }
  }

  // mostra todos
  async findAll(): Promise<Usuario[]> {
    return await this.usuarioRepository.find();
  }

  // mostar po id /usuarios/:id
  async findOne(id: number): Promise<Usuario> {
    const usuario = await this.usuarioRepository.findOne({ where: { id } });

    if (!usuario) {
      throw new NotFoundException(`Usuário com ID ${id} não foi encontrado.`);
    }

    return usuario;
  }

  // atualiza
  async update(usuarioData: Partial<Usuario>): Promise<Usuario> {
    // 1. Verifica se o usuário com o ID existe
    const usuarioToUpdate = await this.usuarioRepository.findOne({
      where: { id: usuarioData.id },
    });

    if (!usuarioToUpdate) {
      throw new NotFoundException(
        `Usuário com ID ${usuarioData.id} não foi encontrado para atualização.`,
      );
    }

    // 2. Mescla os dados existentes com os novos
    const usuarioMerged = this.usuarioRepository.merge(
      usuarioToUpdate,
      usuarioData,
    );

    // 3. Salva a entidade. O TypeORM atualiza a linha e, se o campo 'senha'
    // foi alterado, o @BeforeUpdate/hashPassword será executado novamente.
    return await this.usuarioRepository.save(usuarioMerged);
  }
}
