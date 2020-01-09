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

    this.clickNavbarBurgers();

    this.subscriptions.add(subs);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  clickNavbarBurgers() {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    if ($navbarBurgers.length > 0) {

      $navbarBurgers.forEach(
        (el: any) => {
          el.addEventListener('click', () => {

            // Get the target from the "data-target" attribute
            const target = el.dataset.target;
            const $target = document.getElementById(target);

            // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
            el.classList.toggle('is-active');
            $target.classList.toggle('is-active');

          });
        }
      );
    }
  }
}
