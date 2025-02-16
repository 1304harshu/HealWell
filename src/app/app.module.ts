import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { PrescriptionFormComponent } from './prescription-form/prescription-form.component';
import { PrescriptionListComponent } from './prescription-list/prescription-list.component';
import { HomeComponent } from './home/home.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { AptformComponent } from './aptform/aptform.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MealComponent } from './meal/meal.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { ExcerciseComponent } from './excercise/excercise.component';
import { ProfileComponent } from './profile/profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MedicineComponent } from './medicine/medicine.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PrescriptionFormComponent,
    PrescriptionListComponent,
    HomeComponent,
    AppointmentComponent,
    AptformComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    MealComponent,
    ExcerciseComponent,
    ProfileComponent,
    MedicineComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatIconModule,
    MatMenuModule,
    HttpClientModule,
    MatExpansionModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
