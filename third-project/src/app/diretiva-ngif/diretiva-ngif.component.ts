import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngif',
  templateUrl: './diretiva-ngif.component.html',
  styleUrls: ['./diretiva-ngif.component.css']
})
export class DiretivaNgifComponent implements OnInit {
  isPressed:Boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

  switchButton(){
    this.isPressed=!this.isPressed;
}
}