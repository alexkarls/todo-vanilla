/**
 * @author Alex Karlsson
 * @version 1.0.0
 */

import markup from './markup.js'
import style from './style.js'

/**
 *
 * @param {String} text  - The Todo text.
 * @param {String} color - The Todo color (valid CSS color).
 * @return {Object} The todo model.
 */
const model = (text, color) => {
  return { text: text, color: color }
}

class Todo extends HTMLElement {
  /**
   *
   * @param {Object} model - The todo model.
   */
  constructor(model) {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(markup.content.cloneNode(true))
    this.shadowRoot.appendChild(style.content.cloneNode(true))

    // HTML Selectors
    this.checkButton = this.shadowRoot.querySelector('button')
    this.textElement = this.shadowRoot.querySelector('p')
    this.colorElement = this.shadowRoot.querySelector('#color')

    // Set the text and color
    this.textElement.textContent = model.text
    this.colorElement.style.background = model.color
  }

  connectedCallback() {
    this.checkButton.addEventListener('click', () => {
      const event = new CustomEvent('todo-checked', { detail: this })
      this.parentElement.dispatchEvent(event)
    })
  }
}

window.customElements.define('to-do', Todo)

export { Todo }
export { model as todoModel }
