import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListMinumanRoutingModule } from './list-minuman-routing.module';
import { ListResepMinumanComponent } from './list-resep-minuman/list-resep-minuman.component';


@NgModule({
  declarations: [ListResepMinumanComponent],
  imports: [
    CommonModule,
    ListMinumanRoutingModule
  ]
})
export class ListMinumanModule { }
