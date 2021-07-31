import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
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
  age:23
};
user3={
  id:3,
  firstName:"prasad",
  lastName:"reddy",
  age:23
};
user4={
  id:4,
  firstName:"prasad",
  lastName:"reddy",
  age:23
}
user5={
  id:5,
  firstName:"prasad",
  lastName:"reddy",
  age:23
}
user6={
  id:6,
  firstName:"prasad",
  lastName:"reddy",
  age:23
}
user7={
  id:7,
  firstName:"prasad",
  lastName:"reddy",
  age:23
}
user8={
  id:8,
  firstName:"prasad",
  lastName:"reddy",
  age:23
}

user9={
  id:9,
  firstName:"prasad",
  lastName:"reddy",
  age:23
}
  constructor() { }

  ngOnInit(): void {
  }
    one(){
     return this.user1;
    }
    two(){
      return this.user2.id;
      return this.user2.firstName;
      return this.user2.lastName;
     }
     three(){
      return this.user1.id;
      return this.user1.firstName;
      return this.user1.lastName;
     }
     four(){
      return this.user1.id;
      return this.user1.firstName;
      return this.user1.lastName;
     }
     five(){
      return this.user1.id;
      return this.user1.firstName;
      return this.user1.lastName;
     }
     
    }
