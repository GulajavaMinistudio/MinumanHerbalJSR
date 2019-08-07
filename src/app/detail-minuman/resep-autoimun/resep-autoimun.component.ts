import { Component, OnInit } from '@angular/core';
import { DataLoadersService } from 'src/app/services/data-loaders.service';

@Component({
  selector: 'app-resep-autoimun',
  templateUrl: './resep-autoimun.component.html',
  styleUrls: ['./resep-autoimun.component.css']
})
export class ResepAutoimunComponent implements OnInit {

  responseData: any = {};

  constructor(private readonly dataLoader: DataLoadersService) { }

  ngOnInit() {
  }

  getDataResep() {

  }

  setDataResep() {

  }

}
