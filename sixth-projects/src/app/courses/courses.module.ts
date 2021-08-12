import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesComponent } from './courses.component';
import { CoursesDetalComponent } from './courses-detal/courses-detal.component';
import { CourseNotFoundComponent } from './course-not-found/course-not-found.component';
import { CoursesService } from './courses.service';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import { CoursesRoutingModule } from './courses.routing.module';



@NgModule({
  declarations: [
    CoursesDetalComponent,
    CoursesComponent,
    CourseNotFoundComponent

  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatListModule
  ],
  providers:[CoursesService]
})
export class CoursesModule { }
