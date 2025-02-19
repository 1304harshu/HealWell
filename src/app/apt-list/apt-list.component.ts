import { Component } from '@angular/core';

@Component({
  selector: 'app-apt-list',
  templateUrl: './apt-list.component.html',
  styleUrl: './apt-list.component.scss'
})
export class AptListComponent {
  searchQuery: string = '';

  displayedColumns: string[] = ['patientId', 'patientName', 'doctorName', 'reason', 'appointmentDate', 'action'];

  dataSource = [
    { patientId: '101', patientName: 'John Doe', doctorName: 'Dr. Smith', reason: 'Checkup', appointmentDate: '2025-02-20' }
  ];

  approveAppointment(element: any) {
    console.log('Approved:', element);
  }

  rejectAppointment(element: any) {
    console.log('Rejected:', element);
  }
}