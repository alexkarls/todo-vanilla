/**
 * @author Alex Karlsson
 * @version 1.0.0
 */

import markup from './markup.js'
import style from './style.js'

class TodoForm extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(markup.content.cloneNode(true))
    this.shadowRoot.appendChild(style.content.cloneNode(true))

    this.submitButton = this.shadowRoot.querySelector('button[type="submit"]')
    this.colorButtons = this.shadowRoot.querySelectorAll(
      'button[type="button"]'
    )

    this.textInput = this.shadowRoot.querySelector('#text-input')
    this.colorInput = null // Alternative set a default value...
  }

  connectedCallback() {
    const colorButtons = [
      ...this.shadowRoot.querySelectorAll('button[type="button"]')
    ]
    colorButtons.forEach(button => {
      button.addEventListener('click', event => {
        this.colorInput = event.target.value
        event.target.classList.toggle('selected')
        // Remove class selected from other colorButtons...
        colorButtons.forEach(button => {
          button === event.target ? null : button.classList.remove('selected')
        })
      })
    })

    this.submitButton.addEventListener('click', event => {
      event.preventDefault()
      const submit = new CustomEvent('todo-submit', {
        detail: { text: this.textInput.value, color: this.colorInput }
      })
      this.parentElement.dispatchEvent(submit)
    })
  }
}

window.customElements.define('to-do-form', TodoForm)

export { TodoForm }
