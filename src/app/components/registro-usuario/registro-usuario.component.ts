import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { RegistroUsuarioService } from '../../../../services/registro-usuario.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registro-usuario',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './registro-usuario.component.html',
  styleUrl: './registro-usuario.component.css'
})
export class RegistroUsuarioComponent {
  formularioRegistro: FormGroup;

  constructor(
    private fb: FormBuilder,
    private registro: RegistroUsuarioService
  ) {
    this.formularioRegistro = this.fb.group({
      nombre: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      contrasena: ['', Validators.required]
    });
  }

  agregarFormulario() {
    if (this.formularioRegistro.valid) {
      this.registro.guardarCliente(this.formularioRegistro.value).subscribe(() => {
        alert('Usuario registrado correctamente.');
        this.formularioRegistro.reset();
      });
    }
  }
}
