// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Cliente } from '../src/interface/Cliente';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private URL = 'http://localhost:3000/usuarios';

  constructor(private http: HttpClient) {}

  login(nombre: string, contrasena: string): Observable<boolean> {
    return this.http.get<Cliente[]>(`${this.URL}?nombre=${nombre}&contrasena=${contrasena}`).pipe(
      map(usuarios => {
        if (usuarios.length > 0) {
          const usuario = usuarios[0];
          localStorage.setItem('usuarioLogueado', 'true');
          localStorage.setItem('usuarioNombre', usuario.nombre);
          localStorage.setItem('usuarioCorreo', usuario.correo);
          return true;
        }
        return false;
      }),
      catchError(() => of(false))
    );
  }

  logout() {
    localStorage.removeItem('usuarioLogueado');
    localStorage.removeItem('usuarioNombre');
    localStorage.removeItem('usuarioCorreo');
  }

  estaLogueado(): boolean {
    return localStorage.getItem('usuarioLogueado') === 'true';
  }
}
