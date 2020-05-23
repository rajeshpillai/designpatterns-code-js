
const singleton = Symbol();
const singletonIdentifier = Symbol();

class Singleton {
  constructor(enforcer) {
    if (enforcer !== singletonIdentifier) {
      throw new Error('Cannot construct singleton');
    }
  }

  static get instance() {
    //console.log("static: instance: ", this);
    if (!this[singleton]) {
      this[singleton] = new Singleton(singletonIdentifier);
    }

    return this[singleton];
  }

  singletonMethod() {
    //console.log("singletonMethod: ", this);
    return 'singletonMethod';
  }

  static staticMethod() {
    return 'staticMethod';
  }
}


 
