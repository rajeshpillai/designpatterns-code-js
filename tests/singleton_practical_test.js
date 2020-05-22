// describe: what is tested
describe("CacheManager Singleton Test", function() {
  // Before/after setup
  
  before(() => console.log("Testing started – before all tests"));
  after(() => console.log("Testing finished – after all tests"));

  beforeEach(() => console.log("Before a test – enter a test"));
  afterEach(() => console.log("After a test – exit a test"));


  describe("Exceptional cases", function() {
    it("Should not be able to create instance with 'new' operator", function () {
      assert.throws(()=> new CacheManager(), Error, "Cannot construct cacheManagerKey");
    })
  });

  describe("Create instance", function() {
    it("Should be able to create an instance", function () {
      let cache = CacheManager.instance;
      assert.instanceOf(cache, CacheManager, 'cache is an instance of CacheManager')
    })
  });

  describe("Multiple instance creation should point the same single instance", function() {
    it("Two instances are created should point to same singeton instance", function () {
      let cache1 = CacheManager.instance;
      let cache2 = CacheManager.instance;

      assert.equal(cache1, cache2, 'cache1 and cache2 are same');
    })
  });


});