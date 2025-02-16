import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  regName: any
  regEmail: any
  regPassword: any
  regRole: any

  email!: string;
  password!: string;
  role!: string;

  isErrorApi: boolean = false
  errorMsg: any;

  constructor( private router: Router, private authService: AuthService) {}

  ngAfterViewInit() {
    const container = document.getElementById('container') as HTMLElement;
    const registerBtn = document.getElementById('register') as HTMLElement;
    const loginBtn = document.getElementById('login') as HTMLElement;

    if (registerBtn && loginBtn && container) {
      registerBtn.addEventListener('click', () => {
        container.classList.add("active");
      });

      loginBtn.addEventListener('click', () => {
        container.classList.remove("active");
      });
    }
  }

  goToHome()
  {
    let input ={
      email: this.email,
      password: this.password,
      role: this.role
    }

    // this.router.navigate(['/home/dashboard']);
    this.authService.login(input).subscribe(
      (response: any) => {
        this.isErrorApi = false
        localStorage.setItem('token', response.token);
        this.router.navigate(['home/dashboard']);
      },
      (error) => {
        this.isErrorApi = true;
        this.errorMsg = error.error.message;
        console.error('Error:', error);
      }
    );
  }

  registerUser(){
    let input ={
      name:this.regName,
      email: this.regEmail,
      password: this.regPassword,
      role: this.regRole
    }

    this.authService.registerUser(input).subscribe(
      (response: any) => {
        this.isErrorApi = false
        localStorage.setItem('token', response.token);
        this.router.navigate(['home/dashboard']);
      },
      (error: any) => {
        this.isErrorApi = true
        this.errorMsg = error.error.message;
        console.error('Error:', error);
      }
    );
  }
}
