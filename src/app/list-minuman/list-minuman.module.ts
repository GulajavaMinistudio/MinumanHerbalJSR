import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListMinumanRoutingModule } from './list-minuman-routing.module';
import { ListResepMinumanComponent } from './list-resep-minuman/list-resep-minuman.component';
import { DataLoadersService } from '../services/data-loaders.service';


@NgModule({
  declarations: [ListResepMinumanComponent],
  imports: [
    CommonModule,
    ListMinumanRoutingModule
  ],
  providers: [DataLoadersService]
})
export class ListMinumanModule { }
