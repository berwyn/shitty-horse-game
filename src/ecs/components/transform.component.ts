import { Component } from '../component'
import { Vector3 } from '../../util/coords'

export class TransformComponent extends Component {
  static type = Symbol('Transform')
  type = TransformComponent.type

  postion: Vector3 = { x: 0, y: 0, z: 0 }
  rotation: Vector3 = { x: 0, y: 0, z: 0 }
  velocity: Vector3 = { x: 0, y: 0, z: 0 }
}
