import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PrescriptionService } from '../shared/prescription.service';

@Component({
  selector: 'app-prescription-form',
  templateUrl: './prescription-form.component.html',
  styleUrls: ['./prescription-form.component.scss']
})
export class PrescriptionFormComponent implements OnInit {
  prescriptionForm: FormGroup;
  medList: any[]= [];

  constructor(private fb: FormBuilder, private prescriptionService: PrescriptionService) {
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
  ngOnInit(): void {
    // this.getMedicineList()
  }
  
  getMedicineList(){
    this.prescriptionService.getMedicineList(this.prescriptionForm.get('diagnosis')?.value).subscribe((resp)=>{
      this.medList = resp;
    })
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

      this.prescriptionService.addPrescription(this.prescriptionForm.value).subscribe((resp)=>{
        alert('Prescription submitted successfully!');
      },
      error=>{
        alert('Prescription failed to submit!');
      })

    } else {
      alert('Please fill all required fields.');
    }
  }
}
