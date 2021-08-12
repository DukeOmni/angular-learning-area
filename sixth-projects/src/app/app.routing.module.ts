import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';

import { CoursesModule } from "./courses/courses.module";
import { CoursesDetalComponent } from "./courses/courses-detal/courses-detal.component";
import { CourseNotFoundComponent } from "./courses/course-not-found/course-not-found.component";

const appRoutes: Routes=[
    { path:'', component:HomeComponent},
    { path:'login', component:LoginComponent},
    { path:'curso/:id', component:CoursesDetalComponent},
    { path:'not-found', component:CourseNotFoundComponent},
    { path:'cursos', component:CoursesComponent}
]
@NgModule({
    imports:[
        CoursesModule,
        RouterModule.forRoot(appRoutes)
    ],
    exports:[RouterModule]
})
export class AppRoutingModule{
}