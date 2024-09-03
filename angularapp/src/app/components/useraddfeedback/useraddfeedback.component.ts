import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FeedbackService } from 'src/app/services/feedback.service';

@Component({
  selector: 'app-useraddfeedback',
  templateUrl: './useraddfeedback.component.html',
  styleUrls: ['./useraddfeedback.component.css']
})
export class UseraddfeedbackComponent implements OnInit {
  addFeedbackForm:FormGroup;
  constructor(private feedbackService:FeedbackService,private bobTheBuilder:FormBuilder,private router:Router) {
    this.addFeedbackForm=bobTheBuilder.group({
      date:new Date(),
     feedbackText:bobTheBuilder.control("",Validators.required) 
    })
  }

  public get feedback(){
    return this.addFeedbackForm.get("feedback");
  }

   
  ngOnInit(): void {
  }

  public addFeedback(){
    if(this.addFeedbackForm.valid){
      return this.feedbackService.sendFeedback(this.addFeedbackForm.value).subscribe(()=>{
        this.router.navigate(['/userfeedback']);
      });
    }
  }

}
