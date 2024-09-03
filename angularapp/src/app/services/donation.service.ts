import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Donation } from '../models/donation.model';

@Injectable({
  providedIn: 'root'
})
export class DonationService {
  backendUrl=environment.backendUrl;
  httpParam:any;
  constructor(private httpClient:HttpClient) { }

  public getAllDonations():Observable<any>{
    return this.httpClient.get(this.backendUrl+"/donations");
  }

  public getDonationById(donationId:number):Observable<any>{
    return this.httpClient.get(this.backendUrl+"/donations/"+donationId);
  }

  public addDonation(userId:string, charityId:string, donation:Donation):Observable<any>{
    this.httpParam = new HttpParams().set("userId", userId).set("charityId", charityId);
    console.log("service");
    return this.httpClient.post(this.backendUrl+"/donations", donation, {params: this.httpParam});
  }

  public getDonationsByUserId(userId:string):Observable<any>{
    return this.httpClient.get(this.backendUrl+"/donations/user/"+userId);
  }

  public getDonationsByCharityId(charityId:number):Observable<any>{
    return this.httpClient.get(this.backendUrl+"/donations/charity/"+charityId);
  }
  
}
