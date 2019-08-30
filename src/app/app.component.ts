import { Component } from '@angular/core';

import { StationService } from "./services/station.service";
import { Country } from "./models/country";
import { Station } from "./models/station";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'radioplayer';
}
