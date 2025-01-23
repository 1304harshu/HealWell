import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { PrescriptionFormComponent } from './prescription-form/prescription-form.component';
import { PrescriptionListComponent } from './prescription-list/prescription-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PrescriptionFormComponent,
    PrescriptionListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
