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


// Disk implementation (we are not actually implementing file/io)
// If you wish you can do this in node.js
const DISK_API = "put your api here or if on node st up file system object api";
class DiskCache extends Cache {

  constructor() {
    super();
    this.count = 0;
  }

  // Add key/value pair
  add(key, value) {
    DiSP_API.put(key, value);
    this.count++;
  }

  // Get the value by key
  get(key) {
    return DiSP_API.get(key);;
  }

  delete(key) {
    delete this.items[key];
    DISK_API.delete(key);
  }

  values(fn) {
    for (let [key, value] of Object.entries(DISK_API.get_items())) {
      fn(value);
    }
  }

  keys(fn) {
    for (let [key, value] of Object.entries(DISK_API.get_items())) {
      fn(key);
    }
  }
}


/* Cache CacheFactory (fragile)
   This factory is fragile but not very bad as new storage introduction
   will require code change here breaking OCP principle.

   Take a look at the optimized version.  But this is good to understand
   the basic principles
*/
class CacheFactory {
  static getCacheStore(type) {
    switch(type) {
      case "memory":
        return new InMemoryCache();
        break;
      case "disk":
        return new DiskCache();
        break;
      default:
        return new InMemoryCache();
        break;
    }
  }  
}


let cacheMemory = CacheFactory.getCacheStore("memory");
console.log("Cache: ", cacheMemory);

let cacheDisk = CacheFactory.getCacheStore("disk");
console.log("Cache: ", cacheDisk);


