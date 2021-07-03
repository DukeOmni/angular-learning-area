import { Component,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lifeCycleValue:number=5;
  alive:boolean=true;
  onEmmit(event){
    console.log(event);
  }
  changeValor(){
    this.lifeCycleValue++;
  }
  kill(){
    this.alive=!this.alive
  }
  title = 'data-biding';
}
