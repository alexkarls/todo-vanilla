/**
 * @author Alex Karlsson
 * @version 1.0.0
 */

import { TodoForm } from './components/TodoForm/TodoForm.js'
import { Todo, todoModel } from './components/Todo/Todo.js'
import { ErrorText } from './components/ErrorText/ErrorText.js'

import Storage from './util/Storage.js'
const key = 'todo'

// Common HTML selectors...
const todoContainer = document.querySelector('#todo-container')
const todoFormContainer = document.querySelector('#todo-form-container')
const showTodoFormButton = document.querySelector('#todo-show-form')
const errorTextContainer = document.querySelector('#todo-error-container')

// Todo prepend/append in DOM, important to keep order in Storage since id not used...
const PREPEND_TODO = true

const fetch = () => {
  const todos = Storage.get(key)
  if (todos) {
    todos.forEach(todo => {
      prepend(todoModel(todo.text, todo.color), false)
    })
  }
}

const showTodoFormEvent = () => {
  showTodoFormButton.addEventListener('click', () => {
    // Toggle the form...
    if (todoFormContainer.hasChildNodes()) {
      clear(errorTextContainer) // Max one error, clear any previous error...
      clear(todoFormContainer)
      return
    }
    clear(todoFormContainer)
    todoFormContainer.appendChild(new TodoForm())
  })
}

const todoSubmitEvent = () => {
  todoFormContainer.addEventListener('todo-submit', event => {
    clear(errorTextContainer) // Max one error, clear any previous error...
    if (
      isValidInput(event.detail.text, 1, 75) &&
      isValidInput(event.detail.color, 1, 50)
    ) {
      prepend(todoModel(event.detail.text, event.detail.color), true)
    } else {
      const error = new ErrorText()
      error.setAttribute('text', 'Invalid Todo text or color...')
      errorTextContainer.appendChild(error)
    }
  })
}

const isValidInput = (input, min, max) => {
  return input === null ? null : input.length >= min && input.length <= max
}

const todoCheckedEvent = () => {
  todoContainer.addEventListener('todo-checked', event => {
    const todo = event.detail
    PREPEND_TODO
      ? Storage.deleteIndex(
          'todo',
          [...todoContainer.children].reverse().indexOf(todo)
        )
      : Storage.deleteIndex('todo', [...todoContainer.children].indexOf(todo))
    todoContainer.removeChild(todo)
  })
}

// Initialize the functions...
const initialize = () => {
  fetch()
  showTodoFormEvent()
  todoSubmitEvent()
  todoCheckedEvent()
}

initialize()

/***
Utils... 
*/

function prepend(model, save) {
  const component = new Todo(model)
  if (save) {
    Storage.update('todo', model)
    clear(todoFormContainer)
  }
  todoContainer.prepend(component)
}

/* Append to be used for Todo filtering (reverse order)...
function append(model, save) {
  const component = new Todo(model)
  if (save) {
    Storage.update('todo', model)
    clear(todoFormContainer)
  }
  todoContainer.append(component)
}
*/

function clear(parent) {
  while (parent.firstChild) {
    parent.firstChild.remove()
  }
}
