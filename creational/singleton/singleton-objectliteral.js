var SingletonLiteral = {
  attribute1: true,
  attribute2: 10,
  method1: function() {
    console.log("This is method1");
  },

  method2: function(arg) {
  }

};


// Usage
SingletonLiteral.attribute = 20;
SingletonLiteral.method1();  // prints => This is method1