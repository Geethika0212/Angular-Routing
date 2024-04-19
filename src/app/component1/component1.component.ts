import { Component} from '@angular/core';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component {

  title = "pract";
  Value=0;
  
  

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
  
  }


