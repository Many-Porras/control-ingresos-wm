import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginRequest, UsuarioLoginResponse } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:5202/api/Auth/login';

  constructor(private http: HttpClient) {}

  login(credentials: LoginRequest): Observable<UsuarioLoginResponse> {
    return this.http.post<UsuarioLoginResponse>(this.apiUrl, credentials);
  }

  setCurrentUser(user: UsuarioLoginResponse): void {
    localStorage.setItem('user', JSON.stringify(user));
  }

  getCurrentUser(): UsuarioLoginResponse | null {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }

  logout(): void {
    localStorage.removeItem('user');
  }
}
