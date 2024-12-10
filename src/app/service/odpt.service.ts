import { HttpClient }             from "@angular/common/http";
import { inject, Injectable }     from "@angular/core";
import { firstValueFrom }         from "rxjs";
import { ODPT_DEVELOPMENT_TOKEN } from '@env/env'
import { ODPT } from "./api";
import { State } from "./state";

interface Data {
  railways:      ODPT.Railway[]
  trainstations: ODPT.Station[]
  timetables:    ODPT.TrainTimetable[]
}

@Injectable({providedIn: 'root'})
export class ODPTService {

  // -- [ Property ] ----------------------------------------------------------------- -
  private static readonly API_PRE: string = `https://api.odpt.org`
  private static readonly API_SUF: string = `?acl:consumerKey=${ODPT_DEVELOPMENT_TOKEN}`

  private static readonly PATH = {
    STATION:         '/api/v4/odpt:Station',
    TRAIN_TIMETABLE: '/api/v4/odpt:TrainTimetable',
  }

  public readonly state: State<Data> = new State<Data>({
    railways:      [],
    trainstations: [],
    timetables:    [],
  })

  // -- [ Dependency ] ----------------------------------------------------------------- 
  private readonly http: HttpClient = inject(HttpClient)

  // -- [ Method ] ---------------------------------------------------------------------
  getTrainStations(): Promise<ODPT.Station[]> {
    return firstValueFrom(this.http.get<ODPT.Station[]>(this.getPath(ODPTService.PATH.STATION)))
      .catch(e => {console.error(e);return []})
      .then(data => {
        this.state.patchState({
          trainstations: data
        })
        return data
      })
  }

  getTrainTimetable(): Promise<ODPT.TrainTimetable[]> {
    return firstValueFrom(this.http.get<ODPT.TrainTimetable[]>(this.getPath(ODPTService.PATH.TRAIN_TIMETABLE)))
      .catch(e => {console.error(e);return []})
      .then(data => {
        this.state.patchState({
          timetables: data
        })
        return data
      })
  }

  // -- [ Method ] ---------------------------------------------------------------------
  private getPath(path: string): string {
    return ODPTService.API_PRE + path + ODPTService.API_SUF
  }
}
