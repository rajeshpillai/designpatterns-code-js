const instanceKey = Symbol();
const instanceKeyIdentifier = Symbol();

class CacheManager {
  constructor(enforcer) {
    this.items = {};
    this.count = 0;
    if (enforcer !== instanceKeyIdentifier) {
      throw new Error('Cannot construct cacheManagerKey');
    }
  }

  // instance getter
  static get instance() {
    if (!this[instanceKey]) {
      this[instanceKey] = new CacheManager(instanceKeyIdentifier);
    }
    return this[instanceKey];
  }

  // Add key/value pair
  add(key, value) {
    this.items[key] = value;
    this.count++;
  }

  // Get the value by key
  read(key) {
    return this.items[key];
  }

  eachObject(fn) {
    for (let [key, value] of Object.entries(this.items)) {
      fn({key, value});
    }
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

  delete(key) {
    delete this.items[key];
    this.count--;
  }
}


 
