import { Component, OnInit } from '@angular/core';
import { DataLoadersService } from 'src/app/services/data-loaders.service';
import { URL_DETAIL_AUTOIMUN } from 'src/app/services/Konstans';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-resep-autoimun',
  templateUrl: './resep-autoimun.component.html',
  styleUrls: ['./resep-autoimun.component.css']
})
export class ResepAutoimunComponent implements OnInit {

  responseData: any = {};
  detailResepSereh: any = {};
  detailResepJahe: any = {};
  subscription: Subscription = new Subscription();

  constructor(private readonly dataLoader: DataLoadersService) { }

  ngOnInit() {
    this.subscription = new Subscription();
  }

  getDataResep() {

    const subs = this.dataLoader.getDetailResepMinuman(URL_DETAIL_AUTOIMUN)
      .subscribe((result) => {
        this.responseData = result;
        this.setDataResep();
      },
        (error) => {
          console.log(error);
        }
      );
  }

  setDataResep() {

    const arrayResep = this.responseData.array;
    this.detailResepSereh = arrayResep[0];
    this.detailResepJahe = arrayResep[1];
  }
}
