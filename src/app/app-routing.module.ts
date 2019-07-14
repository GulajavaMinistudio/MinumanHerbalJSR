import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'daftar-resep',
    loadChildren: () => import('./list-minuman/list-minuman.module').then(module => module.ListMinumanModule)
  },
  {
    path: '',
    redirectTo: '/daftar-resep',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/daftar-resep',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
