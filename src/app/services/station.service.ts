import { Injectable } from '@angular/core';

import { Country } from "../models/country";
import { Station } from "../models/station";

import { ALLCOUNTRIES } from "../data/countries";
import { ALLSTATIONS } from "../data/stations";

@Injectable({
  providedIn: 'root'
})
export class StationService {
  countries: Array<Country>;

  constructor() {}

  loadCountries() {
    this.countries = new Array<Country>();
    Object.keys(ALLCOUNTRIES).forEach((code) => {
      let name = ALLCOUNTRIES[code];
      let country = new Country(code, name);
      Array(ALLSTATIONS[code])[0].forEach((data) => {
        let station: Station = new Station(
          country,
          data.name,
          data.image,
          data.site_url,
          data.radio_url,
          data.description
        );
        country.addStation(station);
      });
      country.sortStations();
      this.countries.push(country);
    });
  }
}
