import { Ciudad } from "../ciudad/ciudad";
import { Tipodocumento } from "../tipodocumento/tipodocumento";

export class Persona {
    id:string;
    nombres:string;
    apellidos:string;
    documento: string;
    fecha_nacimiento: Date;
    email: string;
    telefono: number;
    usuario: string;
    password: string;
    id_tipo_documento: Tipodocumento;
    lugar_residencia: Ciudad;

    public constructor(id:string, nombres:string,apellidos:string,documento: string,fecha_nacimiento: Date,email: string,telefono: number,usuario: string,password: string,id_tipo_documento: Tipodocumento,lugar_residencia: Ciudad){
        this.id=id;
        this.nombres=nombres;
        this.apellidos=apellidos;
        this.documento=documento;
        this.fecha_nacimiento=fecha_nacimiento;
        this.email=email;
        this.telefono=telefono;
        this.usuario=usuario;
        this.password=password;
        this.id_tipo_documento= id_tipo_documento;
        this.lugar_residencia=lugar_residencia;
    }
}
