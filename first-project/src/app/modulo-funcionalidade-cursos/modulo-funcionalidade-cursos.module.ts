import { CursosServiceService } from './cursos-service.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosComponent } from './cursos.component';
import { CursosPrivateComponent } from './cursos-private/cursos-private.component';



@NgModule({
  declarations: [CursosComponent, CursosPrivateComponent],
  imports: [
    CommonModule
  ],
  exports:[
    CursosComponent
  ],
  providers:[
    CursosServiceService
  ]
})
export class ModuloFuncionalidadeCursosModule { }
