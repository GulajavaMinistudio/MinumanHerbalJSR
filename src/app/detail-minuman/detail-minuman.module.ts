import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailMinumanRoutingModule } from './detail-minuman-routing.module';
import { ResepAutoimunComponent } from './resep-autoimun/resep-autoimun.component';
import { DetailMinumanHomeComponent } from './detail-minuman-home/detail-minuman-home.component';
import { ResepInfusedwaterComponent } from './resep-infusedwater/resep-infusedwater.component';


@NgModule({
  declarations: [
    ResepAutoimunComponent,
    DetailMinumanHomeComponent,
    ResepInfusedwaterComponent
  ],
  imports: [
    CommonModule,
    DetailMinumanRoutingModule
  ],
  entryComponents: [DetailMinumanHomeComponent]
})
export class DetailMinumanModule { }
