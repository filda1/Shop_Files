import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor(private router: Router) { }


  setLocalStorage(name:string, storeObject:any ) {
  
    localStorage.setItem(name, JSON.stringify(storeObject));
  }


  getLocalStorage(name:string) {
  
     return localStorage.getItem(name);
    //console.log('fetchedObject for local storage: ', JSON.parse(fetchedObject ));
  }

  deleteLocalStorage(name:string) {

    localStorage.removeItem(name);
    
  }

}
