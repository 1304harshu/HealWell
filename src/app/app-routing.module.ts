import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../app/login/login.component';
import { PrescriptionFormComponent } from './prescription-form/prescription-form.component';
import { PrescriptionListComponent } from './prescription-list/prescription-list.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: DashboardComponent,
    children:[
      { path:'', component: HomeComponent}
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
