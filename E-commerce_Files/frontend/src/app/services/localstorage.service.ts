import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }


  setLocalStorage(name:string, storeObject:any ) {
  
    localStorage.setItem(name, JSON.stringify(storeObject));
  }


  getLocalStorage(name:string) {
  
     return localStorage.getItem(name);
    //console.log('fetchedObject for local storage: ', JSON.parse(fetchedObject ));
  }

}
