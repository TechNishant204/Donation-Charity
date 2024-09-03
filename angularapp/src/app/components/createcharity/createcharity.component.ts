import { JsonPipe } from '@angular/common';
import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Charity } from 'src/app/models/charity.model';
import { CharityService } from 'src/app/services/charity.service';

@Component({
  selector: 'app-createcharity',
  templateUrl: './createcharity.component.html',
  styleUrls: ['./createcharity.component.css']
})
export class CreatecharityComponent implements OnInit {

  charityForm:FormGroup;

  charityId:number;

  successMsg:string = "";
  
  
  newCharity:Charity = {
    charityName: "",
    founder: "",
    description: "",
    status: "",
  };

  selectedCharity:Charity=null;
  
  constructor(private service:CharityService,private router: Router,private builder:FormBuilder, private active: ActivatedRoute) {
    this.charityForm = builder.group({
      charityName: builder.control("",Validators.required),
      founder: builder.control("",Validators.required),
      description: builder.control("",Validators.required),
      creationDate: new Date(),
      status: builder.control("",Validators.required),
    });
  }
  ngOnInit(): void {
    this.charityId = this.active.snapshot.params['id'];
    console.log(this.charityId);
    if(this.charityId !== undefined){
      this.getCharityById();
    }
  }

  public get charityName(){
    return this.charityForm.get("charityName");
  }
  
  public get founder(){
    return this.charityForm.get("founder");
  }

  public get description(){
    return this.charityForm.get("description");
  }

  public get creationDate(){
    return this.charityForm.get("creationDate");
  }

  public get status(){
    return this.charityForm.get("status");
  }

  public addCharity(){
    if(this.charityForm.valid){
      if(!this.selectedCharity){
        this.newCharity=this.charityForm.value;
        this.service.addCharity(this.newCharity).subscribe(data=>{
          this.charityForm.reset();
          this.newCharity=null;
          this.successMsg = "Charity added successfully.";
        },error=>document.getElementById("charity-error").innerHTML="*"+error.error+"!!!");
      }
    }
  }
  
  public getCharityById(){
    this.service.getCharitybyId(this.charityId).subscribe(data => {
      this.selectedCharity = data;
      this.newCharity = {...data};
    })
  }
  
  public updateCharity(){
    this.newCharity.creationDate=this.selectedCharity.creationDate;
    this.service.updateCharity(this.charityId, this.newCharity).subscribe(data=>{
      this.selectedCharity=null;
      this.newCharity=null;
      this.successMsg = "Updated Successfully.";
      this.router.navigate(['/admincharity']);
    })
  }

}