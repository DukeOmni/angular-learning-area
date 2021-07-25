import { Component, OnInit } from '@angular/core';

import { CoursesService } from './course.service';



@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses:String[]=[];
  constructor(private courseService:CoursesService) { 
    this.courseService= new CoursesService();
  }
  
  ngOnInit(): void {
    this.courses=this.courseService.getcourses();
  }

}
