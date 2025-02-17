import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
  animations: [
    trigger('fadeSlide', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-10px)' }),
        animate('400ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ opacity: 0, transform: 'translateY(10px)' })),
      ])
    ])
  ]
})
export class ProfileComponent {
  activeTab: string = 'personal-info'; // Default tab

  patient = {
    name: 'Harsh Upadhyay',
    diagnosis: 'Coronary atherosclerosis - Latest diagnosis',
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
      { date: '15 Feb, 2024', doctor: 'Dr. Verma', notes: 'Blood Pressure check' },
      
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