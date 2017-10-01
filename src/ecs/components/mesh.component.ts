import { Mesh } from 'three'
import { Component } from '../component'

export class MeshComponent extends Component {
  static type = Symbol('Mesh')
  type = MeshComponent.type

  constructor (
    public sysmesh: Mesh
  ) {
    super()
  }
}
