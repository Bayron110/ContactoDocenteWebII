import { Component } from '@angular/core';
import { InformacionComponent } from "../../components/informacion/informacion.component";

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [InformacionComponent],
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.css'
})
export class NosotrosComponent {

}
