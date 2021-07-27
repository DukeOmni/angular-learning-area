import { CoursesService } from './course.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';

import { MatButtonModule } from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input'; 
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    CoursesComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule
  ],
  exports:[CoursesComponent]
})
export class CoursesModule { }
