import {IsDate, IsNotEmpty, IsString, IsNumber} from 'class-validator';
export class PersonaDto {

 @IsString()
 @IsNotEmpty()
 readonly nombres: string;
 
 @IsString()
 @IsNotEmpty()
 readonly apellidos: string;
 
 @IsString()
 @IsNotEmpty()
 readonly documento: string;
 
 @IsDate()
 @IsNotEmpty()
 readonly fecha_nacimiento: Date;

  @IsString()
 @IsNotEmpty()
 readonly email: string;

  @IsNumber()
 @IsNotEmpty()
 readonly telefono: string;

  @IsString()
 @IsNotEmpty()
 readonly usuario: string;

  @IsString()
 @IsNotEmpty()
 readonly password: string;
 
}