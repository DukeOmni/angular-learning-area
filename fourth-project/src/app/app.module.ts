import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input'; 
import {MatFormFieldModule} from '@angular/material/form-field';
import { CoursesModule } from './courses/courses.module';
import { CreateCoursesModule } from './create-courses/create-courses.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    CoursesModule,
    CreateCoursesModule
  ],
  providers: [
    // CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
