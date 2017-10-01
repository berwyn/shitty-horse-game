import { Observable } from 'rxjs/Observable'
import { Subject } from 'rxjs/Subject'
import { BehaviorSubject } from 'rxjs/BehaviorSubject'

export interface Event {
  type: string
}

export class Dispatcher {
  private _subject: Subject<Event>

  constructor() {
    this._subject = new BehaviorSubject<Event>({ type: '[INIT] Engine init' })
  }

  stream(): Observable<Event> {
    return this._subject.asObservable()
  }

  dispatch(event: Event): void {
    this._subject.next(event)
  }
}
