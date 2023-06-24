import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';


import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HomeComponent } from './pages/home/home.component';
import { authIntercertorProviders } from './services/auth.interceptor';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SidebarComponent } from './pages/user/sidebar/sidebar.component';
import { BasicinfoComponent } from './pages/user/basicinfo/basicinfo.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { CategoriesComponent } from './components/pages/categories/categories.component';
import { LostcardComponent } from './components/lostcard/lostcard.component';
import { MedicinesComponent } from './components/medicines/medicines.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { RemindersComponent } from './components/reminders/reminders.component';
import { SpelizationsComponent } from './components/spelizations/spelizations.component';

import { MatSelectModule } from '@angular/material/select';
import { LabresultsComponent } from './components/labresults/labresults.component'

@NgModule({
  declarations: [
    AppComponent,
    
    NavbarComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    UserDashboardComponent,
    ProfileComponent,
    SidebarComponent,
    BasicinfoComponent,
    ContactUsComponent,
    CategoriesComponent,
    LostcardComponent,
    MedicinesComponent,
    AboutusComponent,
    RemindersComponent,
    SpelizationsComponent,
    LabresultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatSelectModule,

  ],
  providers: [authIntercertorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
