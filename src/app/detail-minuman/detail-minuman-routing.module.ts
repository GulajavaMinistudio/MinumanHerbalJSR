import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailMinumanHomeComponent } from './detail-minuman-home/detail-minuman-home.component';
import { ResepAutoimunComponent } from './resep-autoimun/resep-autoimun.component';


const routes: Routes = [
  {
    path: '',
    component: DetailMinumanHomeComponent,
    children: [
      {
        path: 'resep-auto-imun',
        component: ResepAutoimunComponent
      },
      {
        path: '',
        redirectTo: '/resep-auto-imun'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailMinumanRoutingModule { }
