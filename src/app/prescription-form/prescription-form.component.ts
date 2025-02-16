import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-prescription-form',
  templateUrl: './prescription-form.component.html',
  styleUrls: ['./prescription-form.component.scss']
})
export class PrescriptionFormComponent {
  prescriptionForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.prescriptionForm = this.fb.group({
      patientEmail: ['', [Validators.required, Validators.email]],
      doctorName: ['', Validators.required],
      diagnosis: ['', Validators.required],
      instructions: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      refills: [0, [Validators.required, Validators.min(0)]],
      pharmacy: ['', Validators.required],
      doctorNotes: [''],
      status: ['active', Validators.required],
      date: ['', Validators.required],
      medications: this.fb.array([]) // Dynamic medication fields
    });

    this.addMedication(); // Add one medication field by default
  }

  // Getter for medications FormArray
  get medications() {
    return this.prescriptionForm.get('medications') as FormArray;
  }

  // Add a new medication field
  addMedication() {
    const medicationGroup = this.fb.group({
      name: ['', Validators.required],
      dosage: ['', Validators.required],
      quantity: [0, [Validators.required, Validators.min(1)]],
      instructions: ['', Validators.required]
    });

    this.medications.push(medicationGroup);
  }

  // Remove a medication field
  removeMedication(index: number) {
    this.medications.removeAt(index);
  }

  // Submit form data
  onSubmit() {
    if (this.prescriptionForm.valid) {
      console.log('Prescription Data:', this.prescriptionForm.value);
      alert('Prescription submitted successfully!');
    } else {
      alert('Please fill all required fields.');
    }
  }
}
