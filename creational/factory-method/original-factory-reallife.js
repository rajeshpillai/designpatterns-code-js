class AbstractFoodDelivery {
  constructor() {
  }  

  deliveryPartner() {
    throw new TypeError("Do not call abstract method directly.");
  }

  // Some well established process/operation
  deliver() {
    let partner = this.deliveryPartner();
    console.log("Deivering food by " + partner.type);
    partner.connect();
    partner.payCommission();
  }
}


class AbstractDeliveryPartner {
  type = undefined
  constructor() {
    if (this.constructor === AbstractProduct) {
      throw new TypeError("Cannot construct abstract class.");
    }
  } 
  
  connect() {
    throw new TypeError("Do not call abstract method directly.");
  }

  payCommission() {
    throw new TypeError("Do not call abstract method directly.");
  }
}

class MumbaiPartner extends AbstractDeliveryPartner {
  constructor() {
    super();
    this.type = "Mumbai Partner";
  }

  connect() {
      return new MumbaiPartner();
  }

  payCommission() {
    console.log("Paying commission to " + this.type);
    return 50;
  }

}

class ChennaiPartner extends AbstractDeliveryPartner {
  constructor() {
    super();
    this.type = "Chennai Partner"
  }

  connect() {
      return new ChennaiPartner();
  }
  
  payCommission() {
    console.log("Paying commission to " + this.type);
    return 60;
  }

}

class MumbaiBranch extends AbstractFoodDelivery {
  deliveryPartner() {
    return new MumbaiPartner();
  }
}



class ChennaiBranch extends AbstractFoodDelivery {
  deliveryPartner() {
    return new ChennaiPartner();
  }
}


console.log("--->FACTORY - REALLIFE - METHOD DRY RUN");

// Dry run
//let creators = [new AbstractCreator(), new AbstractCreator()];
let creator = new MumbaiBranch();
creator.deliver();
console.log("<---FACTORY - REALLIFE - METHOD DRY RUN");


