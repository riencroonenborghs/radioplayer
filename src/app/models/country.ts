import { Station } from "./station";

export class Country {
  name: string;
  code: string;
  stations: Array<Station>;

  constructor(code: string, name: string) {
    this.code = code;
    this.name = name;
    this.stations = new Array<Station>();
  }

  addStation(station: Station) {
    this.stations.push(station);
  }

  sortStations() {
    this.stations = this.stations.sort((a: Station, b: Station) => {
      if(a.name < b.name) { return -1; }
      else { return 1; }
    });
  }
} 
