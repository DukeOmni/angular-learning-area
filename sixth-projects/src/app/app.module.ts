import { AppRoutingModule } from './app.routing.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CoursesModule } from './courses/courses.module';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import { CoursesRoutingModule } from './courses/courses.routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    CoursesModule,
    BrowserModule,
    NoopAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    AppRoutingModule,
    CoursesRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
