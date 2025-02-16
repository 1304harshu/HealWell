import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  activeTab: string = 'personal-info'; // Default tab

  patient = {
    name: 'Brendon Rogers',
    diagnosis: 'Coronary atherosclerosis - Latest diagnosis',
    image: 'assets/brendon.jpg', // Update this with the correct image path
    personalInfo: [
      { label: 'Sex', value: 'Female' },
      { label: 'Age', value: '28' },
      { label: 'Blood', value: 'A+' },
      { label: 'Status', value: 'Active' },
      { label: 'Department', value: 'Cardiology' },
      { label: 'Registered Date', value: '20 Jan, 2023' },
      { label: 'Appointment', value: '35' },
      { label: 'Bed Number', value: '#0365' }
    ],
    visits: [
      { date: '12 Jan, 2024', doctor: 'Dr. Sharma', notes: 'Routine checkup' },
      { date: '15 Feb, 2024', doctor: 'Dr. Verma', notes: 'Blood Pressure check' }
    ],
    labReports: [
      { test: 'Cholesterol', result: 'Normal', date: '10 Jan, 2024' },
      { test: 'Blood Sugar', result: 'Slightly High', date: '18 Jan, 2024' }
    ]
  };

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
}