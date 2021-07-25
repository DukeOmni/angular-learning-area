import { Injectable } from "@angular/core";

@Injectable()
export class CoursesService{
    getcourses(){
        return ['Angular 2','Java','Jasmine']
    }
}