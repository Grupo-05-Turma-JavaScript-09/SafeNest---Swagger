import { IsNotEmpty } from 'class-validator';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Categoria } from '../../categoria/entities/categoria.entity';
import { Usuario } from '../../usuario/entities/usuario.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'tb_apolices' })
export class Apolice {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number; //id PRIMARY KEY AUTO_INCREMENT

  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  @ApiProperty()
  numero_apolice: string; //titulo VARCHAR (100) NOT NULL

  @IsNotEmpty()
  @Column('decimal', { precision: 10, scale: 2, nullable: false })
  @ApiProperty()
  valor_premio: number;

  @IsNotEmpty()
  @Column('decimal', { precision: 12, scale: 2, nullable: false })
  @ApiProperty()
  cobertura: number;

  @UpdateDateColumn()
  @ApiProperty()
  data: Date; // data DATE(6) UPDATE_TIMESTAMP

  @ManyToOne(() => Usuario)
  @JoinColumn({ name: 'usuario_id' })
  @ApiProperty()
  usuario: Usuario;

  @ManyToOne(() => Categoria)
  @JoinColumn({ name: 'categoria_id' })
  @ApiProperty()
  categoria: Categoria;
}
