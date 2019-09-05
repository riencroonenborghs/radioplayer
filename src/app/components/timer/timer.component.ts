import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.sass']
})
export class TimerComponent implements OnInit {

  private _time: number;
  @Input() set time(newTime: number) {
    this._time = newTime;
    this.calculateHHMMSS();
  }

  hh: number;
  mm: number;
  ss: number;

  constructor() { }
  ngOnInit() {}
  
  private calculateHHMMSS() {
    let time = this._time;
    this.hh = Math.floor(time / 3600);
    time -= this.hh * 3600;
    this.mm = Math.floor(time / 60);
    time -= this.mm * 60;
    this.ss = time % 60;
  }

}
