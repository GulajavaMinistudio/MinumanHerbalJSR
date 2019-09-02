import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataLoadersService } from 'src/app/services/data-loaders.service';
import { URL_DETAIL_INFUSEDWATER } from 'src/app/services/Konstans';
import { map } from 'rxjs/operators';

import { LibraryLoadersService } from 'src/app/services/library-loaders.service';

declare var $: any;


@Component({
  selector: 'app-resep-infusedwater',
  templateUrl: './resep-infusedwater.component.html',
  styleUrls: ['./resep-infusedwater.component.scss']
})
export class ResepInfusedwaterComponent implements OnInit, OnDestroy {

  responseData: any = {};
  arrayKeterangan: [] = [];
  arrayDataInfusedWater: [] = [];
  subscription: Subscription = new Subscription();

  tabelResep: any = {};

  arrayKolom = [
    { data: 'bahan1' },
    { data: 'bahan2' },
    { data: 'bahan3pelengkap' }
  ];

  judulAirNano = '';
  arrayBarisAirNano = [];

  constructor(private readonly dataLoader: DataLoadersService,
              private readonly libraryLoader: LibraryLoadersService) { }

  ngOnInit() {
    this.subscription = new Subscription();
    this.getLibraryHalaman();
  }

  inisialisasiTabel() {

    this.tabelResep = ($('#tabel_resep_infused') as any).DataTable({
      data: this.arrayDataInfusedWater,
      columns: this.arrayKolom,
      deferRender: true,
      responsive: true,
      searching: false,
      paging: false,
      lengthChange: false,
      info: false,
      ordering: false,
      processing: true,
    });
  }

  getLibraryHalaman() {

    const subs = this.libraryLoader.loadJSCSSLibraryDatatable()
      .subscribe(() => {
        console.log('library loaded');
        this.inisialisasiTabel();
        this.getDetailResep();
      },
        (error) => {
          console.warn(error);
        });

    this.subscription.add(subs);
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
    this.arrayDataInfusedWater = this.responseData.arrayRow;

    this.tabelResep.clear().draw();
    this.tabelResep.rows.add(this.arrayDataInfusedWater).draw();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
