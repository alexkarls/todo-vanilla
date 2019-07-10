/**
 * @author Alex Karlsson
 * @version 1.0.0
 */

// LocalStorage helper Class.
class Storage {
  static get(key) {
    return JSON.parse(localStorage.getItem(key))
  }

  static set(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
  }

  /**
   * The value is pushed to an Array with the previous values and set to LocalStorage.
   * To be used when a key is updated with more values.
   *
   * @param {String} key - The key.
   * @param {*} value - The value.
   */
  static update(key, value) {
    const values = this.get(key)
    if (values === null) {
      this.set(key, [value])
    } else {
      values.push(value)
      this.set(key, values)
    }
  }

  static deleteIndex(key, index) {
    const values = this.get(key)
    this.set(key, values.filter(value => values.indexOf(value) !== index))
  }
}

export default Storage
