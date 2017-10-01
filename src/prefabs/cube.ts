import { BoxGeometry, MeshBasicMaterial, Mesh } from 'three'

import { World } from '../ecs/world'
import { Entity } from '../ecs/entity'
import { TransformComponent } from '../ecs/components/transform.component'
import { MeshComponent } from '../ecs/components/mesh.component'
import { Vector3 } from './../util/coords'

const Cube = (world: World, entity: Entity, position?: Vector3, color?: number) => {
  const tcomponent = new TransformComponent()
  tcomponent.rotation.x = 0.00
  tcomponent.rotation.y = 0.01
  tcomponent.rotation.z = 0.01

  if (position) {
    tcomponent.postion = position
  }

  let geom = new BoxGeometry(1, 1, 1)
  let mat = new MeshBasicMaterial({ color: color || 0x00ff00 })
  const mcomponent = new MeshComponent(new Mesh(geom, mat))

  world.attachComponent(entity, tcomponent)
  world.attachComponent(entity, mcomponent)
  world.dispatch({ type: 'scene-add', object: mcomponent.sysmesh })

  return { transform: tcomponent }
}

export default Cube
