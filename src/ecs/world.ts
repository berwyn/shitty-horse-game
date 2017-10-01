import { Dispatcher, Event } from './dispatcher'
import { Entity } from './entity'
import { Component } from './component'
import { System } from './system'

export class World {

  private _entities: Entity[]
  private _components: Map<Entity, Component[]>
  private _systems: System[]

  constructor(private _dispatcher: Dispatcher) {
    this._entities = []
    this._components = new Map()
    this._systems = []
  }

  createEntity(name?: string): Entity {
    const entity = Symbol(name)
    this._entities.push(entity)
    this._components.set(entity, [])
    return entity
  }

  attachComponent(entity: Entity, component: Component): void {
    this._components.get(entity)!.push(component)
  }

  collectComponents(entity: Entity): Component[] | undefined {
    return this._components.get(entity)
  }

  registerSystem(system: System): void {
    this._systems.push(system)
  }

  dispatch<T extends Event>(event: T): void {
    this._dispatcher.dispatch(event)
  }

  tick(): void {
    for (const system of this._systems) {
      for (const entity of this._entities) {
        system.tick(this, entity, this._components.get(entity)!)
      }
    }
  }
}
