
export namespace ODPT {

  export interface Railway {
    
  }

  export interface Station {
    '@context':      string
    '@id':           string
    '@type':         string
    'dc:date':       string
    'dc:title':      string
    'odpt:operator': string
    'odpt:railway':  string
  }

  export interface TrainTimetable {
    '@context':                     string
    '@id':                          string
    '@type':                        string
    'dc:date':                      string
    'dc:issued'?:                   string
    'odpt:valid'?:                  string
    'odpt:operator':                string
    'odpt:railway':                 string
    'odpt:railDirection'?:          string
    'odpt:calendar'?:               string
    'odpt:train'?:                  string
    'odpt:trainNumber':             string
    'odpt:trainType'?:              string
    'odpt:trainName'?:              Object[]
    'odpt:trainOwner'?:             string
    'odpt:originStation'?:          string[]
    'odpt:destomatopmStation'?:     string[]
    'odpt:viaStation'?:             string[]
    'odpt:previousTrainTimetable'?: string[]
    'odpt:nextTrainTimetable'?:     string[]
    'odpt:trainTimetableObject':    TrainTimetableObject[]
    'odpt:needExtraFee'?:           boolean
    'odpt:note':                    Object
  }

  export interface TrainTimetableObject {
    'odpt:arrivalTime'?:      string
    'odpt:arrivalStation'?:   string
    'odpt:departureTime'?:    string
    'odpt:departureStation'?: string
    'odpt:platformNumber'?:   string
    'odpt:platformName'?:     Object
    'odpt:note'?:             Object
  }
}
