import { Component,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  onEmmit(event){
    console.log(event);
  }
  title = 'data-biding';
}
