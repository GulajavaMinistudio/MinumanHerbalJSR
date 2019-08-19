import { Injectable } from '@angular/core';
import * as localForage from 'localforage';
import * as Cookies from 'js-cookie';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor() { }

  saveDataStorage(key: string, value: any) {

    const promiseSaved = localForage.setItem(key, value);
    return promiseSaved;
  }

  getItemStorage(key: string) {

    const promiseGetData = localForage.getItem(key);
    return promiseGetData;
  }

  removeDataStorage(key: string) {

    const promiseRemoveData = localForage.removeItem(key);
    return promiseRemoveData;
  }

  clearDataStorage() {

    const promiseDeleteAll = localForage.clear();
    return promiseDeleteAll;
  }

  saveDataCookie(key: string , value: any) {

    Cookies.set(key, value);
  }

  getDataCookie(key: string) {

    const data = Cookies.get(key);
    return data;
  }

  deleteDataCookie(key: string) {

    Cookies.remove(key);
  }
}
