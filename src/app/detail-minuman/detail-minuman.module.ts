import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailMinumanRoutingModule } from './detail-minuman-routing.module';
import { DetailMinumanHomeComponent } from './detail-minuman-home/detail-minuman-home.component';


@NgModule({
  declarations: [DetailMinumanHomeComponent],
  imports: [
    CommonModule,
    DetailMinumanRoutingModule
  ],
  entryComponents: [DetailMinumanHomeComponent]
})
export class DetailMinumanModule { }
