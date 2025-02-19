import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../shared/appointment.service';

@Component({
  selector: 'app-aptform',
  templateUrl: './aptform.component.html',
  styleUrl: './aptform.component.scss'
})
export class AptformComponent implements OnInit{
    days: number[] = [];
    months: string[] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    years: number[] = [];
    selectedTime: string = '';
  doctorsList: any[] = [];
  loggedInUser: any = ''
  selectedDocDetails: any;
  userData: any;
  aptType= 'physical';
  aptDate!: Date;
  aptReason: any;
  
    constructor(private aptService: AppointmentService) {
    }
  ngOnInit(): void {

    this.userData = JSON.parse(localStorage.getItem('userInfo') || '{}')
    this.loggedInUser = this.userData.name
    this.aptService.getDoctorsList().subscribe((resp)=>{
      this.doctorsList = resp
    })

  }
  
  
    // Function to select and highlight the clicked time slot
    selectTime(time: string) {
      this.selectedTime = time;
    }
  
    selectedDoc(event: any){
      this.selectedDocDetails = event.target.value
    }

    submitApt(){
      let inputData = {
        "patientId": this.userData.id,
        "doctorId": this.selectedDocDetails,
        "appointmentDate": this.aptDate,
        "reason": this.aptReason,
        "appointmentType": this.aptType,
        "status": "active"
      }

      this.aptService.addAppointment(inputData).subscribe((resp)=>{
        alert('Appointment scheduled successfully!');
        this.selectedDocDetails = '';
        this.userData = '';
        this.aptType = 'physical';
        this.aptReason = '';
      },
      error=>{
        alert('Appointment failed to schedule!');
      })
    }
  }
