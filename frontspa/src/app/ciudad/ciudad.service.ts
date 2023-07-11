import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ciudad } from './ciudad';

@Injectable({
  providedIn: 'root'
})
export class CiudadService {
  private apiUrl = 'http://localhost:3000/api/v1/ciudades';

  constructor(private http: HttpClient) { }

  getCiudades(): Observable<Ciudad[]> {
    return this.http.get<Ciudad[]>(this.apiUrl);
  }

  createCiudad(ciudad: Ciudad): Observable<Ciudad> {
    return this.http.post<Ciudad>(this.apiUrl, ciudad);
 }

 deleteCiudad(id: string) {
  return this.http.delete(this.apiUrl+'/'+id)
}

updateCiudad(id: string, ciudad: Ciudad): Observable<Ciudad> {
  return this.http.put<Ciudad>(this.apiUrl+"/"+id, ciudad);
}
}
