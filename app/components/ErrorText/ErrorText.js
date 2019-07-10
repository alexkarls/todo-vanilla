/**
 * @author Alex Karlsson
 * @version 1.0.0
 */

import markup from './markup.js'
import style from './style.js'

class ErrorText extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(markup.content.cloneNode(true))
    this.shadowRoot.appendChild(style.content.cloneNode(true))
    this.error = this.shadowRoot.querySelector('p')
  }

  static get observedAttributes() {
    // Note: The color and fontSize have default value in style
    return ['text', 'color', 'fontSize']
  }

  /**
   * Sets the initial state (text and style).
   * Is called on modified attribute to update text and/or style.
   *
   * @param {String} name - The attribute name.
   * @param {String} oldValue - The old attribute value.
   * @param {String} newValue - The new attribute value.
   */
  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case 'text':
        this.error.textContent = newValue
        break
      case 'color':
        this.error.style.color = newValue
        break
      case 'fontSize':
        this.error.style.fontSize = newValue
        break
    }
  }
}

window.customElements.define('error-text', ErrorText)

export { ErrorText }
