import {IsNotEmpty, IsString} from 'class-validator';
export class TipodocumentoDto {

 @IsString()
 @IsNotEmpty()
 readonly nombre: string;
 
 @IsString()
 @IsNotEmpty()
 readonly descripcion: string;

}

