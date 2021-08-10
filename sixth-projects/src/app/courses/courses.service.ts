import { Injectable } from '@angular/core';

@Injectable()
export class CoursesService {


  constructor() { }

  getCourses(){
    return [{id:1,nome:'Java'},
            {id:2,nome:'Angular2+'},
            {id:3,nome:'Classic Angular'}]
  }
  getCoursesbyId(id:number){
    let cursos= this.getCourses();
    for (let index = 0; index < cursos.length; index++) {
      if (id==cursos[index].id) {
        return cursos[index];
      }
    }
    return null;
  }
}
