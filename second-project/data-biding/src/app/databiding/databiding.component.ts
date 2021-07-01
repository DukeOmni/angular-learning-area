import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databiding',
  templateUrl: './databiding.component.html',
  styleUrls: ['./databiding.component.css']
})
export class DatabidingComponent implements OnInit {
  url:String ='http://google.com'
  name:String='Gaijin-san'
  constructor() { }

  ngOnInit(): void {
  }

}
