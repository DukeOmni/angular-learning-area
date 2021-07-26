import { CoursesService } from './../courses/course.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-courses',
  templateUrl: './create-courses.component.html',
  styleUrls: ['./create-courses.component.css']
})
export class CreateCoursesComponent implements OnInit {

  courses:String[]=[]
  constructor(private courseService:CoursesService) { }

  ngOnInit(): void {
    this.courses=this.courseService.getcourses();
  }
  newCourse(newCourse:String){
    this.courseService.addcourses(newCourse);
  }

}
