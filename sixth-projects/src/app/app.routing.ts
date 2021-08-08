import { RouterModule, Routes } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursesDetalComponent } from "./courses-detal/courses-detal.component";

const APP_ROUTES: Routes=[
    { path:'', component:HomeComponent},
    { path:'login', component:LoginComponent},
    { path:'curso/:id', component:CoursesDetalComponent},
    { path:'cursos', component:CoursesComponent}
]
export const routing: ModuleWithProviders  = RouterModule.forRoot(APP_ROUTES);