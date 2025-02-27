import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,  // Indica que es un componente independiente
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      numeroDocumentoUsuario: ['', Validators.required],
      passwordUsuario: ['', Validators.required]
    });
  }

  login() {
    if (this.loginForm.invalid) {
      return;
    }

    const credentials = this.loginForm.value;
    this.authService.login(credentials).subscribe({
      next: (user) => {
        localStorage.setItem('user', JSON.stringify(user));
        this.router.navigate(['/dashboard']); // Redirigir al dashboard
      },
      error: (err) => {
        console.error('Error en login', err);
        alert('Credenciales incorrectas');
      }
    });
  }
}
