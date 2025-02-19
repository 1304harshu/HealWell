import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AppointmentService } from '../shared/appointment.service';

@Component({
  selector: 'app-apt-list',
  templateUrl: './apt-list.component.html',
  styleUrl: './apt-list.component.scss'
})
export class AptListComponent implements OnInit {
  
  searchText: string = '';

  displayedColumns: string[] = ['patientName', 'doctorName', 'reason', 'appointmentDate', 'action'];

  dataSourceData = [
    { patientId: '101', nameId:{ name: 'Mark Timber'}, doctorName: 'Dr. Smith', reason: 'Checkup', appointmentDate: '2025-02-20' },
    { patientId: '102', nameId: {name:'John Doe'}, doctorName: 'Dr. Smith', reason: 'Checkup', appointmentDate: '2025-02-20' }
  ];
  dataSource: any;

   constructor(private aptService: AppointmentService) {
      }

  ngOnInit(): void {

    this.getAptList();

  //   this.dataSource = new MatTableDataSource(this.dataSourceData);
  //   this.dataSource.filterPredicate = 
  // (data: any, filtersJson: string) => {
  //     const matchFilter: any[] = [];
  //     const filters = JSON.parse(filtersJson);

  //     filters.forEach((filter: { id: string | number; value: string; }) => {
  //       const val = data[filter.id] === null ? '' : data[filter.id];
  //       matchFilter.push(val.toLowerCase().includes(filter.value.toLowerCase()));
  //     });
  //       return matchFilter.every(Boolean);
  //   };
      
    
  }

  getAptList(){
    this.aptService.getAppointments().subscribe((resp:any)=>{
      if(resp){
        // this.prescriptions = resp.data
        // this.dataSourceTab = new MatTableDataSource<any>(resp);
console.log(resp);

        this.dataSource = new MatTableDataSource(resp);
    this.dataSource.filterPredicate = 
  (data: any, filtersJson: string) => {
      const matchFilter: any[] = [];
      const filters = JSON.parse(filtersJson);

      filters.forEach((filter: { id: string | number; value: string; }) => {
        const val = data[filter.id] === null ? '' : data[filter.id];
        matchFilter.push(val.name.toLowerCase().includes(filter.value.toLowerCase()));
      });
        return matchFilter.every(Boolean);
    };
      }

    },(error)=>{
        this.dataSource=[];
    })
    
  }

  approveAppointment(element: any) {
    alert("Appointment confirmed!")
    console.log('Approved:', element);
  }

  rejectAppointment(element: any) {
    alert("Appointment cancelled!")
    console.log('Rejected:', element);
  }

  applyFilter(event: any){
    let flterVal = event.target.value;
    const tableFilters = [];
    tableFilters.push({
      id: 'patientId',
      value: flterVal
    });


    this.dataSource.filter = JSON.stringify(tableFilters);
  }
}