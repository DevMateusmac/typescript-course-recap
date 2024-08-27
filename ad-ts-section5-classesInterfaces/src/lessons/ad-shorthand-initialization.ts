//shorthand to initialize directly on the constructor without setting properties out of it first
class Department3 {
  private employees: string[] = [] 

  constructor(private id: string, public name: string){
    // this.id = id
    // this.name = name => it works when these props inside of constructor are omited as well.
  }

  describe(this: Department3){
    console.log(`Department: ${this.name}, id: ${this.id}`);
  }

  addEmployee(employee: string){
    this.employees.push(employee);
  }

  printEmployeeInformation(){
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const management3 = new Department3('d1', 'Management');

management3.addEmployee('Mateus')
management3.printEmployeeInformation()
management3.describe();