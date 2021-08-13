import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudantsComponent } from './studants.component';
import { StudantsRoutingModule } from './studants.routing.module';
import { StudantsFormComponent } from './studants-form/studants-form.component';
import { StudantsDetailComponent } from './studants-detail/studants-detail.component';



@NgModule({
  declarations: [StudantsComponent, StudantsFormComponent, StudantsDetailComponent],
  imports: [
    CommonModule,
    StudantsRoutingModule
  ]
})
export class StudantsModule { }
