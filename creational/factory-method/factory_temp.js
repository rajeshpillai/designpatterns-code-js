CoordSystem = {
  cartesion: 0,
  polar: 1
}

class Point {
  // Cartesion coord and you need
  // Polar coord
  // constructor(x, y) {
  //   this.x = x;
  //   this.y = y;
  // }


  // Problem : argument name
  // WHat is a?  Is it x? etc
  // What if a third coord system needs to be added:: constructor needs to be modified (violation of OCP)
  constructor(a, b, cs = CoordSystem.cartesion) {
    // switch are bad (we will avoid it later)
    switch(cs) {
      case CoordSystem.cartesion:
        this.x = a;
        this.y = b;
        break;
      case CoordSystem.polar:
        this.x = a * Math.cos(b);
        this.y = a * Math.sin(b);
    }
  }
}

// Factory Method

class PointFM {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  // Factory method
  // Expected to provide cart coord
  static newCartesionPoint(x, y) {
    return new PointFM(x, y);
  }

  // We are getting numerous benefit.
  // Its clear as the name and parameter are not creating ambiguity
  static newPolarPoint(rho, theta) {
    return new PointFM(
      rho * Math.cos(theta),
      rho * Math.sin(theta)
    )
  }
}


/// Previous
let p = new Point(2,3, CoordSystem.cartesion);

// newPolarPoint
let c1 = PointFM.newCartesionPoint(1,2);
let p1 = PointFM.newPolarPoint(2,3);

console.log(c1, p1);


// Factory
// Separation of concerns
class PointFactory {
  // Factory method
  // Expected to provide cart coord
  static newCartesionPoint(x, y) {
    return new PointFM(x, y);
  }

  // We are getting numerous benefit.
  // Its clear as the name and parameter are not creating ambiguity
  static newPolarPoint(rho, theta) {
    return new PointFM(
      rho * Math.cos(theta),
      rho * Math.sin(theta)
    )
  }
}

let pf1 = PointFactory.newCartesionPoint(10,10);
let pf2 = PointFactory.newPolarPoint(1, 2);

console.log("PF : ", pf1, pf2);








