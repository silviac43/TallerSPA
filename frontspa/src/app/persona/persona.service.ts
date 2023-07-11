import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from './persona';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  private apiUrl = 'http://localhost:3000/api/v1/personas';

  constructor(private http: HttpClient) { }

  getPersonas(): Observable<Persona[]> {
    return this.http.get<Persona[]>(this.apiUrl);
  }

  createPersona(persona: Persona): Observable<Persona> {
    return this.http.post<Persona>(this.apiUrl, persona);
 }

 deletePersona(id: string) {
  return this.http.delete(this.apiUrl+'/'+id)
}

updatePersona(id: string, persona: Persona): Observable<Persona> {
  return this.http.put<Persona>(this.apiUrl+"/"+id, persona);
}

updateLugar(personaid: string, lugarid: string): Observable<Persona> {
  return this.http.post<Persona>(this.apiUrl+'/'+personaid + '/lugar_residencia/' + lugarid,null);
}

deleteLugar(personaid: string, lugarid: string): Observable<Persona> {
  return this.http.delete<Persona>(this.apiUrl+'/'+personaid + '/lugar_residencia/' + lugarid);
}

updateDocumento(personaid: string, documentoid: string): Observable<Persona> {
  return this.http.post<Persona>(this.apiUrl+'/'+personaid + '/id_tipo_documento/' + documentoid,null);
}

deleteDocumento(personaid: string, documentoid: string): Observable<Persona> {
  return this.http.delete<Persona>(this.apiUrl+'/'+personaid + '/id_tipo_documento/' + documentoid);
}

}
