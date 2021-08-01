import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
  // interface Person {
  //   id?: number,
  //   age?: number,
  //   gender?: string,
  //   occupation?: string,
  // },
  
  public  user1={
    id:1,
    firstName:"prasad",
    lastName:"reddy",
    age:23
    
};
user2={
  id:2,
  firstName:"prasad",
  lastName:"reddy",
  age:24
};
user3={
  id:3,
  firstName:"prasad",
  lastName:"reddy",
  age:25
};
user4={
  id:4,
  firstName:"prasad",
  lastName:"reddy",
  age:26
}
user5={
  id:5,
  firstName:"prasad",
  lastName:"reddy",
  age:27
}
user6={
  id:6,
  firstName:"prasad",
  lastName:"reddy",
  age:28
}
user7={
  id:7,
  firstName:"prasad",
  lastName:"reddy",
  age:29
}
user8={
  id:8,
  firstName:"prasad",
  lastName:"reddy",
  age:30
}

user9={
  id:9,
  firstName:"prasad",
  lastName:"reddy",
  age:31
}
  constructor() { 
    this.one();
    this.two();
    this.three();
    this.four();
    this.five();
    

  }

  ngOnInit(): void {
                   }
   one(){
   
  console.log("geting value", this.user1);
     return this.user1;
    }
    two(){
      console.log("geting value", this.user2);
      return this.user2;
    }
     three(){
      console.log("geting value", this.user3);
     return this.user3;
     }
     four(){
      console.log("geting value", this.user4);
     return this.user4;
     }
     five(){
      console.log("geting value", this.user5);
      return this.user5;
     }
     
}
