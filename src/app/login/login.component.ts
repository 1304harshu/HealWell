// login.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  credentials = { username: '', password: '', role: 'staff' }; // Default to staff

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    this.authService.login(this.credentials).subscribe(
      (response) => {
        localStorage.setItem('token', response.token);
        this.router.navigate([this.credentials.role === 'staff' ? '/staff-dashboard' : '/patient-dashboard']);
      },
      (error) => {
        alert('Login failed');
      }
    );
  }
}
