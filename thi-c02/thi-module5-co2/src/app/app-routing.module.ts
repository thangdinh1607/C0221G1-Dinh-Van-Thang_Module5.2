import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PatientListComponent} from './patient/patient-list/patient-list.component';
import {PatientEditComponent} from './patient/patient-edit/patient-edit.component';


const routes: Routes = [
  {
    path: 'patient/list', component: PatientListComponent
  },
  {
    path: 'patient/edit/:id', component: PatientEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
