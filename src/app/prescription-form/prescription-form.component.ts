// prescription-form.component.ts
import { Component } from '@angular/core';
import { PrescriptionService } from '../shared/prescription.service';

@Component({
  selector: 'app-prescription-form',
  templateUrl: './prescription-form.component.html',
  styleUrls: ['./prescription-form.component.scss']
})
export class PrescriptionFormComponent {
  prescription = {
    patientName: '',
    phoneNumber: '',
    docterName:'',
    address: '',
    medicine1: '',
    medicine2: '',
    schedule: { morning: false, afternoon: false, night: false },
  };

  constructor(private prescriptionService: PrescriptionService) {}

  onSubmit() {
    this.prescriptionService.addPrescription(this.prescription).subscribe(
      () => {
        alert('Prescription added successfully');
      },
      (error) => {
        alert('Failed to add prescription');
      }
    );
  }
}
