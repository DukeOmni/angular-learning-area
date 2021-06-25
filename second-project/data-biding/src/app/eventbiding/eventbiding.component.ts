import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbiding',
  templateUrl: './eventbiding.component.html',
  styleUrls: ['./eventbiding.component.css']
})
export class EventbidingComponent implements OnInit {
  inputValue:String;
  inputBuffer:String;
  isMouseOver:Boolean = false;
  constructor() { }
  onKeyUp(evento:KeyboardEvent){
    this.inputValue=(<HTMLInputElement>evento.target).value;
    console.log(evento)
  }
  saveInput(event){
    this.inputBuffer=event
  }
  mouseEvent(event:MouseEvent){
    console.log(event)
    this.isMouseOver=!this.isMouseOver;
  }
  ngOnInit(): void {
  }

}
