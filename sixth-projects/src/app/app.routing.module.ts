import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CoursesModule } from "./courses/courses.module";
import { StudantsRoutingModule } from "./studants/studants.routing.module";

const appRoutes: Routes=[
    { path:'', component:HomeComponent},
    { path:'login', component:LoginComponent},

]
@NgModule({
    imports:[
        CoursesModule,
        StudantsRoutingModule,
        RouterModule.forRoot(appRoutes)
    ],
    exports:[RouterModule]
})
export class AppRoutingModule{
}