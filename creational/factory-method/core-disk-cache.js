

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