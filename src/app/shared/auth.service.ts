import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private apiURL = 'http://localhost:5000/api/auth'; // Backend URL

  private userSubject = new BehaviorSubject<any>(null); // Stores user data
  user$ = this.userSubject.asObservable(); // Expose as observable

  constructor(private http: HttpClient, private router: Router) {
    // Initialize from local storage if available
    // const storedUser = localStorage.getItem('userInfo');
    // if (storedUser) {
    //   this.userSubject.next(JSON.parse(storedUser));
    // }
  }

  login(credentials: { email: string; password: string; role: string }) {
    return this.http.post<{ token: string }>(`${this.apiURL}/login`, credentials).pipe(
      tap(response => {
        localStorage.setItem('token', response.token);
        localStorage.setItem('userInfo', JSON.stringify(response));
        this.userSubject.next(response); // Update the BehaviorSubject
      })
    );;
  }

  // logout() {
  //   localStorage.removeItem('userInfo');
  //   this.router.navigate(['/login']);
  // }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userInfo');
    this.userSubject.next(null);
  }

  getUser(): Observable<any> {
    return this.user$; // Returns the user as an observable
  }

  isLoggedIn() {
    return !!localStorage.getItem('userInfo');
  }

  registerUser(inputData: { name: any; email: any; password: any; role: any; }){
    return this.http.post<any>(`${this.apiURL}/register`, inputData).pipe(
      tap(response => {
        localStorage.setItem('token', response.token);
        localStorage.setItem('userInfo', JSON.stringify(response));
        this.userSubject.next(response); // Update the BehaviorSubject
      })
    );;
  }
}
