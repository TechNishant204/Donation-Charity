import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Charity } from '../models/charity.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CharityService {

  // backendUrl = "https://8080-baafbeadffbbbababddfceeacfaf.premiumproject.examly.io/api";
  backendUrl=environment.backendUrl + "/charities";

  constructor(private http:HttpClient) { }

  public getAllCharities():Observable<any>{
    return this.http.get(this.backendUrl);
  }

  public getCharitybyId(charityId:number):Observable<any>{
    return this.http.get(this.backendUrl + "/" + charityId);
  }

  public addCharity(charity:Charity):Observable<any>{
    return this.http.post(this.backendUrl, charity);
  }

  public updateCharity(charityId:number, charity:Charity):Observable<any>{
    return this.http.put(this.backendUrl + "/" + charityId, charity);
  }

  public deleteCharity(charityId:number):Observable<any>{
    return this.http.delete(this.backendUrl + "/" + charityId);
  }

  
}
