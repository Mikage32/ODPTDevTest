import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ODPTService } from './service/odpt.service';
import { ODPT } from './service/api';

@Component({
  selector:    'app-root',
  imports:     [],
  templateUrl: './app.component.html',
  styleUrl:    './app.component.scss'
})
export class AppComponent {
  
  private readonly odptService = inject(ODPTService)

  stations:  ODPT.Station[] = []
  timetable: ODPT.TrainTimetable[] = []

  async onClick() {
    this.stations  = await this.odptService.getTrainStations()
    this.timetable = await this.odptService.getTrainTimetable()
  }
}
