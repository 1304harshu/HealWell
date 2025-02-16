import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor( private router: Router) {}

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
    this.router.navigate(['/home/dashboard']);
  }
}
