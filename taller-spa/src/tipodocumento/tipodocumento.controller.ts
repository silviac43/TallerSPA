/* eslint-disable */

import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UseInterceptors } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { BusinessErrorsInterceptor } from '../compartido/interceptors/errores/errores.interceptor';
import { TipodocumentoDto } from './tipodocumento.dto/tipodocumento.dto';
import { TipodocumentoEntity } from './tipodocumento.entity/tipodocumento.entity';
import { TipodocumentoService } from './tipodocumento.service';

@Controller('tipodocumentos')
@UseInterceptors(BusinessErrorsInterceptor)

export class TipodocumentoController {
    constructor(private readonly tipodocumentoService: TipodocumentoService) {}

    @Get()
    async findAll() {
      return await this.tipodocumentoService.findAll();
    }
  
    @Get(':tipodocumentoId')
    async findOne(@Param('tipodocumentoId') tipodocumentoId: string) {
      return await this.tipodocumentoService.findOne(tipodocumentoId);
    }
  
    @Post()
    async create(@Body() tipodocumentoDto: TipodocumentoDto) {
      const tipodocumento: TipodocumentoEntity = plainToInstance(TipodocumentoEntity, tipodocumentoDto);
      return await this.tipodocumentoService.create(tipodocumento);
    }
  
    @Put(':tipodocumentoId')
    async update(@Param('tipodocumentoId') tipodocumentoId: string, @Body() tipodocumentoDto: TipodocumentoDto) {
      const tipodocumento: TipodocumentoEntity = plainToInstance(TipodocumentoEntity, tipodocumentoDto);
      return await this.tipodocumentoService.update(tipodocumentoId, tipodocumento);
    }
  
    @Delete(':tipodocumentoId')
    @HttpCode(204)
    async delete(@Param('tipodocumentoId') tipodocumentoId: string) {
      return await this.tipodocumentoService.delete(tipodocumentoId);
    }
}
