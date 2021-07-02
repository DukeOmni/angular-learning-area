import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-output-properties',
  templateUrl: './output-properties.component.html',
  styleUrls: ['./output-properties.component.css']
})
export class OutputPropertiesComponent implements OnInit {

  constructor() { }
  @Input()countMe:number=0;
  @Output()mudarValor=new EventEmitter();

  increment(){
    this.countMe++;
    this.mudarValor.emit({mudarValor: this.countMe});
   }
  decrement(){
    this.countMe--;
    this.mudarValor.emit({mudarValor: this.countMe}); 

  }
  ngOnInit(): void {
  }

}
