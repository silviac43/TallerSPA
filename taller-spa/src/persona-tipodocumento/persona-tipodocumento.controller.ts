import { Controller, Delete, Get, HttpCode, Param, Post, UseInterceptors } from '@nestjs/common';
import { BusinessErrorsInterceptor } from '../compartido/interceptors/errores/errores.interceptor';
import { PersonaTipodocumentoService } from './persona-tipodocumento.service';

@Controller('personas')
@UseInterceptors(BusinessErrorsInterceptor)
export class PersonaTipodocumentoController {
   constructor(private readonly personaTipodocumentoService: PersonaTipodocumentoService){}

   @Post(':personaId/id_tipo_documento/:tipodocumentoId')
   async addTipodocumentoPersona(@Param('personaId') personaId: string, @Param('tipodocumentoId') tipodocumentoId: string){
       return await this.personaTipodocumentoService.addTipodocumentoPersona(personaId,tipodocumentoId);
   }

   @Get(':personaId/id_tipo_documento')
   async findTipodocumentoByPersonaId(@Param('personaId') personaId: string){
       return await this.personaTipodocumentoService.findTipodocumentoByPersonaId(personaId);
   }

   @Delete(':personaId/id_tipo_documento')
   @HttpCode(204)
   async deleteTipodocumentoPersona(@Param('personaId') personaId: string){
       return await this.personaTipodocumentoService.deleteTipodocumentoPersona(personaId);
   }

}