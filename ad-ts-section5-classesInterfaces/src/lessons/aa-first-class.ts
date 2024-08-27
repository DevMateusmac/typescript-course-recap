class Department {
  // name: string = 'default';
  name: string;

  constructor(n: string){
    this.name = n
  }
}

const management = new Department('Management');

console.log(management)