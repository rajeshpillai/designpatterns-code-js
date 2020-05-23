// Abstract

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




// Wrapping in IIFE to avoid global pollution of variables
(() => {
  let cacheMemory = CacheFactory.getCacheStore("memory");
  console.log("Cache: ", cacheMemory);

  let cacheDisk = CacheFactory.getCacheStore("disk");
  console.log("Cache: ", cacheDisk);
})();

