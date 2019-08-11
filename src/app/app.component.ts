import { Component, OnInit, OnDestroy } from '@angular/core';
import { LibraryLoadersService } from './services/library-loaders.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  title = 'Minuman Herbal JSR';

  subscriptions: Subscription = new Subscription();

  constructor(private readonly loaders: LibraryLoadersService) {
    this.subscriptions = new Subscription();
  }

  ngOnInit(): void {

    this.subscriptions = new Subscription();
    const subs = this.loaders.loadJSCSSLibrary()
      .subscribe(
        (result) => {
          console.log('library loaded');
        },
        (errors) => {
          console.log(errors);
        }
      );

    this.subscriptions.add(subs);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
