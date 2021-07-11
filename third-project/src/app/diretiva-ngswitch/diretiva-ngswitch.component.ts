import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngswitch',
  templateUrl: './diretiva-ngswitch.component.html',
  styleUrls: ['./diretiva-ngswitch.component.css']
})
export class DiretivaNgswitchComponent implements OnInit {

  constructor() { }
  isAdmin:Boolean=false;
  @Input()profileConfig:String;
  confidentialInfo:Object[]=[
                         {nome:"Luke",adress:"7th street",cpf:"999999999"},
                         {nome:"Caio",adress:"9th street",cpf:"999999999"},
                         {nome:"Vitor",adress:"9th street",cpf:"999999999"}];
  ngOnInit(): void {
  }

}
