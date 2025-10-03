import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Apolice } from './entities/apolice.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Apolice])],
  providers: [],
  controllers: [],
  exports: [],
})
export class ApoliceModule {}
