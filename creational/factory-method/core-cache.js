// Abstract
class Cache {
  constructor() {
    if (this.constructor === Cache) {
      // Error Type 1. Abstract class can not be constructed.
      throw new TypeError("Can not construct abstract class.");
    }
  }

  add(key, value) {
    throw new TypeError("Do not call abstract method add from child.");
  }

  get(key) {
    throw new TypeError("Do not call abstract method key from child.");
  }

  remove(key) {
    throw new TypeError("Do not call abstract method remove from child.");
  }

  values(fn) {
    throw new TypeError("Do not call abstract method values from child.");
  }

  keys(fn) {
    throw new TypeError("Do not call abstract method keys from child.");
  }
}