// class Department1 {
//   // name: string = 'default';
//   name: string;

//   constructor(n: string){
//     this.name = n
//   }

//   describe(){
//     console.log('Department: ' + this.name)
//   }
// }

class Department1 {
  // name: string = 'default';
  name: string;

  constructor(n: string){
    this.name = n
  }

  describe(this: Department1){
    console.log('Department: ' + this.name)
  }
}

const management1 = new Department1('Management');

console.log(management1)
management1.describe()


// const management1Copy = {describe: management1.describe}
// management1Copy.describe()

// in this case it doesn't work because it's a pointer that refers to that class, but the "this" keyword refers to the name property, in the copy, that doesn't exist. To make it work it should declare a parameter in the method in the original class, and then set the type, and after this will cause an error on the copy because explicity tells that needs a 'name" property 

const management1Copy = {name: 'Admin', describe: management1.describe}
management1Copy.describe()