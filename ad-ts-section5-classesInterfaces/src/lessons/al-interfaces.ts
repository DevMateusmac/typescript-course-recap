interface Person1 {
  name: string;
  age: number;

  greet(phrase: string): void;
}

let user1: Person1;

user1 = {
  name: "Mateus",
  age: 25,
  greet(phrase: string) {
    console.log(`Hello, I'm ${this.name}! ` + phrase);
  },
};

user1.greet("Nice to meet you!");

// interfaces with classes

interface Greetable {
  name: string;

  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;
  age = 30;

  constructor(name: string) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, I'm ${this.name}! `);
  }
}

let user2 = new Person("Mateus");
user2.greet();

// interface with readonly property

// you can't have other property modifier than readonly, and as we know, you can't modify the property with readonly modifier

interface Greetable1 {
  readonly name: string; // this can't be changed when a class implements this interface

  greet(phrase: string): void;
}

// interface with inheritance

interface Named2 {
  readonly name: string;
}

interface Greetable2 extends Named2 {
  greet(phrase: string): void;
}

//now the class must have both properties when implements greetable

class Person2 implements Greetable {
  name: string;
  age = 30;

  constructor(name: string) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, I'm ${this.name}! `);
  }
}

//interfaces as function types

// refresher using type

type AddFN = (a: number, b: number) => number;

let add: AddFN;

add = (n1: number, n2: number) => {
  return n1 + n2;
};

//using interface
interface AddFN2 {
  (a: number, b: number): number;
}

let add2: AddFN2;
add2 = (n1: number, n2: number) => {
  return n1 + n2;
};

// optional parameters & properties

//the question mark means this parameter or property is optional


interface Named3 {
  readonly name?: string;
}

interface Greetable3 extends Named3 {
  greet(phrase: string): void;
}

class Person3 implements Greetable3 {
  name?: string;
  age = 30;

  constructor(name?: string) {
    if (name) {
      this.name = name;
    }
  }

  greet() {
    console.log(`Hello, I'm ${this.name}! `);
  }
}
