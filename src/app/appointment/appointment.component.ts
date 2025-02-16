import { Component } from '@angular/core';

interface Doctor {
  name: string;
  specialty: string;
  image: string;
}

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.scss'
})
export class AppointmentComponent { 
  doctorsData: { [key: string]: Doctor[] } = {
    "Neck Pain": [
      { name: "Dr. Priya Verma", specialty: "Cardiologist", image: "assets/aptimg/doc1.png" },
      { name: "Dr. Arun Mehta", specialty: "Neurologist", image: "assets/aptimg/doc2.png" },
      { name: "Dr. Vishal Patel", specialty: "Gastroenterologist", image: "assets/aptimg/doc3.png" },
      { name: "Dr. Anjali Rao", specialty: "Gynecologist", image: "assets/aptimg/doc4.png" }
    ],
    "Headache": [
      { name: "Dr. Rahul Sharma", specialty: "Neurologist", image: "assets/aptimg/doc5.png" },
      { name: "Dr. Kavita Joshi", specialty: "General Physician", image: "assets/aptimg/doc6.png" }
    ],
    "Stomach Ache": [
      { name: "Dr. Ramesh Rao", specialty: "Gastroenterologist", image: "assets/aptimg/doc6.png" },
      { name: "Dr. Meena Kaur", specialty: "General Physician", image: "assets/aptimg/doc2.png" }
    ],
    "Skin Rash": [
      { name: "Dr. Sneha Kapoor", specialty: "Dermatologist", image: "assets/aptimg/doc7.png" },
      { name: "Dr. Amit Tandon", specialty: "Skin Specialist", image: "assets/aptimg/doc8.png" }
    ],
    "Back Pain": [
      { name: "Dr. Sandeep Yadav", specialty: "Orthopedic", image: "assets/aptimg/doc8.png" },
      { name: "Dr. Preeti Sharma", specialty: "Physiotherapist", image: "assets/aptimg/doc9.png" }
    ],
    "Obesity": [
      { name: "Dr. Arvind Khanna", specialty: "Nutritionist", image: "assets/aptimg/doc10.png" },
      { name: "Dr. Ritu Verma", specialty: "Dietitian", image: "assets/aptimg/doc11.png" }
    ]
  };

  selectedCategory: string = "Neck Pain";

  // Function to update selected category
  filterDoctors(category: string) {
    this.selectedCategory = category;
  }

  scrollToSection() {
    const element = document.getElementById("bookingSection");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
  
}
