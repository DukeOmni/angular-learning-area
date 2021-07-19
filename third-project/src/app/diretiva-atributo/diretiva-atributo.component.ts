import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-atributo',
  templateUrl: './diretiva-atributo.component.html',
  styleUrls: ['./diretiva-atributo.component.css']
})
export class DiretivaAtributoComponent implements OnInit {

  isFavored:Boolean=false;
  courses:object[]=[{course:'Angular',favored:true},
                    {course:'Angular-Cli',favored:false},
                    {course:'Angular Js',favored:false}]
  constructor() { }
  ngOnInit(): void {
  }
  changeFavoredStatus(){
    this.isFavored=!this.isFavored;
  }

}
