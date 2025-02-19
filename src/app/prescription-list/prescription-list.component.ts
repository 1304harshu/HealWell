// prescription-list.component.ts
import { Component, OnInit } from '@angular/core';
import { PrescriptionService } from '../shared/prescription.service';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prescription-list',
  templateUrl: './prescription-list.component.html',
  styleUrls: ['./prescription-list.component.scss']
})
export class PrescriptionListComponent implements OnInit{
  vitalStats = [
    { title: 'Blood Pressure', status: 'In the norm', statusClass: 'normal', unit: 'mm/hg', value: '120/89' },
    { title: 'Heart Rate', status: 'Above the norm', statusClass: 'high', unit: 'BPM', value: '120' },
    { title: 'Blood Sugar', status: 'In the norm', statusClass: 'normal', unit: 'mg/dl', value: '97' },
    { title: 'Cholesterol', status: 'In the norm', statusClass: 'normal', unit: '', value: '85' }
  ];
  // prescriptions = [
  //   { prescriptionNo: '001', date: '2025-02-16', doctorName: 'Dr. Sharma', diagnosis: 'Flu' },
  //   { prescriptionNo: '002', date: '2025-02-15', doctorName: 'Dr. Mehta', diagnosis: 'Cold' },
  //   { prescriptionNo: '003', date: '2025-02-14', doctorName: 'Dr. Iyer', diagnosis: 'Cough' },
  //   { prescriptionNo: '004', date: '2025-02-13', doctorName: 'Dr. Khan', diagnosis: 'Fever' },
  //   { prescriptionNo: '005', date: '2025-02-12', doctorName: 'Dr. Patel', diagnosis: 'Diabetes' }
  // ];

  displayedColumns: string[] = ['prescriptionNo', 'date', 'doctorName', 'diagnosis', 'actions'];

  prescriptions = [
    { prescriptionNo: 'RX001', date: '2025-02-15', doctorName: 'Dr. A Sharma', diagnosis: 'Hypertension' },
    { prescriptionNo: 'RX002', date: '2025-02-12', doctorName: 'Dr. B Mehta', diagnosis: 'Diabetes' },
    { prescriptionNo: 'RX003', date: '2025-02-10', doctorName: 'Dr. C Rao', diagnosis: 'High Cholesterol' }
  ];

  dataSourceTab:any

  constructor(private prescriptionService: PrescriptionService, private router:Router){}
  ngOnInit(): void {
    this.prescriptionService.getPrescriptions().subscribe((resp:any)=>{
      if(resp.data){
        this.prescriptions = resp.data
        this.dataSourceTab = new MatTableDataSource<any>(this.prescriptions);
      }

    },(error)=>{
        this.dataSourceTab=[];
    })
  }

  goToPrescptDetails(selectedPrescription: any){
    this.prescriptionService.setStoredPrescription(selectedPrescription);
    this.router.navigate(['home/prescription-details'])
  }
}