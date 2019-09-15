import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataLoadersService } from 'src/app/services/data-loaders.service';
import { Subscription } from 'rxjs';
import { ResepModel } from 'src/app/models/ResepModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-resep-minuman',
  templateUrl: './list-resep-minuman.component.html',
  styleUrls: ['./list-resep-minuman.component.scss']
})
export class ListResepMinumanComponent implements OnInit, OnDestroy {

  listDaftarResep: string[] = [];
  subscription: Subscription = new Subscription();

  constructor(
    private readonly https: DataLoadersService,
    private router: Router
  ) { }

  ngOnInit() {
    this.subscription = new Subscription();
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

    this.subscription.add(subs);
  }

  onClickResepMakanan(index: number, item: string) {

    switch (index) {

      case 0:
        // Resep Infused Water
        this.router.navigate(['/detail-resep/resep-infused-water']);
        break;

      case 1:

        break;

      case 2:

        break;

      case 3:

        break;
      case 4:

        break;
      case 5:

        break;
      case 6:

        break;
      case 7:

        break;
      case 8:

        break;
      case 9:

        break;
      case 10:

        break;
      case 11:

        break;
      case 12:

        break;
      case 13:

        break;
      case 14:

        break;
      case 15:

        break;
      case 16:

        break;
      case 17:

        // RESEP UNTUK KEKEBALAN TUBUH
        this.router.navigate(['/detail-resep/resep-auto-imun', { nama: item }],
          { replaceUrl: false });
        break;
      case 18:

        break;
      case 19:

        break;
    }
  }

  ngOnDestroy(): void {

    this.subscription.unsubscribe();
  }
}
