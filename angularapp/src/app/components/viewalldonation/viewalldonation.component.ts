import { Component, OnInit } from '@angular/core';
import { Donation } from 'src/app/models/donation.model';
import { DonationService } from 'src/app/services/donation.service';

@Component({
  selector: 'app-viewalldonation',
  templateUrl: './viewalldonation.component.html',
  styleUrls: ['./viewalldonation.component.css']
})
export class ViewalldonationComponent implements OnInit {

  donations:any[]=[];
  constructor(private donationService:DonationService) { }
  isLoading:boolean = true;
  emptyMsg:string;


  ngOnInit(): void {
    this.getAllDonations();
  }

  public getAllDonations(){
    this.donationService.getAllDonations().subscribe(data=>{this.donations=data
    console.log(JSON.stringify(data));
    this.isLoading =false;
    if(this.donations.length === 0){
      this.emptyMsg = "Oops! no record found";
    }
  });
  }

  searchTitle:string='';
  searchDonationByusername(){
    if(this.searchTitle.trim().length!=0){
      this.donations=this.donations.filter(p=>{
        return p.user.username.toLowerCase().includes(this.searchTitle.toLowerCase());
      })
    }else{
      this.getAllDonations();
    }
  }

}
