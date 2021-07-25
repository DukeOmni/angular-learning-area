import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';

import { AppComponent } from './app.component';
import { DiretivaNgifComponent } from './diretiva-ngif/diretiva-ngif.component';
import { DiretivaNgswitchComponent } from './diretiva-ngswitch/diretiva-ngswitch.component';
import { DiretivaAtributoComponent } from './diretiva-atributo/diretiva-atributo.component';
import { DiretivaNgstyleComponent } from './diretiva-ngstyle/diretiva-ngstyle.component';
import { ElvisOperatorComponent } from './elvis-operator/elvis-operator.component';
import { NgContentComponent } from './ng-content/ng-content.component';
import { CustomDirectivesComponent } from './custom-directives/custom-directives.component';
import { YelowBackgroundDirective } from './diretives/first-diretive/yelow-background.directive';


@NgModule({
  declarations: [
    AppComponent,
    DiretivaNgifComponent,
    DiretivaNgswitchComponent,
    DiretivaAtributoComponent,
    DiretivaNgstyleComponent,
    ElvisOperatorComponent,
    NgContentComponent,
    CustomDirectivesComponent,
    YelowBackgroundDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatButtonModule,
    MatTabsModule,
    MatIconModule
  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
