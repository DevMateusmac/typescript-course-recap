// static methods and properties

// Math is an example of static method, you don't need to declare => const math = new Math, you just need to call Math



class Department8 {
  protected employees: string[] = [];
  static fiscalYear = 2020

  constructor(private readonly id: string, public name: string) {
    this.id = id;
    this.name = name;
    //console.log(this.fiscalYear) // this doesn't work
    console.log(Department8.fiscalYear) // this works
  }


  static createEmployee(name: string){
    return {name}
  }

  describe(this: Department8) {
    console.log(`Department: ${this.name}, id: ${this.id}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

// how to call static methods: you refer the class directly

const employee1 = Department8.createEmployee('Mateus')
console.log(employee1, Department8.fiscalYear)


class AccountingDepartment3 extends Department8 {
  private lastReport: string

  get mostRecentReport(){
    if(this.lastReport){
      return this.lastReport;
    }
    throw new Error('No report found');
  }

  set mostRecentReport(value: string){
    this.addReport(value)
  }

  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0]
  }

  addEmployee(name: string){
    if(name === 'Mateus'){
      return console.log("Mateus isn't suitable for this role.")
    }
    this.employees.push(name) 
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text
  }

  printReports() {
    console.log(this.reports);
  }
}

const accounting3 = new AccountingDepartment3("d3", []);
accounting3.describe();
accounting3.addEmployee('Mateus')
accounting3.addEmployee('John')
accounting3.printEmployeeInformation()
accounting3.addReport("this is a first report");
accounting3.mostRecentReport = 'testing'
accounting3.mostRecentReport
accounting3.printReports();
