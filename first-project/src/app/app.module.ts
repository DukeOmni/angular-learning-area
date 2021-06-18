import { FirstComponent } from './first-component/first-component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstComponentNgComponent } from './first-component-ng/first-component-ng.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    FirstComponentNgComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
