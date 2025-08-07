import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-cerrar-sesion',
  standalone: true,
  imports: [],
  templateUrl: './cerrar-sesion.component.html',
  styleUrl: './cerrar-sesion.component.css'
})
export class CerrarSesionComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.auth.logout();               
    this.router.navigate(['/login']); 
  }

}
