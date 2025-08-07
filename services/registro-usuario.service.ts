import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistroUsuarioService {
  private URL = 'http://localhost:3000/usuarios';

  constructor(private http: HttpClient) {}

  guardarCliente(data: any): Observable<any> {
    return this.http.post(this.URL, data);
  }
}
