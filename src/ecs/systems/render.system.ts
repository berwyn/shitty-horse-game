import { Object3D } from 'three'
import { Observable } from 'rxjs/Observable'

import { Engine } from '../../renderer/engine'
import { ReactiveSystem } from '../system'
import { World } from '../world'
import { Component } from '../component'
import { Event } from '../Dispatcher'

export class SceneAddEvent {
  type: 'scene-add'
  object: Object3D
}

export class RenderSystem extends ReactiveSystem {
  constructor(
    private _engine: Engine,
    events$: Observable<Event>
  ) {
    super(events$)
    this._select('scene-add')
      .subscribe((event: SceneAddEvent) => {
        console.log('Adding mesh to scene')
        this._engine.attach(event.object)
      })
  }

  tick(world: World, entity: Symbol, components: Component[]): void {
    this._engine.frame()
  }
}
