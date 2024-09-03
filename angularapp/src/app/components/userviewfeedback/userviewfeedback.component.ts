import { Component, OnInit } from '@angular/core';
import { Feedback } from 'src/app/models/feedback.model';
import { FeedbackService } from 'src/app/services/feedback.service';

@Component({
  selector: 'app-userviewfeedback',
  templateUrl: './userviewfeedback.component.html',
  styleUrls: ['./userviewfeedback.component.css']
})
export class UserviewfeedbackComponent implements OnInit {
  myFeedbacks:Feedback[] = [];
  isLoading:boolean = true;
  emptyMsg:string;
  userId:string;
  constructor(private feedbackService:FeedbackService) { }

  ngOnInit(): void {
    this.userId = localStorage.getItem('userId');
    this.getMyFeedbacks();
  }

  public getMyFeedbacks(){
    return this.feedbackService.getAllFeedbacksByUserId(this.userId).subscribe(data=>{
      this.myFeedbacks=data;
      console.log(JSON.stringify(data));
      this.isLoading =false;
      if(this.myFeedbacks.length === 0){
        this.emptyMsg = "Oops! no record found";
      }
    });
  }

  public deleteFeedback(feedbackId:string){
    this.feedbackService.deleteFeedback(feedbackId).subscribe(()=>this.getMyFeedbacks());
  }

}
