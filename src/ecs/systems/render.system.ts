import { Engine } from '../../renderer/engine';
import { System } from '../system'
import { World } from '../world'
import { Component } from '../component'

export class RenderSystem extends System {
  constructor(
    private _engine: Engine
  ) {
    super()
  }

  tick(world: World, entity: Symbol, components: Component[]): void {
    this._engine.frame()
  }
}
