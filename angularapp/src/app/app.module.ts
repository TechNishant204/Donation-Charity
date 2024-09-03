import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminnavComponent } from './components/adminnav/adminnav.component';
import { AdminviewcharityComponent } from './components/adminviewcharity/adminviewcharity.component';
import { AdminviewfeedbackComponent } from './components/adminviewfeedback/adminviewfeedback.component';
import { AuthguardComponent } from './components/authguard/authguard.component';
import { CreatecharityComponent } from './components/createcharity/createcharity.component';
import { ErrorComponent } from './components/error/error.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MydonationComponent } from './components/mydonation/mydonation.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { UseraddfeedbackComponent } from './components/useraddfeedback/useraddfeedback.component';
import { UsernavComponent } from './components/usernav/usernav.component';
import { UserviewcharityComponent } from './components/userviewcharity/userviewcharity.component';
import { UserviewfeedbackComponent } from './components/userviewfeedback/userviewfeedback.component';
import { ViewalldonationComponent } from './components/viewalldonation/viewalldonation.component';
import { AuthorizationInterceptor } from './interceptor/authorization-interceptor';
import { LoginhomeComponent } from './components/loginhome/loginhome.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminnavComponent,
    AdminviewcharityComponent,
    AdminviewfeedbackComponent,
    CreatecharityComponent,
    ErrorComponent,
    HomeComponent,
    LoginComponent,
    MydonationComponent,
    NavbarComponent,
    RegistrationComponent,
    UseraddfeedbackComponent,
    UsernavComponent,
    UserviewcharityComponent,
    UserviewfeedbackComponent,
    ViewalldonationComponent,
    LoginhomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    
   {provide:HTTP_INTERCEPTORS,useClass:AuthorizationInterceptor,multi:true},
   AuthguardComponent,
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
