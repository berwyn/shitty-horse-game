import './app.scss'
import { BoxGeometry, MeshBasicMaterial, Mesh } from 'three';

import { World } from './ecs/world'
import { Engine } from './renderer/engine'

import { MeshComponent } from './ecs/components/mesh.component'
import { TransformComponent } from './ecs/components/transform.component'

import { RenderSystem } from './ecs/systems/render.system'
import { SpinnerSystem } from './ecs/systems/spinner.system'

const bootstrap = () => {
  const root = document.getElementById('root')!
  const engine = new Engine(root.querySelector('canvas') || undefined)
  const world = new World()
  const player = world.createEntity('Player')

  const ssystem = new SpinnerSystem()
  const rsystem = new RenderSystem(engine)

  world.registerSystem(ssystem)
  world.registerSystem(rsystem)

  const tcomponent = new TransformComponent()
  tcomponent.rotation.x = 0.00
  tcomponent.rotation.y = 0.01
  tcomponent.rotation.z = 0.01

  let geom = new BoxGeometry(1, 1, 1)
  let mat = new MeshBasicMaterial({ color: 0x00ff00 })
  const mcomponent = new MeshComponent(new Mesh(geom, mat))
  engine.attach(mcomponent.sysmesh)

  world.attachComponent(player, tcomponent)
  world.attachComponent(player, mcomponent)

  engine.mount(root)
  const loop = () => {
    world.tick()
    requestAnimationFrame(loop)
  }
  requestAnimationFrame(loop)
}

bootstrap()

declare var module: any
if (module.hot) {
  module.hot.accept()
}
