import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../../../services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  formLogin: FormGroup;
  errorLogin: boolean = false;
  cargando: boolean = false;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {
    this.formLogin = this.fb.group({
      nombre: ['', Validators.required],
      contrasena: ['', Validators.required]
    });
  }

  enviarLogin() {
    if (this.formLogin.invalid) return;

    const { nombre, contrasena } = this.formLogin.value;

    this.cargando = true;
    this.auth.login(nombre, contrasena).subscribe(ok => {
      this.cargando = false;
      if (ok) {
        this.router.navigate(['/productos']);
      } else {
        this.errorLogin = true;
      }
    });
  }
}
