class RapGod {
  constructor(type = "god") {
    this.type = type;
  }

  static isGod(rapGod) {
    return rapGod instanceof RapGod;
  }

  rapping() {
    console.log("Say-Ho~");
  }
}

class Corud extends RapGod {
  constructor(type, firstName, lastName) {
    super(type);
    this.firstName = firstName;
    this.lastName = lastName;
  }

  sayName() {
    super.rapping();
    alert(`${this.firstName} ${this.lastName}`);
  }
}

const kimuCorud = new Corud("god", "Corud", "Kimu");
kimuCorud.rapping();
console.log(
  `${RapGod.isGod(kimuCorud)} RapGod ${kimuCorud.lastName}${
    kimuCorud.firstName
  }`
);
