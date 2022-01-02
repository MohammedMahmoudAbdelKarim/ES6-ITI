class Person {
  // extends Human
  constructor() {
    // super();
    console.log("Person Constructor");
    this.name = "John Doe";
    this.job = "Software Engineer";
  }

  getJob() {
    return this.job;
  }

  // Getter
  get getName() {
    return this.name;
  }

  // Setter
  set setName(personName) {
    this.name = personName;
  }

  static getHeight() {
    return 175;
  }

  static getWeight() {
    return 85;
  }
}

let p = new Person();

console.log(p.getJob());
console.log(p.getName);
p.setName = "Mohammed";
Person.getHeight();

class Human {
  constructor() {
    console.log("Human Constructor");
    this.name = "";
    this.job = "";
    this.languages = "Arabic, English";
  }
  getAge() {
    return 26;
  }
}

// Interview Question
class A {
  constructor() {
    this.car = "Tesla";
  }
}

export default class B extends A {
  constructor() {}
  getCar() {
    console.log(this.car);
  }
}
