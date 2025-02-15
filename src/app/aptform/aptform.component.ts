import { Component } from '@angular/core';

@Component({
  selector: 'app-aptform',
  templateUrl: './aptform.component.html',
  styleUrl: './aptform.component.scss'
})
export class AptformComponent {
    days: number[] = [];
    months: string[] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    years: number[] = [];
    selectedTime: string = '';
  
    constructor() {
      this.populateDOBFields();
    }
  
    ngAfterViewInit() {
      // Add event listeners to restrict non-numeric input in the DOB fields
      this.restrictInput('dob-day', 2);
      this.restrictInput('dob-month', 2);
      this.restrictInput('dob-year', 4);
    }
  
    // Function to select and highlight the clicked time slot
    selectTime(time: string) {
      this.selectedTime = time;
    }
  
    // Function to populate DOB dropdowns
    populateDOBFields() {
      this.days = Array.from({ length: 31 }, (_, i) => i + 1);
      const currentYear = new Date().getFullYear();
      this.years = Array.from({ length: 101 }, (_, i) => currentYear - i);
    }
  
    // Restricts input fields to numbers only
    restrictInput(elementId: string, maxLength: number) {
      const element = document.getElementById(elementId) as HTMLInputElement;
      if (element) {
        element.addEventListener('input', function () {
          this.value = this.value.replace(/[^0-9]/g, '').slice(0, maxLength);
        });
      }
    }
  }
