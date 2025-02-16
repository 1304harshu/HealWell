// prescription-list.component.ts
import { Component, OnInit } from '@angular/core';
import { PrescriptionService } from '../shared/prescription.service';

@Component({
  selector: 'app-prescription-list',
  templateUrl: './prescription-list.component.html',
  styleUrls: ['./prescription-list.component.scss']
})
export class PrescriptionListComponent {
  stats = [
    { title: 'Blood Pressure', status: 'In the norm', statusClass: 'normal', unit: 'mm/hg', value: '120/89' },
    { title: 'Heart Rate', status: 'Above the norm', statusClass: 'high', unit: 'BPM', value: '120' },
    { title: 'Blood Sugar', status: 'In the norm', statusClass: 'normal', unit: 'mg/dl', value: '97' },
    { title: 'Cholesterol', status: 'In the norm', statusClass: 'normal', unit: '', value: '85' }
  ];
  prescriptions = [
    { prescriptionNo: '001', date: '2025-02-16', doctorName: 'Dr. Sharma', diagnosis: 'Flu' },
    { prescriptionNo: '002', date: '2025-02-15', doctorName: 'Dr. Mehta', diagnosis: 'Cold' },
    { prescriptionNo: '003', date: '2025-02-14', doctorName: 'Dr. Iyer', diagnosis: 'Cough' },
    { prescriptionNo: '004', date: '2025-02-13', doctorName: 'Dr. Khan', diagnosis: 'Fever' },
    { prescriptionNo: '005', date: '2025-02-12', doctorName: 'Dr. Patel', diagnosis: 'Diabetes' }
  ];
}