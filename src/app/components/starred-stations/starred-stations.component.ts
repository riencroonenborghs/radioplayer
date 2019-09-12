import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { StarredStationsService } from "../../services/starred-stations.service";

import { Country } from "../../models/country";
import { Station } from "../../models/station";

@Component({
  selector: 'app-starred-stations',
  templateUrl: './starred-stations.component.html',
  styleUrls: ['./starred-stations.component.sass']
})
export class StarredStationsComponent implements OnInit {

  private _countries: Array<Country>;
  @Input() set countries(newCountries: Array<Country>) {
    this._countries = newCountries;
    this.processStarredStations();
  }
  @Input() set reloadData(timestamp: any) {
    this.processStarredStations(); 
  }

  @Output() onSelectedCountry = new EventEmitter<Country>();
  @Output() onSelectedStation = new EventEmitter<Station>();

  starredStations: Array<Station>;
  selectedStarredStation: Station;

  constructor(private starredStationsService: StarredStationsService) {    
  }

  ngOnInit() {
  }

  private processStarredStations() {
    this.starredStations = new Array<Station>();
    let starredStations = this.starredStationsService.getStarredStations();
    this._countries.forEach((country) => {
      country.stations.forEach((station) => {
        station.starred = starredStations.indexOf(station.siteUrl) != -1;
        if(station.starred) {
          this.starredStations.push(station);
        }
      });
    });

    this.starredStations = this.starredStations.sort((a: Station, b: Station) => {
      if(`${a.country.name} - ${a.name}` < `${b.country.name} - ${b.name}`) { return -1; }
      else { return 1; }
    });
  }

  starredStationChanged() {
    this.onSelectedCountry.emit(this.selectedStarredStation.country);
    this.onSelectedStation.emit(this.selectedStarredStation);
  }
}
