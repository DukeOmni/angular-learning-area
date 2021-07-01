import { MatSelectModule } from '@angular/material/select';
import { NgModule } from '@angular/core';
import { StylebidingComponent } from './stylebiding/stylebiding.component';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DatabidingComponent } from './databiding/databiding.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { EventbidingComponent } from './eventbiding/eventbiding.component';
import { TwoAwayDatabidingComponent } from './two-away-databiding/two-away-databiding.component';
import { FormsModule } from '@angular/forms';
import { InputPropertiesComponent } from './input-properties/input-properties.component';

@NgModule({
  declarations: [
    AppComponent,
    DatabidingComponent,
    StylebidingComponent,
    EventbidingComponent,
    TwoAwayDatabidingComponent,
    InputPropertiesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
