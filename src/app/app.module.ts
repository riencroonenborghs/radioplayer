import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatToolbarModule, MatSelectModule, MatIconModule, MatCardModule, MatDividerModule, MatAutocompleteModule, MatInputModule } from '@angular/material';


import { PlayerComponent } from './components/player/player.component';
import { TimerComponent } from './components/timer/timer.component';
import { LjustPipe } from './pipes/ljust.pipe';
import { CountriesComponent } from './components/countries/countries.component';
import { StarredStationsComponent } from './components/starred-stations/starred-stations.component';
import { StationsComponent } from './components/stations/stations.component';


@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    TimerComponent,
    LjustPipe,
    CountriesComponent,
    StarredStationsComponent,
    StationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    FormsModule, ReactiveFormsModule,
    BrowserAnimationsModule, MatButtonModule, MatToolbarModule, MatSelectModule, MatIconModule, MatCardModule, MatDividerModule, MatAutocompleteModule, MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
