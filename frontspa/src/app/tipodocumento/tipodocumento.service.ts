import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tipodocumento } from './tipodocumento';

@Injectable({
  providedIn: 'root'
})
export class TipodocumentoService {
  private apiUrl = 'http://localhost:3000/api/v1/tipodocumentos';

  constructor(private http: HttpClient) { }

  getTipodocumentos(): Observable<Tipodocumento[]> {
    return this.http.get<Tipodocumento[]>(this.apiUrl);
  }
}
