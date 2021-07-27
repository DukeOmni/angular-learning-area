import { Injectable,EventEmitter } from "@angular/core";

@Injectable()
export class CoursesService{
    static globalNewCourse= new EventEmitter<String>();
    emitNewCourse = new EventEmitter<String>();
    private courses:String[]=['Angular 2','Java','Jasmine']
    constructor(){
        console.log("I'm a new instance of coursesService!")
    }
    getcourses(){
        return this.courses
    } 
    addcourses(course:String){
        this.courses.push(course);
        this.emitNewCourse.emit(course)
        CoursesService.globalNewCourse.emit(course)
    }
}