import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
   user ={
     id:String,
     firstName:String,
     lastName:String,
     age:Number,
     login:String,
     password:String,
     isDeleted:Boolean
   }
  constructor() { }

  ngOnInit(): void {
  }

}
