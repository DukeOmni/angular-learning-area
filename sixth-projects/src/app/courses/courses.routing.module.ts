import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";


import { CoursesComponent } from './courses.component';
import { CoursesDetalComponent } from "./courses-detal/courses-detal.component";
import { CourseNotFoundComponent } from "./course-not-found/course-not-found.component";

const CoursesRoutes: Routes=[
    { path:'curso/:id', component:CoursesDetalComponent},
    { path:'not-found', component:CourseNotFoundComponent},
    { path:'cursos', component:CoursesComponent}
]
@NgModule({
    imports:[
        RouterModule.forChild(CoursesRoutes)
    ],
    exports:[RouterModule]
})
export class CoursesRoutingModule{
}