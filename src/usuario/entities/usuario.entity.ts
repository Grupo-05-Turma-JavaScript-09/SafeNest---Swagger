// Importação do bcrypt
import * as bcrypt from 'bcryptjs';
import { Exclude } from 'class-transformer';
import { IsInt, IsNotEmpty } from 'class-validator';
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Apolice } from '../../apolice/entities/apolice.entity';

//tabela id
@Entity({ name: 'tb_usuarios' })
export class Usuario {
  @PrimaryGeneratedColumn('increment')
  id: number;

  //nome da pessoa
  @IsNotEmpty({ message: 'O nome não pode ser vazio.' })
  @Column({ length: 155, nullable: false })
  nome: string;

  //usuario q vai entrar
  @IsNotEmpty({ message: 'O usuário não pode ser vazio.' })
  @Column({ length: 255, nullable: false, unique: true })
  usuario: string;

  // Apenas o hash será salvo no banco
  @Exclude()
  @IsNotEmpty({ message: 'A senha não pode ser vazia.' })
  @Column({ length: 255, nullable: false })
  senha: string;

  @IsNotEmpty({ message: 'A idade não pode ser vazia.' })
  @IsInt({ message: 'A idade deve ser um número inteiro.' })
  @Column({ nullable: false })
  idade: number;

  // FUNÇÕES DE SEGURANÇA COM BCRYPT

  // 1. Hashear a Senha antes de Salvar (Criação e Atualização)
  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword() {
    const salt = await bcrypt.genSalt(10);

    // Hashea a senha usando o 'salt'
    this.senha = await bcrypt.hash(this.senha, salt);
  }
  // 2. Método para Verificar a Senha (Uso no Login)
  // Compara a senha digitada pelo usuário com o hash salvo no BD
  async checkPassword(senhaDigitada: string): Promise<boolean> {
    return bcrypt.compare(senhaDigitada, this.senha);
  }

  @OneToMany(() => Apolice, (apolice) => apolice.usuario)
  apolices: Apolice[];
}
