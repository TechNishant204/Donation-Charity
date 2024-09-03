import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Charity } from 'src/app/models/charity.model';
import { CharityService } from 'src/app/services/charity.service';
import { DonationService } from 'src/app/services/donation.service';

@Component({
  selector: 'app-userviewcharity',
  templateUrl: './userviewcharity.component.html',
  styleUrls: ['./userviewcharity.component.css']
})
export class UserviewcharityComponent implements OnInit {

  charities:Charity[]=[];
  donationForm:FormGroup;
  displayDonationForm:boolean = false;
  selectedCharity:Charity;
  successMsg:string;
  isLoading:boolean = true;
  emptyMsg:string;
  constructor(private donationService:DonationService,private charityService:CharityService,private builder:FormBuilder) {
    this.donationForm=builder.group({
      donationDate:new Date(),
      amount:builder.control("",[Validators.required, Validators.min(100)]),
    })
  }
  public get amount(){
    return this.donationForm.get("amount");
  }

  public addDonation(){
    if(this.donationForm.valid){
      console.log("called service");
      this.donationService.addDonation(localStorage.getItem("userId"), ""+this.selectedCharity.charityId, this.donationForm.value).subscribe(data => {
        this.successMsg = "Donated Successfully";
      });
    } 
  }

  public getAllCharities(){
    this.charityService.getAllCharities().subscribe(data=>{
      this.charities=data.filter(charity => charity.status === "Active");
      this.isLoading =false;
      if(this.charities.length === 0){
        this.emptyMsg = "Oops! no record found";
      }
    })
  }
  
  donateCharity(charity:Charity)
  {
    this.selectedCharity = charity;
    this.displayDonationForm = true;
    console.log(JSON.stringify(this.selectedCharity))
  }
  
  closeDonationForm()
  {
    this.selectedCharity = null;
    this.displayDonationForm = false;
  }

  searchTitle:string='';
  searchCharity(){
    if(this.searchTitle.trim().length!=0){
      this.charities=this.charities.filter(p=>{
        return p.charityName.toLowerCase().includes(this.searchTitle.toLowerCase());
      })
    }else{
      this.getAllCharities();
    }
  }
  
  ngOnInit(): void {
    this.getAllCharities();
  }

}
