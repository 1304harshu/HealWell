import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../app/login/login.component';
import { PrescriptionFormComponent } from './prescription-form/prescription-form.component';
import { PrescriptionListComponent } from './prescription-list/prescription-list.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewhomeComponent} from './newhome/newhome.component';
import { ExcerciseComponent } from './excercise/excercise.component';
import { MealComponent } from './meal/meal.component';
import { ProfileComponent } from './profile/profile.component';
import { AptformComponent } from './aptform/aptform.component';
import { MedicineComponent } from './medicine/medicine.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: DashboardComponent,
    children:[
      { path:'dashboard', component: NewhomeComponent},
      { path: 'appointment', component: AppointmentComponent },
      { path: 'prescription-list', component: PrescriptionListComponent },
      { path: 'exercise', component: ExcerciseComponent },
      { path: 'diet', component: MealComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'aptform', component: AptformComponent },
      { path: 'prescription-details', component: MedicineComponent }

    ]
  },
  { path: 'staff-dashboard', component: PrescriptionFormComponent },
 
  { path: 'patient-dashboard', component: PrescriptionListComponent },
  { path: 'appointment', component: AppointmentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
