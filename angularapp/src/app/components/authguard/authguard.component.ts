import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-authguard',
  templateUrl: './authguard.component.html',
  styleUrls: ['./authguard.component.css']
})
export class AuthguardComponent implements CanActivate {

  constructor(private router:Router,private loginservice:AuthService) {
    console.log("inside authguard constructor")
  }
  canActivate(route: ActivatedRouteSnapshot):boolean{
    let role=localStorage.getItem('role')
    //console.log(""+this.loginservice.getLoginStatus());
      if (!role) {
        console.log("inside authguard method")
        this.router.navigate(["/login"]);
        return false;
      }
      else{
        console.log("inside else")
        console.log(role)
        if(role=='ADMIN'){
          //(currentUrl != "/adminviewfeedback")  &&  (currentUrl != "/dietplanrequests") &&  (currentUrl != "/requestedplan") && (currentUrl != "/adddietplan") && (!currentUrl.startsWith('/viewdietplan')) && (!currentUrl.startsWith('/editdietplan')) && !currentUrl.startsWith("/adminfeedback")
          let currentUrl:string=this.router.getCurrentNavigation().extractedUrl.toString();
          // console.log("current url ",currentUrl)
          //console.log((currentUrl.includes('viewdietplan')))
          if((currentUrl != "/admincharity") &&  !(currentUrl.startsWith('/addcharity')) &&  (currentUrl != "/adminfeedback") && (currentUrl != "/viewalldonation")){
            this.router.navigate(["/error"]);
            return false;
          }
        }else if(role=='USER'){
          let currentUrl:string=this.router.getCurrentNavigation().extractedUrl.toString();
          //console.log((currentUrl.includes('viewdietplan')))
          if((currentUrl != "/mydonation") && (!currentUrl.startsWith('/usercharity')) && (currentUrl != "/userfeedback") && (currentUrl != "/useraddfeedback")){
            this.router.navigate(["/error"]);
            return false;
          }
        }
 
        return true;
      }
  }

}
