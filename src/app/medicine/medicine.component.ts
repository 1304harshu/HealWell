import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { PrescriptionService } from '../shared/prescription.service';
@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrl: './medicine.component.scss',
  animations: [
    trigger('fadeSlide', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-10px)' }),
        animate('400ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class MedicineComponent implements OnInit{
  medicines:any = []
  // [
  //   { name: 'SINUS GOLD MIX', instructions: '15 DROPS IN 1/4TH CUP OF WATER - 2 TIMES IN A DAY - DAILY after meals for NaN days' },
  //   { name: 'COUGH MIX', instructions: '15 drops in 1/4th cup 2 times in a day - DAILY after meals' },
  //   { name: 'DROX 1 DROPS', instructions: '(15 DROPS IN 1/4TH CUP OF WATER 2 IN A DAY - DAILY ) after meals for NaN days' },
  //   { name: 'KALI BICH 200', instructions: '5-5 PILLS TO BE SUCKED 2 TIMES IN A DAY - MON - FRI after meals' },
  //   { name: 'SANG NIT 200', instructions: '5-5 PILL TO BE SUCKED 2 TIMES IN A DAY - MON -FRI after meals' },
  //   { name: 'SILICEA 1M', instructions: '6-6 PILLS TO BE SUCKED 2 TIMES IN A DAY -SAT after meals' },
  //   { name: 'TUB BOV 1M', instructions: '6-6 PILLS TO BE SUCKED 2 TIMES IN A DAY -SUN after meals' }
  // ];

  prescriptionData: any

  constructor(private prescriptionService: PrescriptionService){}

  ngOnInit(): void {
    this.prescriptionData = this.prescriptionService.getStoredPrescription();
    this.medicines = this.prescriptionData.medications
  }


}
