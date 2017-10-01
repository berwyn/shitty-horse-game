import { Scene, Camera, Renderer, WebGLRenderer, PerspectiveCamera, BoxGeometry, MeshBasicMaterial, Mesh, WebGLRendererParameters, Object3D } from 'three'

export class Engine {

  private _scene: Scene
  private _camera: Camera
  private _renderer: Renderer

  constructor(canvas?: HTMLCanvasElement) {
    const rparams: WebGLRendererParameters = {}
    if (canvas) {
      rparams.canvas = canvas
    }

    this._scene = new Scene()
    this._camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    this._renderer = new WebGLRenderer(rparams)
    this._renderer.setSize(window.innerWidth, window.innerHeight)

    this._camera.position.z = 5
    this.frame()
  }

  mount(element: HTMLElement): void {
    if (element.children.length === 0) {
      element.appendChild(this._renderer.domElement)
    }
  }

  unmount(element: HTMLElement): void {
    console.log('Attempting unmount')
    element.removeChild(this._renderer.domElement)
  }

  attach(...objects: Object3D[]): void {
    this._scene.add(...objects)
  }

  frame(): void {
    this._renderer.render(this._scene, this._camera)
  }
}
