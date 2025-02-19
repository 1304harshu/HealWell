import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { PrescriptionFormComponent } from './prescription-form/prescription-form.component';
import { PrescriptionListComponent } from './prescription-list/prescription-list.component';
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
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDividerModule } from '@angular/material/divider';
import {MatRadioModule} from '@angular/material/radio';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './shared/auth.interceptor';  // Import Interceptor
import { NewhomeComponent } from './newhome/newhome.component';
import { FoodplanComponent } from './foodplan/foodplan.component';
import { AptListComponent } from './apt-list/apt-list.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PrescriptionFormComponent,
    PrescriptionListComponent,
    AppointmentComponent,
    AptformComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    MealComponent,
    ExcerciseComponent,
    ProfileComponent,
    MedicineComponent,
    NewhomeComponent,
    FoodplanComponent,
    AptListComponent,

  ],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    BrowserModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatMenuModule,
    HttpClientModule,
    MatExpansionModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatTableModule,
    MatTooltipModule,
    MatDividerModule,
    MatRadioModule,
    MatCardModule,   
    MatDividerModule, 
    MatIconModule, 
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
