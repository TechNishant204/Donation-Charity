import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loginhome',
  templateUrl: './loginhome.component.html',
  styleUrls: ['./loginhome.component.css']
})
export class LoginhomeComponent implements OnInit {

  role:string = null;

  username:string = localStorage.getItem('username');

  constructor() { }

  ngOnInit(): void {
    this.role = localStorage.getItem('role');
  }

}
