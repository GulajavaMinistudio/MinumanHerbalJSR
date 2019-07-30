import { Component, OnInit } from '@angular/core';
import { DataLoadersService } from 'src/app/services/data-loaders.service';

@Component({
  selector: 'app-list-resep-minuman',
  templateUrl: './list-resep-minuman.component.html',
  styleUrls: ['./list-resep-minuman.component.css']
})
export class ListResepMinumanComponent implements OnInit {

  listDaftarResep: string[] = [];

  constructor(private readonly https: DataLoadersService) { }

  ngOnInit() {
  }

  getDaftarResep() {

  }

  onClickResepMakanan(index: number) {

  }
}
