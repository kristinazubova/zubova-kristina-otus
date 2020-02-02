import { LitElement, html } from 'lit-element'

class MyLeaf extends LitElement {
  static get properties() {
    return { id: { type: Number } }
  }
  constructor() {
    super()
  }
  render() {
    return html`
    <li>${this.id}</li>`
  }
}
customElements.define('my-leaf', MyLeaf)