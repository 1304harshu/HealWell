import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PrescriptionService {
  private apiURL = 'http://localhost:5000/api/';
  storedPrescription: any

  constructor(private http: HttpClient) {}

  addPrescription(prescription: any) {
    return this.http.post(this.apiURL, prescription);
  }

  getPrescriptions() {
    return this.http.get<any[]>(`${this.apiURL}patient/prescriptions`);
  }

  setStoredPrescription(data: any) {
    this.storedPrescription = data;
  }

  getStoredPrescription() {
    return this.storedPrescription;
  }
}

