import {IsNotEmpty, IsString} from 'class-validator';
export class CiudadDto {

 @IsString()
 @IsNotEmpty()
 readonly nombre: string;
 
 @IsString()
 @IsNotEmpty()
 readonly descripcion: string;

}
