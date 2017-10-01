import { World } from '../world'
import { Component } from '../component'
import { System } from '../system'
import { TransformComponent } from '../components/transform.component'
import { MeshComponent } from '../components/mesh.component';

export class SpinnerSystem extends System {
  tick(world: World, entity: Symbol, components: Component[]): void {
    const transform = components
      .find(c => c.type === TransformComponent.type) as TransformComponent | undefined
    const mesh = components
      .find(c => c.type === MeshComponent.type) as MeshComponent | undefined

    if (transform && mesh) {
      const { postion, rotation } = transform
      mesh.sysmesh.position.set(postion.x, postion.y, postion.z)
      mesh.sysmesh.rotation.x += rotation.x
      mesh.sysmesh.rotation.y += rotation.y
      mesh.sysmesh.rotation.z += rotation.z
    }
  }
}
