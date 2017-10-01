import { Component } from '../component'

export class TransformComponent extends Component {
  static type = Symbol('Transform')
  type = TransformComponent.type

  postion = { x: 0, y: 0, z: 0 }
  rotation = { x: 0, y: 0, z: 0 }
  velocity = { x: 0, y: 0, z: 0 }
}
