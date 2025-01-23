import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PrescriptionService {
  private apiURL = 'http://localhost:5000/api/prescriptions';

  constructor(private http: HttpClient) {}

  addPrescription(prescription: any) {
    return this.http.post(this.apiURL, prescription);
  }

  getPrescriptions(patientName: string) {
    return this.http.get<any[]>(`${this.apiURL}`);
  }
}

