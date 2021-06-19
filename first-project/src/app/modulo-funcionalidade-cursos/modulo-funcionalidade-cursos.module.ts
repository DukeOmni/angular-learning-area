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
  ]
})
export class ModuloFuncionalidadeCursosModule { }
