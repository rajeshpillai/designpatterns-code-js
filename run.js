function runSingleton() {
 
  // Both of the below instance point to same instance in memory
  const instance1 = Singleton.instance;
  const instance2 = Singleton.instance;

  // This will give you error
  //const instance3 = new Singleton();

  // Call instance method or /prototype method
  console.log(instance1.singletonMethod());

  // Static method
  console.log(Singleton.staticMethod());

  console.log("instance1 == instance2 ? " + (instance1 === instance2));  
}


function runSingletonPractical() {
 
  const instance = CacheManager.instance;

  instance.add("key1", "value1");
  instance.add("key2", "value2");
  instance.add("key3", "value3");

  const instance2 = CacheManager.instance;
  console.log(instance.read("key2"), instance2.read("key2"));
  console.log("Count: ", instance2.count);

  instance.delete("key2");
  console.log("Count: ", instance2.count);

  // Test each method
  instance.eachObject(item => console.log(item));
  instance.values(value => console.log("value: ", value));
  instance.keys(key => console.log("key: ", key));

}


// NOTE:  Uncomment the code to run respective examples
// We will get better with this by creating a runner helper

//runSingleton();

runSingletonPractical();