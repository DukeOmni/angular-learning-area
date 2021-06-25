import { MatSelectModule } from '@angular/material/select';
import { NgModule } from '@angular/core';
import { StylebidingComponent } from './stylebiding/stylebiding.component';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DatabidingComponent } from './databiding/databiding.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    DatabidingComponent,
    StylebidingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
