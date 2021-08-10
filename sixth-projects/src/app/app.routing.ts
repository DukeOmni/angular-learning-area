import { RouterModule, Routes } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursesDetalComponent } from "./courses-detal/courses-detal.component";
import { CourseNotFoundComponent } from "./course-not-found/course-not-found.component";

const APP_ROUTES: Routes=[
    { path:'', component:HomeComponent},
    { path:'login', component:LoginComponent},
    { path:'curso/:id', component:CoursesDetalComponent},
    { path:'not-found', component:CourseNotFoundComponent},
    { path:'cursos', component:CoursesComponent}
]
export const routing: ModuleWithProviders  = RouterModule.forRoot(APP_ROUTES);