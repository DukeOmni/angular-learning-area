import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-courses-detal',
  templateUrl: './courses-detal.component.html',
  styleUrls: ['./courses-detal.component.css']
})
export class CoursesDetalComponent implements OnInit {
  id:String;

  constructor(private routes:ActivatedRoute) { 
    console.log(this.routes);
    this.id=this.routes.snapshot.params['id'];
  }

  ngOnInit(): void {
  }

}
