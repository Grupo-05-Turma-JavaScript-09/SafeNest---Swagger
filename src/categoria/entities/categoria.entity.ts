import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
  nome: string;

  @Column({ name: 'descricao', type: 'varchar', length: 1000, nullable: true })
  descricao?: string;
}
