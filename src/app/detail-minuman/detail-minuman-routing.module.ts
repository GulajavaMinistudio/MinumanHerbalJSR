import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailMinumanHomeComponent } from './detail-minuman-home/detail-minuman-home.component';
import { ResepAutoimunComponent } from './resep-autoimun/resep-autoimun.component';
import { ResepInfusedwaterComponent } from './resep-infusedwater/resep-infusedwater.component';


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
        path: 'resep-infused-water',
        component: ResepInfusedwaterComponent
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
