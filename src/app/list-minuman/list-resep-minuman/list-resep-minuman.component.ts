import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataLoadersService } from 'src/app/services/data-loaders.service';
import { Subscription } from 'rxjs';
import { ResepModel } from 'src/app/models/ResepModel';

@Component({
  selector: 'app-list-resep-minuman',
  templateUrl: './list-resep-minuman.component.html',
  styleUrls: ['./list-resep-minuman.component.css']
})
export class ListResepMinumanComponent implements OnInit, OnDestroy {


  listDaftarResep: string[] = [];
  subscribption: Subscription = new Subscription();

  constructor(private readonly https: DataLoadersService) { }

  ngOnInit() {
    this.subscribption = new Subscription();
    this.getDaftarResep();
  }

  getDaftarResep() {

    const subs = this.https.getDataResepMinuman()
    .subscribe(
      (result: ResepModel) => {
        this.listDaftarResep = result.listResepMinuman;
      },
      (errors) => {
        console.log(errors);
      }
    );

    this.subscribption.add(subs);
  }

  onClickResepMakanan(index: number, item: string) {

  }

  ngOnDestroy(): void {

    this.subscribption.unsubscribe();
  }
}
