import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { AdminGuard } from './services/admin.guard';
import { NormalGuard } from './services/normal.guard';
import { ProfileComponent } from './pages/profile/profile.component';
import { BasicinfoComponent } from './pages/user/basicinfo/basicinfo.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { LostcardComponent } from './components/lostcard/lostcard.component';
import { MedicinesComponent } from './components/medicines/medicines.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { RemindersComponent } from './components/reminders/reminders.component';
import { SpelizationsComponent } from './components/spelizations/spelizations.component';
import { LabresultsComponent } from './components/labresults/labresults.component';

const routes: Routes = [

  {path:'' ,
  component:HomeComponent,
  pathMatch: 'full'},


  {path:'contactus' ,
  component:ContactUsComponent,
 },

 {path:'about' ,
  component:AboutusComponent,
 },

  {path:'signup' ,
component:SignupComponent,
pathMatch: 'full'},


{path:'login' ,
component:LoginComponent,
pathMatch: 'full'},


{
  path:'lost',
  component:LostcardComponent,
},

{
  path: 'admin',
  component:DashboardComponent,
  pathMatch:'full',
  canActivate:[AdminGuard],

  


},
{
  path:'user-dashboard',
  component:UserDashboardComponent,
  

  children:[
   
    {
      path:'',
      component:CategoriesComponent,
    },
    {
      path:'profile',
      component:ProfileComponent,
    },
    {
      path:'profile/:patientId',
      component:ProfileComponent,
    },
    {
      path:'lost',
      component:LostcardComponent,
    },
    {
      path:'medicines/:id',
      component:MedicinesComponent,
    },
   
    {
      path:'reminders',
      component:RemindersComponent,
    },
    

    {
      path:'labresults',
      component:LabresultsComponent,
    },
    {
      path:'spelization',
      component:SpelizationsComponent,
    },
  ],

},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
