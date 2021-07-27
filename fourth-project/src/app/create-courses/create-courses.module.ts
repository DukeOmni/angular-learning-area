import { CoursesService } from './../courses/course.service';
import { CreateCoursesComponent } from './create-courses.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input'; 
import {MatFormFieldModule} from '@angular/material/form-field';

import { CrossServiceComponent } from '../cross-service/cross-service.component';

@NgModule({
  declarations: [
    CreateCoursesComponent,
    CrossServiceComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule
  ],
  exports:[
    CreateCoursesComponent
  ]
})
export class CreateCoursesModule { }
