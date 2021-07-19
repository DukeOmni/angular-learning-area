import { Component, OnInit,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngstyle',
  templateUrl: './diretiva-ngstyle.component.html',
  styleUrls: ['./diretiva-ngstyle.component.css']
})
export class DiretivaNgstyleComponent implements OnInit {

  ativo:Boolean=true;
  constructor() { }

  ngOnInit(): void {
  }
  toggleNightMode(evento:MouseEvent){
    this.ativo=!this.ativo;
    console.log(evento)
  }

}
