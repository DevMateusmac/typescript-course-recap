class Department2 {
  name: string;
  private employees: string[] = [] // private means that now this peroperty is acessible just inside the class, a person can't add an employee without using the method addEmployee

  constructor(n: string){
    this.name = n
  }

  describe(this: Department1){
    console.log('Department: ' + this.name);
  }

  addEmployee(employee: string){
    this.employees.push(employee);
  }

  printEmployeeInformation(){
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const management2 = new Department2('Management');

management2.addEmployee('Mateus')
management2.printEmployeeInformation()