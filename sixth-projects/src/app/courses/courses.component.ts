import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses:any[];
  queryParamsub:Subscription;
  constructor(private coursesService:CoursesService,
              private activatedRoute:ActivatedRoute) { 
  }
  
  ngOnInit(): void {
    this.courses=this.coursesService.getCourses()
    let temp
    this.queryParamsub=this.activatedRoute.queryParams.subscribe((test:any)=>{
      temp=test['pagina']
    });
    console.log(`Aqui está a paginacao ${temp}`);
  }
  ngOnDestroy(){
    console.log('Passei aqui e fui destruido')
    this.queryParamsub.unsubscribe();
  }
}
