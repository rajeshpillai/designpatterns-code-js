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

runSingleton();