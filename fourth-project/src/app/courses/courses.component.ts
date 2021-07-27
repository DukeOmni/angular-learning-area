import { Component, OnInit } from '@angular/core';

import { CoursesService } from './course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  providers:[CoursesService]
})
export class CoursesComponent implements OnInit {

  courses:String[]=[];
  constructor(private courseService:CoursesService) { 
  }
  
  ngOnInit(): void {
    this.courses=this.courseService.getcourses();
    CoursesService
    .globalNewCourse
    .subscribe(course=>console.log('Im from coursesComponent and the new course is:'+course))
  }

}
