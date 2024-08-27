// readonly properties, doesn't allow a property can be modified after declared

class Department4 {
  // private readonly id: string
  // private name: string

  private employees: string[] = [] 

  constructor(private readonly id: string, public name: string){
    this.id = id
    this.name = name 
  }

  describe(this: Department4){
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

const management4 = new Department4('d1', 'Management');

management4.addEmployee('Mateus')
management4.printEmployeeInformation()
management4.describe();