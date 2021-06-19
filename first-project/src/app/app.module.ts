import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ModuloFuncionalidadeCursosModule } from './modulo-funcionalidade-cursos/modulo-funcionalidade-cursos.module';
import { FirstComponent } from './first-component/first-component';
import { FirstComponentNgComponent } from './first-component-ng/first-component-ng.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    FirstComponentNgComponent
  ],
  imports: [
    BrowserModule,
    ModuloFuncionalidadeCursosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
