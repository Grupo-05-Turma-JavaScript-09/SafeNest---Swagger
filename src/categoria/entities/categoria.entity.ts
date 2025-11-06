import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Apolice } from '../../apolice/entities/apolice.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'tb_categorias' })
export class Categoria {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({
    name: 'nome_categoria',
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  @ApiProperty()
  nome: string;

  @Column({ name: 'descricao', type: 'varchar', length: 1000, nullable: true })
  @ApiProperty()
  descricao?: string;

  @ApiProperty()
  @OneToMany(() => Apolice, (apolice) => apolice.categoria)
  apolices: Apolice[];
}
