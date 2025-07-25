import { Component } from '@angular/core';
import { TablaProductoComponent } from "../../components/tabla-producto/tabla-producto.component";

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [TablaProductoComponent],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {

}
