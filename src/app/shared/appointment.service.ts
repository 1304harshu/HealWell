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

  getAppointments() {
    return this.http.get<any[]>(`${this.apiURL}admin/appointments`);
  }

  addAppointment(reqData: any){
    return this.http.post(`${this.apiURL}patient/schedule-appointment`, reqData);
  }


}
