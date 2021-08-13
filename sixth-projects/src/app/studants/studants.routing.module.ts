import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StudantsComponent } from './studants.component';


const appRoutes: Routes=[
  { path:'studants', component:StudantsComponent},

]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes)
  ],
  exports:[RouterModule]
})
export class StudantsRoutingModule { }
