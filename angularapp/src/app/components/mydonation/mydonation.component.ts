import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Donation } from 'src/app/models/donation.model';
import { User } from 'src/app/models/user.model';
import { DonationService } from 'src/app/services/donation.service';

@Component({
  selector: 'app-mydonation',
  templateUrl: './mydonation.component.html',
  styleUrls: ['./mydonation.component.css']
})
export class MydonationComponent implements OnInit {
  donations:any[]=[];
  userId:string =localStorage.getItem('userId');
  donation:Donation;
  selectedDonation:Donation=null;
  emptyMsg:string;
  isLoading:boolean = true;
  constructor(private donationService:DonationService) {
  }

  ngOnInit(): void {
    this.getDonationsByUserId();
  }
  
  public getDonationsByUserId(){
    return this.donationService.getDonationsByUserId(this.userId).subscribe(data=>{
      this.donations=data;
      this.isLoading =false;
      console.log(JSON.stringify(data));
      if(this.donations.length === 0){
        this.emptyMsg = "Oops! no record found";
      }
    });
  }

  public getDonationById(donationId:number){
    return this.donationService.getDonationById(donationId).subscribe(data=>{this.donation=data});
  }

  public showCharity(donation:Donation){
    this.selectedDonation = donation;
  }

  
}
