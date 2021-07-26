import { Injectable } from "@angular/core";

@Injectable()
export class CoursesService{
    private courses:String[]=['Angular 2','Java','Jasmine']
    constructor(){
        console.log("I'm a new instance of coursesService!")
    }
    getcourses(){
        return this.courses
    } 
    addcourses(course:String){
        this.courses.push(course);
    }
}