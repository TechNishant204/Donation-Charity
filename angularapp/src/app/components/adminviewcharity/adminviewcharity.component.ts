import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Charity } from 'src/app/models/charity.model';
import { CharityService } from 'src/app/services/charity.service';
import { DonationService } from 'src/app/services/donation.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-adminviewcharity',
  templateUrl: './adminviewcharity.component.html',
  styleUrls: ['./adminviewcharity.component.css']
})
export class AdminviewcharityComponent implements OnInit {

  charities:Charity[]=[];

  selectedCharity:Charity;
  isLoading:boolean = true;




  constructor(private service:CharityService,private router:Router, private donationService:DonationService) { }

  ngOnInit(): void {
    this.getAllCharities();
  }

  public getAllCharities(){
    this.service.getAllCharities().subscribe(data=>{
      this.charities=data;
      this.isLoading =false;
    })
  }
  
  public deleteCharity(charityId:number){
    console.log(charityId);
    this.service.deleteCharity(charityId).subscribe(data=>{
      this.getAllCharities();
    },error=>{
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Charity has Active Donors, Can't Delete!",
      });
    });
  }

  public editCharity(charityId:number){
    // this.selectedCharity={...charity};
    this.router.navigate(['/addcharity', charityId]);
    
  }

  public checkDonation(charityId:number){
    this.donationService.getDonationsByCharityId(charityId).subscribe(data=>{
      Swal.fire({
        text: "Total Amount till date: Rs. " + data + " /-",
      });
    });
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

}
