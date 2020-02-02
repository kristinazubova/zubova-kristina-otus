import { LitElement, html } from 'lit-element'

class MyTree extends LitElement {
  static get properties() {
    return {
      id: { type: Number },
      items: { type: Array }
    }
  }
  
  constructor() {
    super()
    this.items = []
  }

  render() {
    return html`
    <ul>
      <b>${this.id}</b>
      ${
        this.items && this.items.length
        ? this.items.map((item) => {
            return item.items
              ? html`<my-tree id="${item.id}" items="${JSON.stringify(item.items)}"></my-tree>`
              : html`<my-leaf id="${item.id}"></my-leaf>`
            })
        : "Items empty"
      }
    </ul>`
  }
}
customElements.define('my-tree', MyTree)