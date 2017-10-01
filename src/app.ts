import './app.scss'

import { Dispatcher } from './ecs/dispatcher'
import { World } from './ecs/world'
import { Engine } from './renderer/engine'

import { RenderSystem } from './ecs/systems/render.system'
import { SpinnerSystem } from './ecs/systems/spinner.system'

import Cube from './prefabs/cube'

const bootstrap = () => {
  const root = document.getElementById('root')!
  const engine = new Engine(root.querySelector('canvas') || undefined)
  const dispatcher = new Dispatcher()
  const world = new World(dispatcher)
  const player = world.createEntity('Player')
  const p2 = world.createEntity('Player 2')

  window.addEventListener('resize', () => world.dispatch({ type: 'scene-resize' }))

  const ssystem = new SpinnerSystem()
  const rsystem = new RenderSystem(engine, dispatcher.stream())

  world.registerSystem(ssystem)
  world.registerSystem(rsystem)

  engine.mount(root)

  Cube(world, player)
  Cube(world, p2, {x: 1, y: 1, z: 1}, 0xff0000)

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
