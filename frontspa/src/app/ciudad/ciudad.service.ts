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
}
