class AbstractCreator {
  constructor() {
    // if (this.constructor === AbstractCreator) {
    //   throw new TypeError("Cannot construct abstract class.");
    // }
  }  

  factoryMethod() {
    throw new TypeError("Do not call abstract method directly.");
  }

  // Some well established process/operation
  anOperation() {
    // Call the factoryMethod to create the product
    let product = this.factoryMethod();
    console.log("An internal process  called: ");
    // Do all well known things here which is common to all creators.
    product.step1();
    product.step2();

  }
}


class AbstractProduct {
  type = undefined
  constructor() {
    if (this.constructor === AbstractProduct) {
      throw new TypeError("Cannot construct abstract class.");
    }
  } 
  
  step1() {
    throw new TypeError("Do not call abstract method directly.");
  }

  step2() {
    throw new TypeError("Do not call abstract method directly.");
  }
}

class ConcreteProductA extends AbstractProduct {
  constructor() {
    super();
    this.type = "TYPE A";
  }
  factoryMethod() {
      return new ConcreteProductA();
  }
  step1() {
    console.log(`Step1 processed for ${this.type}` );
  }

  step2() {
    console.log(`Step2 processed for ${this.type}` );
  }
}

class ConcreteProductB extends AbstractProduct {
  constructor() {
    super();
    this.type = "TYPE B"
  }
  factoryMethod() {
      return new ConcreteProductB();
  }

  step1() {
    console.log(`Step1 processed for ${this.type}` );
  }

  step2() {
    console.log(`Step2 processed for ${this.type}` );
  }
}

class ConcreteCreatorA extends AbstractCreator {
  factoryMethod() {
    return new ConcreteProductA();
  }
}



class ConcreteCreatorB extends AbstractCreator {
  factoryMethod() {
    return new ConcreteProductB();
  }
}


console.log("--->FACTORY METHOD DRY RUN");

// Dry run
//let creators = [new AbstractCreator(), new AbstractCreator()];
let creators = [];
creators.push(new ConcreteCreatorA());
creators.push(new ConcreteCreatorB());

for(let creator of creators) {
  let product = creator.factoryMethod(); // Call the method and you will get the product
  // or call the anOperation
  creator.anOperation();  // Which internally abstracts the operation logic
  console.log(`Created ${product.constructor.name} of type ${product.type}`);
}

console.log("<---FACTORY METHOD DRY RUN");


