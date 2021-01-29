import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.css']
})
export class EmpDetailsComponent implements OnInit {  
  

  constructor() {    
  }

   employees = [
    {
      name: "Employee One",
      age: 40,
      email: "one@gmail.com",
      departments: ["Computer", "Physics"],
    },
    {
      name: "Employee Two",
      age: 10,
      email: "Two@gmail.com",
      departments: ["Computer"],
    },
    {
      name: "Employee Three",
      age: 10,
      email: "Three@gmail.com",
      departments: ["Physics", "Chemistry"],
    },
    {
      name: "Employee Four",
      age: 60,
      email: "Four@gmail.com",
      departments: ["Chemistry", "Physics"],
    },
    {
      name: "Employee Five",
      age: 70,
      email: "Five@gmail.com",
      departments: ["Computer", "Physics", "Chemistry"],
    },
    {
      name: "Employee Six",
      age: 70,
      email: "Six@gmail.com",
      departments: ["Computer", "Physics"],
    },
    
  ];
 
 public empDetail : any;
//  empdetails property of type any
 public searchinput :any;
//  search input property of type any
 public filterInput :any;
// filterinput property of type any

  ngOnInit() {
    this.empDetails();
  }

  empDetails(){
  this.empDetail = this.employees
  }

// ------------------method for department----------------- 
  changeDepartment(e){
    this.filterInput = e
    console.log("test")
    console.log(e)   
  }
// -------------------------------------------------------------

// ------------------sorting---------------------------------------
  sortBy(e){

    console.log(e)
    if(e=="A-Z"){
      return this.empDetail.sort((a,b)=> (a.name > b.name)? 1 : -1)
     
    }else if(e=="Z-A"){
    
     return this.empDetail.sort((a,b)=> (a.name < b.name ) ? 1 : -1)
     
    }
    
  }
// ----------------------------------------------------------------------

// ----------------search button-----------------------------------------
  Serach(){
    console.log('searchinput', this.searchinput)
   if(this.searchinput == null){
    this.empDetails();
   }
   this.filterInput = this.searchinput

    
  // -----------------------------------------------------------------------
   
  }
  reset(){
    this.filterInput = '';
    this.empDetails();
  }
}
