import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListResepMinumanComponent } from './list-resep-minuman/list-resep-minuman.component';


const routes: Routes = [
  {
    path: '',
    component: ListResepMinumanComponent
  },
  {
    path: '**',
    redirectTo: '/daftar-resep',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListMinumanRoutingModule { }
