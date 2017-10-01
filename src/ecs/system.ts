import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/filter'

import { Entity } from './entity'
import { Component } from './component'
import { World } from './world'
import { Event } from './dispatcher'

export abstract class System {

  priority = 1.0

  abstract tick(world: World, entity: Entity, components: Component[]): void

}

export abstract class ReactiveSystem extends System {
  constructor(
    protected events$: Observable<Event>
  ) {
    super()
  }

  protected _select(key: string): Observable<Event> {
    return this.events$.filter(e => e.type === key)
  }
}
