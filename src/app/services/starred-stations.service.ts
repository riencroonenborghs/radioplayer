import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StarredStationsService {

  private storageKey: string = "radioplayer";

  constructor() { }

  getStarredStations() {
    let storedData = localStorage.getItem(this.storageKey);
    if(storedData != null) {
      return JSON.parse(storedData);
    } else {
      return []
    }
  }

  setStarredStations(starredStations: Array<string>) {
    localStorage.setItem(this.storageKey, JSON.stringify(starredStations));
  }
}
