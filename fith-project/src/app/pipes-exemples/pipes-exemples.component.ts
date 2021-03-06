import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-pipes-exemples',
  templateUrl: './pipes-exemples.component.html',
  styleUrls: ['./pipes-exemples.component.css']
})
export class PipesExemplesComponent implements OnInit {

  info:any={
    nome:'Caio',
    dataNasc: new Date(1995,5,27),
    idade:26,
    cpf:'7894561264',
    endereco:'Rua fake, não vem perto',
    nota:5.5847,
    saldo:65.78
  }
  courses:String[]=[
    "Angular",
    "Java"
  ]
  
  filter:String;

  addCourse(newCourse:String){
    this.courses.push(newCourse);
  }
  filterCourses(){
    if (this.courses.length === 0 || this.filter === undefined
      || this.filter.trim()==''){
      
      return this.courses;
    }else{
      return this.courses.filter(v=>{
        if(v.toLocaleLowerCase().indexOf(this.filter.toLowerCase()) >=0){
           return true;

        }else{
          return false;
        }
      })
    }
  }

  valorAsync= new Promise((resolve,reject)=>{
    setTimeout(()=>{resolve('ValorAssincrono')
  },2000)
  });

  constructor() { }

  ngOnInit(): void {
  }

}
