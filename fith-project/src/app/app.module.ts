import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PipesExemplesComponent } from './pipes-exemples/pipes-exemples.component';
import { MyPipePipe } from './pipes-exemples/my-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PipesExemplesComponent,
    MyPipePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
