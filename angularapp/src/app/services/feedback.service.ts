import { Injectable } from '@angular/core';
import { Feedback } from '../models/feedback.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  backendUrl=environment.backendUrl;
  
  requestParams:any;
  constructor(private http:HttpClient) { }

  public sendFeedback(feedback:Feedback):Observable<any>{
    this.requestParams = new HttpParams().set('userId', localStorage.getItem('userId'));
    return this.http.post(this.backendUrl+"/feedback",feedback, {params:this.requestParams});
  }

  public getAllFeedbacksByUserId(userId):Observable<any>{
    console.log(userId);
    return this.http.get(this.backendUrl+"/feedback/user/"+userId);
  }

  public deleteFeedback(feedbackId:string):Observable<any>{
    return this.http.delete(this.backendUrl+"/feedback/"+feedbackId);
  }

  public getFeedbacks():Observable<any>{
    return this.http.get(this.backendUrl+"/feedback");
  }
}
