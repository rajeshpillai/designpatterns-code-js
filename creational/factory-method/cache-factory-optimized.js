




// Let's make CacheFactory even better
// OCP compliant :)  (IF you are afraid please feel free to use other approaches)
class BetterCacheFactory {
  // Creates and returns and instance of specified 'type'
  // Returns the default InMemoryCache (if invalid type)
  //   You can throw excecptions or handle invalid type validation as needed
  static getCacheStore(type) {
    // Need to add validations.  Also, for now the the cache name to passed
    // exactly as the name of the class (except don't prefix the Cache word.)
    if (type === undefined) return new InMemoryCache();
    let obj = (Function('return new ' + type + "Cache"))();
    return obj;
  }  
}

// Wrapping in IIFE to avoid global pollution of variables
(() => {
  let cacheMemory = BetterCacheFactory.getCacheStore("InMemory");
  console.log("Cache: ", cacheMemory);

  let cacheDisk = BetterCacheFactory.getCacheStore("Disk");
  console.log("Cache: ", cacheDisk);
})();
