import { Component } from '@angular/core';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  isMenu: boolean = false

  user: any;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    // this.authService.getUser().subscribe(user => {
    //   console.log(user);
      
    //   this.user = user;
    // });
    this.user = JSON.parse(localStorage.getItem('userInfo') || '{}')
  }

  logout() {
    this.authService.logout();
  }
  

}
