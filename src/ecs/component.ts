export abstract class Component {
  static type: Symbol
  type: typeof Component.type
}
