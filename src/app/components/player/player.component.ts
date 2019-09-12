import { Component, OnInit } from '@angular/core';

import { StationService } from "../../services/station.service";
import { StarredStationsService } from "../../services/starred-stations.service";

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

  countries: Array<Country>;
  starredStationsReload: any;

  constructor(
    private stationService: StationService,
    private starredStationsService: StarredStationsService
  ) {
    this.countries = new Array<Country>();
  }

  ngOnInit() {
    this.stationService.loadCountries();
    this.countries = this.stationService.countries;
  }

  toggleStarStation(station: Station) {
    let loadedStarredStations = this.starredStationsService.getStarredStations();
    let index = loadedStarredStations.indexOf(station.siteUrl);
    if(index != -1) {
      loadedStarredStations.splice(index, 1);
      station.starred = false;
    } else {
      loadedStarredStations.push(station.siteUrl);
      station.starred = true;
    }
    this.starredStationsReload = new Date();
    this.starredStationsService.setStarredStations(loadedStarredStations);
  }

  onSelectedCountry(country) {
    this.selectedCountry = country;
    this.clearPlayer();
  }

  onSelectedStation(station) {
    this.selectedStation = station;
    this.stationChanged();
  }

  isPlaying: boolean = false;
  timePlaying: number = 0;
  timePlayingInterval: number;

  stationChanged() {
    this.resetTimer();
    let player = document.getElementById("vg-audioplayer");
    player.innerHTML = `<audio id='player'><source src="${this.selectedStation.radioUrl}" type="audio/mp3"></source></audio>`;
    player.getElementsByTagName("audio")[0].play();
    this.startTimer();
  }

  play() {
    let player = document.getElementById("vg-audioplayer");
    player.getElementsByTagName("audio")[0].play();
    this.startTimer();
  }

  pause() {
    let player = document.getElementById("vg-audioplayer");
    player.getElementsByTagName("audio")[0].pause();
    this.stopTimer();
  }

  clearPlayer() {
    this.resetTimer();
    let player = document.getElementById("vg-audioplayer");
    if(player.getElementsByTagName("audio")[0] == undefined) return;
    player.getElementsByTagName("audio")[0].pause();
    player.innerHTML = "";
  }

  volumeUp() {
    let player = document.getElementById("vg-audioplayer");
    player.getElementsByTagName("audio")[0].volume += 0.1;
  }

  volumeDown() {
    let player = document.getElementById("vg-audioplayer");
    player.getElementsByTagName("audio")[0].volume -= 0.1;
  }

  private startTimer() {
    this.isPlaying = true;
    this.timePlayingInterval = setInterval(() => {
      this.timePlaying += 1;
    }, 1000);
  }

  private stopTimer() {
    this.isPlaying = false;
    clearInterval(this.timePlayingInterval);
  }

  private resetTimer() {
    this.stopTimer();
    this.timePlaying = 0;
  }
}
