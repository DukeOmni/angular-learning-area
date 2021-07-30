import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-exemples',
  templateUrl: './pipes-exemples.component.html',
  styleUrls: ['./pipes-exemples.component.css']
})
export class PipesExemplesComponent implements OnInit {

  info:any={
    nome:'Caio',
    dataNasc: new Date(1995,5,27),
    idade:26,
    cpf:'7894561264',
    endereco:'Rua fake, não vem perto',
    nota:5.5847,
    saldo:65.78
  }

  constructor() { }

  ngOnInit(): void {
  }

}
