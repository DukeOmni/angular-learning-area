import { CoursesService } from './../courses/courses.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-courses-detal',
  templateUrl: './courses-detal.component.html',
  styleUrls: ['./courses-detal.component.css']
})
export class CoursesDetalComponent implements OnInit {
  id:number;
  course:any;
  sub:Subscription;

  constructor(private routes:ActivatedRoute,
              private router:Router,
              private coursesService:CoursesService) { 
    console.log(this.routes);

  }

  ngOnInit(): void {
    this.sub=this.routes.params.subscribe((params:any)=>{
      this.id=params['id'];
      this.course=this.coursesService.getCoursesbyId(this.id);
      if (this.course==null) {
        this.router.navigate(['/not-found'])
      }
    });
  }
  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}
