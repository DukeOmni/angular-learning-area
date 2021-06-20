import { Injectable } from '@angular/core';

@Injectable()
export class CursosServiceService {

  constructor() { }

  getCursos(){
    return ['Java', 'angular', 'node'];
  }
}
