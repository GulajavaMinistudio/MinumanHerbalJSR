import { Injectable, Inject } from '@angular/core';
import { ReplaySubject, Observable, forkJoin } from 'rxjs';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class LibraryLoadersService {

  private loadedLibraries: { [url: string]: ReplaySubject<any> } = {};

  constructor(@Inject(DOCUMENT) private readonly document: any) { }

  /**
   * @description Load data library secara asinkronus deferred
   * Ketika produksi, gunakan loadstyle untuk memuat Style CSS
   */
  loadJSCSSLibrary(): Observable<any> {
    return forkJoin([

      // untuk produksi
      this.loadStyle('bulma-css.css'),
      this.loadStyle('bulma-divider-css.css')
      // untuk development contohnya
      // this.loadScript('bootstrap-style.js'),
      // this.loadScript('fontawesome-style.js'),
    ]);
  }

  /**
   * @description Memuat library datatable untuk halaman yang ada tabel nya
   */
  loadJSCSSLibraryDatatable() {
    return forkJoin([
      // load script js dan css
      this.loadStyle('fontawesome-css.css'),
      this.loadStyle('bulma-css.css'),
      this.loadStyle('bulma-datatables-css.css'),
      this.loadStyle('bulma-divider-css.css'),
      // this.loadStyle('jquery-datatables-css.css'),
      this.loadScript('jquery-js.js'),
      this.loadScript('datatablesnet-js.js'),
      // this.loadScript('datatablesnet-styling-js.js'),
      this.loadScript('datatables-bulma-js.js')
    ]);
  }

  /**
   * @description Muat data script dari URL tertentu secara lazy loading
   * @param url Path atau URL untuk memuat script JS
   */
  private loadScript(url: string): Observable<any> {
    if (this.loadedLibraries[url]) {
      return this.loadedLibraries[url].asObservable();
    }

    this.loadedLibraries[url] = new ReplaySubject();

    const script = this.document.createElement('script');
    script.type = 'text/javascript';
    script.defer = true;
    script.async = false;
    script.src = url;
    script.onload = () => {
      this.loadedLibraries[url].next();
      this.loadedLibraries[url].complete();
    };

    this.document.body.appendChild(script);

    return this.loadedLibraries[url].asObservable();
  }


  /**
   * @description Memuat data CSS Style dari sumber CSS CDN
   * @param url Path atau URL untuk memuat data script CSS
   */
  private loadStyle(url: string): Observable<any> {
    if (this.loadedLibraries[url]) {
      return this.loadedLibraries[url].asObservable();
    }

    this.loadedLibraries[url] = new ReplaySubject();

    const style = this.document.createElement('link');
    style.type = 'text/css';
    style.href = url;
    style.rel = 'stylesheet';
    style.onload = () => {
      this.loadedLibraries[url].next();
      this.loadedLibraries[url].complete();
    };

    const head = document.getElementsByTagName('head')[0];
    head.appendChild(style);

    return this.loadedLibraries[url].asObservable();
  }
}
