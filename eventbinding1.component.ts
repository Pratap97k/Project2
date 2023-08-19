import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding1',
  templateUrl: './eventbinding1.component.html',
  styleUrls: ['./eventbinding1.component.css']
})
export class Eventbinding1Component implements OnInit {
  count:number=0;
  constructor() { }
  ngOnInit(): void {
  }

 onClick(){
    if(this.count==0){
    console.log("Meet my coolest bro..")
    this.count++;
    }
    
  }

  onImage(){
    console.log("on Image click...")
  }

  onDollerEvent(myevent:any){
    console.log(myevent);
    console.log(myevent.target.value);
  }

  
  

}
