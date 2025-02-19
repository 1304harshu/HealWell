import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PrescriptionService {
  private apiURL = 'http://localhost:5000/api/';
  storedPrescription: any

  constructor(private http: HttpClient) {}



  getPrescriptions() {
    return this.http.get<any[]>(`${this.apiURL}patient/prescriptions`);
  }

  getMedicineList(inputData: any){
    return this.http.get<any[]>(`${this.apiURL}admin/medications-by-diagnosis?diagnosis=${inputData}`);
  }

  addPrescription(inputData: any){
    return this.http.post(`${this.apiURL}admin/add-prescription`, inputData);
  }


  setStoredPrescription(data: any) {
    this.storedPrescription = data;
  }

  getStoredPrescription() {
    return this.storedPrescription;
  }
}

