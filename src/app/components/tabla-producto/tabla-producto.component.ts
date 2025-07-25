import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Producto } from './producto';

@Component({
  selector: 'app-tabla-producto',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './tabla-producto.component.html',
  styleUrl: './tabla-producto.component.css'
})
export class TablaProductoComponent implements OnInit {

  productos: Producto[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<{ productos: Producto[] }>('assets/productos.json')
      .subscribe({
        next: (data) => this.productos = data.productos,
        error: (error) => console.error('Error al cargar productos:', error)
      });
  }
}
