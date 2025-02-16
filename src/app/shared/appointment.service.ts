import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  private apiURL = 'http://localhost:5000/api/';

  constructor(private http: HttpClient) { }

  getDoctorsList() {
    return this.http.get<any[]>(`${this.apiURL}patient/doctors`);
  }


}
