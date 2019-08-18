import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataLoadersService } from 'src/app/services/data-loaders.service';
import { URL_DETAIL_INFUSEDWATER } from 'src/app/services/Konstans';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-resep-infusedwater',
  templateUrl: './resep-infusedwater.component.html',
  styleUrls: ['./resep-infusedwater.component.scss']
})
export class ResepInfusedwaterComponent implements OnInit, OnDestroy {

  responseData: any = {};
  arrayKeterangan: [] = [];
  arrayBaris: [] = [];
  arrayKolom: [] = [];
  subscription: Subscription = new Subscription();

  constructor(private readonly dataLoader: DataLoadersService) { }

  ngOnInit() {
    this.subscription = new Subscription();
    this.getDetailResep();
  }

  getDetailResep() {

    const subs = this.dataLoader.getDetailResepMinuman(URL_DETAIL_INFUSEDWATER)
      .pipe(
        map((result: any) => {
          return JSON.parse(result);
        })
      )
      .subscribe((result) => {
        this.responseData = result;
        this.setDataResep();
      },
        (error) => {
          console.log(error);
        });

    this.subscription.add(subs);
  }

  setDataResep() {

    this.arrayKeterangan = this.responseData.keterangan;
    this.arrayBaris = this.responseData.arrayRow;
    this.arrayKolom = this.responseData.arrayColumn;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
