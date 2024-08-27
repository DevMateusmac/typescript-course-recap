//abstract classes

//using abstract classes you can force instances to have their own implementation of  method/props
// abstract classes can not be instanciated



abstract class Department9 {
  protected employees: string[] = [];
  static fiscalYear = 2020

  constructor(protected readonly id: string, public name: string) {
    this.id = id;
    this.name = name;
    console.log(Department9.fiscalYear) 
  }


  static createEmployee(name: string){
    return {name}
  }

  abstract describe(this: Department9): void;
    // abstract methods doesn't have standard implementations and must have the type of return like this above, and if you have anything abstract inside the class, the declaration of this class must be abstract as well

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}


const employee2 = Department9.createEmployee('Mateus')
console.log(employee2, Department9.fiscalYear)





class AccountingDepartment4 extends Department9 {
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


  describe(){
    console.log('Accounting Department - ID:' + this.id)
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

const accounting4 = new AccountingDepartment4("d3", []);
accounting4.describe();
accounting4.addEmployee('Mateus')
accounting4.addEmployee('John')
accounting4.printEmployeeInformation()
accounting4.addReport("this is a first report");
accounting4.mostRecentReport = 'testing'
accounting4.mostRecentReport
accounting4.printReports();
accounting4.describe()
