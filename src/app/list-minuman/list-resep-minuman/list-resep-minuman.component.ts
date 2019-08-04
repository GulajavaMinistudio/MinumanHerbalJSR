import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataLoadersService } from 'src/app/services/data-loaders.service';
import { Subscription } from 'rxjs';
import { ResepModel } from 'src/app/models/ResepModel';
import { Router} from '@angular/router';

@Component({
  selector: 'app-list-resep-minuman',
  templateUrl: './list-resep-minuman.component.html',
  styleUrls: ['./list-resep-minuman.component.css']
})
export class ListResepMinumanComponent implements OnInit, OnDestroy {


  listDaftarResep: string[] = [];
  subscribption: Subscription = new Subscription();

  constructor(
    private readonly https: DataLoadersService,
    private router: Router
  ) { }

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

    switch (index) {

      case 0:

        this.router.navigate(['/detail-resep/resep-auto-imun', {nama: item}], {replaceUrl: true});
        break;

      case 1:

        break;
    }
  }

  ngOnDestroy(): void {

    this.subscribption.unsubscribe();
  }
}
