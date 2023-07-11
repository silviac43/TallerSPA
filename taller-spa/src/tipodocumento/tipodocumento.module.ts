import { Module } from '@nestjs/common';
import { TipodocumentoService } from './tipodocumento.service';
import { TipodocumentoController } from './tipodocumento.controller';
import { TipodocumentoEntity } from './tipodocumento.entity/tipodocumento.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TipodocumentoEntity])],
  providers: [TipodocumentoService],
  controllers: [TipodocumentoController]
})
export class TipodocumentoModule {}
