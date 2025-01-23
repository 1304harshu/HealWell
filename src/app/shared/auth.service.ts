import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private apiURL = 'http://localhost:5000/api/auth'; // Backend URL

  constructor(private http: HttpClient, private router: Router) {}

  login(credentials: { username: string; password: string; role: string }) {
    return this.http.post<{ token: string }>(`${this.apiURL}/login`, credentials);
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  isLoggedIn() {
    return !!localStorage.getItem('token');
  }
}
