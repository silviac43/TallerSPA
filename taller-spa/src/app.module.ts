/* eslint-disable */

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonaModule } from './persona/persona.module';
import { TipodocumentoModule } from './tipodocumento/tipodocumento.module';
import { CiudadModule } from './ciudad/ciudad.module';
import { PersonaEntity } from './persona/persona.entity/persona.entity';
import { TipodocumentoEntity } from './tipodocumento/tipodocumento.entity/tipodocumento.entity';
import { CiudadEntity } from './ciudad/ciudad.entity/ciudad.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonaCiudadModule } from './persona-ciudad/persona-ciudad.module';
import { PersonaTipodocumentoModule } from './persona-tipodocumento/persona-tipodocumento.module';


@Module({
  imports: [PersonaModule, TipodocumentoModule, CiudadModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'tallerspa',
      entities: [PersonaEntity, TipodocumentoEntity, CiudadEntity],
      dropSchema: false,
      synchronize: true,
      keepConnectionAlive: true
    }),
    PersonaCiudadModule,
    PersonaTipodocumentoModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
