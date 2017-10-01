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
      mesh.sysmesh.rotation.x += transform.rotation.x
      mesh.sysmesh.rotation.y += transform.rotation.y
      mesh.sysmesh.rotation.z += transform.rotation.z
    }
  }
}
