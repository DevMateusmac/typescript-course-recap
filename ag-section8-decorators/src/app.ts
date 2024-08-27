function Logger(constructor: Function) {
  console.log("Logging...");
  console.log(constructor);
}

@Logger
class Person {
  name = "Mateus";

  constructor() {
    console.log("Creating person object2...");
  }
}

const pers = new Person();
console.log(pers);

// decorator factories

function Logger2(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  return function (constructor: Function) {
    const hookEl = document.getElementById(hookId);
    const pers = constructor();
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector("h1")!.innerText = pers.name;
    }
  };
}

// @Logger2('LOGGING - PERSON')
@Logger2("Logging")
@WithTemplate("<h1>My Person Object</h1>", "app") // decorators are executed bottom-up
class Person2 {
  name = "Mateus2";

  constructor() {
    console.log("Creating person object2...");
  }
}

// ------------------------------- property decorators

function Log(target: any, propertyName: string) {
  console.log("Property decorator!");
  console.log(target, propertyName);
}

class Product {
  @Log // property decorators are executed when the class is defined in js, basically when the property is defined as well
  title: string;
  private _price: number;

  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error("Invalid price - should be positive!");
    }
  }

  constructor(title: string, price: number) {
    this.title = title;
    this._price = price;
  }

  getPriceWithTax(tax: number) {
    return this._price * (1 + tax);
  }
}

// ---------------------------- accessor / parameter decorator

function Log2(target: any, name: string, description: PropertyDescriptor) {
  console.log("Accessor decorator!");
  console.log(target, name, description);
}

function Log3(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("Method decorator!");
  console.log(target, name, descriptor);
}

function Log4(target: any, name: string, position: number) {
  console.log("Parameter decorator!");
  console.log(target, name, position);
}

class Product2 {
  title: string;
  private _price: number;

  @Log2
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error("Invalid price - should be positive!");
    }
  }

  constructor(title: string, price: number) {
    this.title = title;
    this._price = price;
  }

  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax);
  }
} // decorators are executed only when the class is defined, not when the class is istanciated

// -------------------------- returning and changing class in class decorator
function Logger3(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplate2(template: string, hookId: string) {
  return function<T extends {new(...args: any[]): {name: string}}> (originalConstructor: T) {
    return class extends originalConstructor {
      constructor(..._: any[]) {
        super();
        console.log('Rendering template')
        const hookEl = document.getElementById(hookId);
        if (hookEl) {
          hookEl.innerHTML = template;
          hookEl.querySelector("h1")!.innerText = this.name;
        }
      }
    };
  };
}

@Logger3('Logging class decorator')
@WithTemplate2('<h1>My Person Object</h1>', 'app')
class Person3 {
  name = "Mateus3";

  constructor() {
    console.log("Creating person object3...");
  }
}

const pers3 = new Person3();










//------------------ creating an autobind decorator


function Autobind(_target: any, _methodName: string, descriptor: PropertyDescriptor){
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable:  true,
    enumerable: false,
    get(){
      const boundFn = originalMethod.bind(this);
      return boundFn
    }
  }
  return adjDescriptor
}


class Printer{
  message = 'This works!'
  
  
  @Autobind
  showMessage(){
    console.log(this.message);
  }
}


const p = new Printer();

const button = document.querySelector('button')!;
button.addEventListener('click', p.showMessage);




// ------------------ validation with decorators

interface ValidatorConfig {
  [property: string]: {
    [validatableProp: string]: string[]
  }
}


const registeredValidators: ValidatorConfig = {};

function Required(target: any, propName: string) { // we dont get descriptor for properties
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: [...(registeredValidators[target.constructor.name]?.[propName] ?? [], 'required')]
  };
}

function PositiveNumber(target: any, propName: string){
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: [...(registeredValidators[target.constructor.name]?.[propName] ?? []), 'positive']
  };
}

function validate(obj: any){
  const objValidatorConfig = registeredValidators[obj.constructor.name];

  if(!objValidatorConfig){
    return true
  }

  let isValid = true;

  for(const prop in objValidatorConfig){
    for (const validator of objValidatorConfig[prop]){
      switch(validator){
        case 'required':
          isValid = isValid &&!!obj[prop];
          break
        case 'positive':
          isValid = isValid && obj[prop] > 0;
          break
      }
    }
  }
  return isValid;
}



class Course{
  @Required
  title: string;
  @PositiveNumber
  price: number;

  constructor(title: string, price: number){
    this.title = title
    this.price = price
  }
}

const courseForm = document.querySelector('form')!;

courseForm.addEventListener('submit', ev => {
  ev.preventDefault();
  const titleEl = document.getElementById('title') as HTMLInputElement;
  const priceEl = document.getElementById('price') as HTMLInputElement;


  const title = titleEl.value;
  const price = +priceEl.value;


  const createdCourse = new Course(title, price)

  if(!validate(createdCourse)){
    console.log('Invalid input, please try again!')
  }
  console.log(createdCourse)
})
