import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component {

  title = "pract";
  Value=0;
  display=""
  

  addNumber(){
    this.Value=this.Value+2
  }
  addNumber2(){
    this.Value=this.Value+4
  }
  subNumber(){
    this.Value=this.Value-2
  }
  subNumber2(){
    this.Value=this.Value-4
  }
  clear(){
    this.display="";
    this.Value=0
  }
  }
