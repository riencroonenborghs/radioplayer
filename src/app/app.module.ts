import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatToolbarModule, MatSelectModule, MatIconModule, MatCardModule, MatDividerModule } from '@angular/material';


import { PlayerComponent } from './components/player/player.component';
import { TimerComponent } from './components/timer/timer.component';
import { LjustPipe } from './pipes/ljust.pipe';
import { CountriesComponent } from './components/countries/countries.component';
import { StarredStationsComponent } from './components/starred-stations/starred-stations.component';


@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    TimerComponent,
    LjustPipe,
    CountriesComponent,
    StarredStationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule, MatButtonModule, MatToolbarModule, MatSelectModule, MatIconModule, MatCardModule, MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
