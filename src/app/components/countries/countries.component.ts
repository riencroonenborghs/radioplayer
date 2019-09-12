import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

import { StationService } from "../../services/station.service";
import { Country } from "../../models/country";

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.sass']
})
export class CountriesComponent implements OnInit {

  countries: Array<Country>;
  selectedCountry: Country;

  @Input() set country(newCountry: Country) {
    this.selectedCountry = newCountry;
  }

  @Output() onSelectedCountry = new EventEmitter<Country>();

  constructor(private stationService: StationService) { }

  ngOnInit() {
    this.countries = this.stationService.countries;
  }

  countryChanged() {
    this.onSelectedCountry.emit(this.selectedCountry);
  }

}
