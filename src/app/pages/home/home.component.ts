import { Component } from '@angular/core';
import { NavegatorComponent } from "../../components/navegator/navegator.component";
import { CaruselComponent } from "../../components/carusel/carusel.component";
import { TarjetasComponent } from "../../components/tarjetas/tarjetas.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CaruselComponent, TarjetasComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
}
