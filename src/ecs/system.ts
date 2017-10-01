import { Entity } from './entity'
import { Component } from './component'
import { World } from './world'

export abstract class System {

  priority = 1.0

  abstract tick(world: World, entity: Entity, components: Component[]): void

}
