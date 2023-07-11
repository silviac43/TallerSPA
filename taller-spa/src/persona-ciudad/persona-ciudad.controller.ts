import { Controller, Delete, Get, HttpCode, Param, Post, UseInterceptors } from '@nestjs/common';
import { BusinessErrorsInterceptor } from '../compartido/interceptors/errores/errores.interceptor';
import { PersonaCiudadService } from './persona-ciudad.service';

@Controller('personas')
@UseInterceptors(BusinessErrorsInterceptor)
export class PersonaCiudadController {
   constructor(private readonly personaCiudadService: PersonaCiudadService){}

   @Post(':personaId/lugar_residencia/:ciudadId')
   async addCiudadPersona(@Param('personaId') personaId: string, @Param('ciudadId') ciudadId: string){
       return await this.personaCiudadService.addCiudadPersona(personaId,ciudadId);
   }

   @Get(':personaId/lugar_residencia')
   async findCiudadByPersonaId(@Param('personaId') personaId: string){
       return await this.personaCiudadService.findCiudadByPersonaId(personaId);
   }

   @Delete(':personaId/lugar_residencia')
   @HttpCode(204)
   async deleteCiudadPersona(@Param('personaId') personaId: string){
       return await this.personaCiudadService.deleteCiudadPersona(personaId);
   }

}