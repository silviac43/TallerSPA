export class Tipodocumento {
  id:string;
  nombre: string;
  descripcion: string;
 
  public constructor(id:string,nombre: string, descripcion: string) {
    this.id=id;
    this.nombre = nombre;
    this.descripcion = descripcion;
  }
}
