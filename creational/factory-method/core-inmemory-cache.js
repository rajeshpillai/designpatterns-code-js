class InMemoryCache extends Cache {
  constructor() {
    super();
    this.items = {};
    this.count = 0;
  }

  // Add key/value pair
  add(key, value) {
    this.items[key] = value;
    this.count++;
  }

  // Get the value by key
  get(key) {
    return this.items[key];
  }

  delete(key) {
    delete this.items[key];
    this.count--;
  }

  values(fn) {
    for (let [key, value] of Object.entries(this.items)) {
      fn(value);
    }
  }

  keys(fn) {
    for (let [key, value] of Object.entries(this.items)) {
      fn(key);
    }
  }
}