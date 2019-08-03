import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailMinumanHomeComponent } from './detail-minuman-home/detail-minuman-home.component';


const routes: Routes = [
  {
    path: '',
    component: DetailMinumanHomeComponent
  },
  {
    path: '**',
    redirectTo: '/detail-resep',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailMinumanRoutingModule { }
