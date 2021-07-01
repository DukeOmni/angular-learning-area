import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-away-databiding',
  templateUrl: './two-away-databiding.component.html',
  styleUrls: ['./two-away-databiding.component.css']
})
export class TwoAwayDatabidingComponent implements OnInit {
  inputValue:String="Empty Buffer";
  object:any={
    name:'teste',
    adress:'street 1'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
