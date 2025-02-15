import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

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
}
