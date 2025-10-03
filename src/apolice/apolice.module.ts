import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApoliceController } from './controllers/apolice.controller';
import { Apolice } from './entities/apolice.entity';
import { ApoliceService } from './services/apolice.service';
import { Usuario } from '../usuario/entities/usuario.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Apolice, Usuario])],
  providers: [ApoliceService],
  controllers: [ApoliceController],
  exports: [],
})
export class ApoliceModule {}
