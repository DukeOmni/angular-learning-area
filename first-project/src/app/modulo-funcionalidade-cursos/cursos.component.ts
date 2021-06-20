import { Component, OnInit } from '@angular/core';
import { CursosServiceService } from './cursos-service.service';
@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  nomePortal:String
  cursos:String[]
  constructor(private service:CursosServiceService) {
    this.nomePortal='Placeholder'
    this.cursos=this.service.getCursos();
   }

  ngOnInit(): void {
  }

}
