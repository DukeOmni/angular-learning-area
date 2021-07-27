import { CoursesService } from './../courses/course.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cross-service',
  templateUrl: './cross-service.component.html',
  styleUrls: ['./cross-service.component.css']
})
export class CrossServiceComponent implements OnInit {

  constructor(private coursesService:CoursesService) { }

  ngOnInit(): void {
    this.coursesService.emitNewCourse.subscribe(course=>console.log(course))
  }

}
