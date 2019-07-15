import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs/internal/observable/throwError';
import { map, catchError } from 'rxjs/operators';
import { ResepModel } from '../models/ResepModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataLoadersService {

  private readonly urlRequest = 'assets/daftar_resep.json';

  constructor(private readonly http: HttpClient) { }

  /**
   * @description Ambil daftar resep minuman
   */
  getDataResepMinuman(): Observable<any> {

    const requestObservable = this.http.get(this.urlRequest).pipe(
      map((data: any) => {
        const datamodel: any = data;

        // mapping ke object model
        const resepModel = new ResepModel(datamodel.resep);
        return resepModel;
      },
      catchError(this.handleErrors)
      ));

    return requestObservable;
  }


  /**
   * @description Error yang muncul akan di tampilkan
   * @param error eksepsi error
   */
  handleErrors(error: HttpErrorResponse) {

    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }

    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}
