import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { HomeComponent } from './components/home/home.component';
import { UserviewcharityComponent } from './components/userviewcharity/userviewcharity.component';
import { UserviewfeedbackComponent } from './components/userviewfeedback/userviewfeedback.component';
import { UseraddfeedbackComponent } from './components/useraddfeedback/useraddfeedback.component';
import { CreatecharityComponent } from './components/createcharity/createcharity.component';
import { AdminviewcharityComponent } from './components/adminviewcharity/adminviewcharity.component';
import { AdminviewfeedbackComponent } from './components/adminviewfeedback/adminviewfeedback.component';
import { MydonationComponent } from './components/mydonation/mydonation.component';
import { ViewalldonationComponent } from './components/viewalldonation/viewalldonation.component';
import { UsernavComponent } from './components/usernav/usernav.component';
import { AdminnavComponent } from './components/adminnav/adminnav.component';
import { LoginhomeComponent } from './components/loginhome/loginhome.component';
import { ErrorComponent } from './components/error/error.component';
import { AuthguardComponent } from './components/authguard/authguard.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'loginhome',component:LoginhomeComponent},
  {path:'user/home',component:UsernavComponent},
  {path:'admin/home',component:AdminnavComponent},
  {path:'register',component:RegistrationComponent},
  {path:'',redirectTo:'/home', pathMatch:'full'},
  // {path:'**', redirectTo:'/error',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'addcharity/:id',component:CreatecharityComponent, canActivate:[AuthguardComponent]},
  {path:'addcharity',component:CreatecharityComponent, canActivate:[AuthguardComponent]},
  {path:'admincharity',component:AdminviewcharityComponent, canActivate:[AuthguardComponent]},
  {path:'adminfeedback',component:AdminviewfeedbackComponent, canActivate:[AuthguardComponent]},
  {path:'mydonation',component:MydonationComponent, canActivate:[AuthguardComponent]},
  {path:'viewalldonation',component:ViewalldonationComponent, canActivate:[AuthguardComponent]},
  {path:'usercharity',component:UserviewcharityComponent, canActivate:[AuthguardComponent]},
  {path:'userfeedback',component:UserviewfeedbackComponent, canActivate:[AuthguardComponent]},
  {path:'useraddfeedback',component:UseraddfeedbackComponent, canActivate:[AuthguardComponent]},
  {path:'error', component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
