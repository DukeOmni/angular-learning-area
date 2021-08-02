import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { DEFAULT_CURRENCY_CODE, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PipesExemplesComponent } from './pipes-exemples/pipes-exemples.component';
import { MyPipePipe } from './pipes-exemples/my-pipe.pipe';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { ArrayFilterPipe } from './pipes-exemples/array-filter.pipe';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';

registerLocaleData(localePt,'pt-BR');

@NgModule({
  declarations: [
    AppComponent,
    PipesExemplesComponent,
    MyPipePipe,
    ArrayFilterPipe
  ],
  imports: [
    BrowserModule,
    MatInputModule,
    MatButtonModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' },    
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' }    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
