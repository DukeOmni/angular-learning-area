import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-courses-detal',
  templateUrl: './courses-detal.component.html',
  styleUrls: ['./courses-detal.component.css']
})
export class CoursesDetalComponent implements OnInit {
  id:String;
  sub:Subscription;

  constructor(private routes:ActivatedRoute) { 
    console.log(this.routes);

  }

  ngOnInit(): void {
    this.sub=this.routes.params.subscribe((params:any)=>{
      this.id=params['id'];
    });
  }
  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}
