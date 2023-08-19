import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding2',
  templateUrl: './eventbinding2.component.html',
  styleUrls: ['./eventbinding2.component.css']
})
export class Eventbinding2Component implements OnInit {
  result:number=0;
  result1:number=0;
  result2:number=0;
  result3:number=0;
  constructor()
   {

   }

  ngOnInit(): void
   {
   }
  onSend(myinput:any)
  {
    console.log(myinput);
    console.log(myinput.value)
    myinput.style.background='red';
    myinput.style.color='white';
  }
  
  onSend1(myvalue:any)
  {
      console.log(myvalue);
  }

  onAddition(num1:any,num2:any)
  {
    
    let n1=+num1;
    let n2=+num2;
     this.result=n1+n2;
  }
  onSubstraction(num3:any,num4:any)
  {
    
    let n3=+num3;
    let n4=+num4;
    this.result1=n3-n4;
  }
  onDivision(num5:any,num6:any)
  {
    
    let n1=+num5;
    let n2=+num6;
     this.result2=n1 / n2;
  }
  onMultiplication(num7:any,num8:any)
  {
    
    let n1=+num7;
    let n2=+num8;
     this.result3=n1*n2;
  }

  onChange(myname:any)
  {
    console.log("Change event Occur...");
    myname.style.background='red';
    myname.style.color='white';
  }


}


