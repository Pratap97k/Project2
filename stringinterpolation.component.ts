import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stringinterpolation',
  templateUrl: './stringinterpolation.component.html',
  styleUrls: ['./stringinterpolation.component.css']
})
export class StringinterpolationComponent implements OnInit {
  name:string='Mayur Dada';
  num:number=4;
  imgUrl:string='../../assets/dadu.jpg';

  constructor() { }

  ngOnInit(): void {
  }
  onSend(myinput:any)
  {
    console.log(myinput);
    console.log(myinput.value)
    myinput.style.background='red';
    myinput.style.color='white';
  }

}
