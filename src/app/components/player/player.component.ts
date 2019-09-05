import { Component, OnInit } from '@angular/core';

import { StationService } from "../../services/station.service";
import { Country } from "../../models/country";
import { Station } from "../../models/station";


@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.sass']
})
export class PlayerComponent implements OnInit {

  selectedCountry: Country;
  selectedStation: Station;
  selectedStarredStation: Station;
  starredStations: Array<Station>;

  private storageKey: string = "radioplayer";

  constructor(
    public stationService: StationService
  ) {
    stationService.loadCountries();
    this.starredStations = new Array<Station>();

    let starredStations = this.getStarredStations();
    stationService.countries.forEach((country) => {
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

  ngOnInit() {
  }

  toggleStarStation(station: Station) {
    let loadedStarredStations = this.getStarredStations();
    let index = loadedStarredStations.indexOf(station.siteUrl);
    if(index != -1) {
      loadedStarredStations.splice(index, 1);
      this.starredStations.splice(index, 1);
      station.starred = false;
    } else {
      loadedStarredStations.push(station.siteUrl);
      this.starredStations.push(station);
      station.starred = true;
    }
    this.setStarredStations(loadedStarredStations);
  }

  private getStarredStations() {
    let storedData = localStorage.getItem(this.storageKey);
    if(storedData != null) {
      return JSON.parse(storedData);
    } else {
      return []
    }
  }
  private setStarredStations(starredStations: Array<string>) {
    localStorage.setItem(this.storageKey, JSON.stringify(starredStations));
  }

  starredStationChanged() {
    this.selectedCountry = this.selectedStarredStation.country;
    this.selectedStation = this.selectedStarredStation;
    this.stationChanged();
  }

  isPlaying: boolean = false;
  timePlaying: number = 0;
  timePlayingInterval: number;

  stationChanged() {
    let player = document.getElementById("vg-audioplayer");
    player.innerHTML = `<audio id='player'><source src="${this.selectedStation.radioUrl}" type="audio/mp3"></source></audio>`;
    player.getElementsByTagName("audio")[0].play();
    this.timePlaying == 0;
    this.startPlaying();
  }

  play() {
    let player = document.getElementById("vg-audioplayer");
    player.getElementsByTagName("audio")[0].play();
    this.startPlaying();
  }
  pause() {
    let player = document.getElementById("vg-audioplayer");
    player.getElementsByTagName("audio")[0].pause();
    this.stopPlaying();
  }
  volumeUp() {
    let player = document.getElementById("vg-audioplayer");
    player.getElementsByTagName("audio")[0].volume += 0.1;
  }
  volumeDown() {
    let player = document.getElementById("vg-audioplayer");
    player.getElementsByTagName("audio")[0].volume -= 0.1;
  }

  private startPlaying() {
    this.isPlaying = true;
    this.timePlayingInterval = setInterval(() => {
      this.timePlaying += 1;
    }, 1000);
  }
  private stopPlaying() {
    this.isPlaying = false;
    clearInterval(this.timePlayingInterval);
  }
}
