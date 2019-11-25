let db = {
// localStorage
  save (key, value) {
    localStorage.setItem(key, JSON.stringify(value))
  },
  get (key, defaultValue = {}) {
    return JSON.parse(JSON.stringify(localStorage.getItem(key))) || defaultValue
  },
  remove (key) {
    localStorage.removeItem(key)
  },
  clear () {
    localStorage.clear()
  }
}

export default db
