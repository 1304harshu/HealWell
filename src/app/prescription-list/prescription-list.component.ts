// prescription-list.component.ts
import { Component, OnInit } from '@angular/core';
import { PrescriptionService } from '../shared/prescription.service';

@Component({
  selector: 'app-prescription-list',
  templateUrl: './prescription-list.component.html',
})
export class PrescriptionListComponent implements OnInit {
  prescriptions:any = [];

  constructor(private prescriptionService: PrescriptionService) {}

  ngOnInit() {
    this.prescriptionService.getPrescriptions('patientName').subscribe(
      (data) => {
        this.prescriptions = data;
      },
      (error) => {
        alert('Failed to fetch prescriptions');
      }
    );
  }
}
