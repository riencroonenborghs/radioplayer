import { Component, OnInit, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MatAutocompleteTrigger } from '@angular/material'


import { Station } from "../../models/station";

@Component({
  selector: 'app-stations',
  templateUrl: './stations.component.html',
  styleUrls: ['./stations.component.sass']
})
export class StationsComponent implements OnInit {
  selectedStation: Station;
  @ViewChild(MatAutocompleteTrigger) _auto: MatAutocompleteTrigger;
  myControl = new FormControl();
  filteredStations: Observable<Station[]>;

  @Input() set station(newStation: Station) {
    this.selectedStation = newStation;
    setTimeout(() => {
      if(newStation == undefined) return;
      let matOptions = this._auto.autocomplete.options.toArray();
      let matOption = matOptions.find((matOption) => matOption.value == newStation);
      if(matOption == undefined) return;
      this.myControl.setValue(matOption.value);
    }, 500);
  }

  allStations: Array<Station>;
  @Input() set stations(newStations: Array<Station>) {
    this.allStations = newStations;
    this.filteredStations = this.myControl.valueChanges
      .pipe(
        startWith(""),
        map(value => this._filter(value))
      );
  }

  @Output() onSelectedStation = new EventEmitter<Station>();

  constructor() { }

  ngOnInit() {
    
  }

  private _filter(value: any): Station[] {
    if(value == null) return;
    if(value instanceof Station) return;
    const filterValue = value.toLowerCase();
    return this.allStations.filter(station => station.name.toLowerCase().includes(filterValue));
  }

  displayFn(station?: Station): string | undefined {
    return station ? station.name : undefined;
  }

  stationSelected(event: any) {
    this.selectedStation = event.option.value;
    this.onSelectedStation.emit(this.selectedStation);
  }

  resetAutocomplete() {
    this.myControl.setValue(null);
  }

}
