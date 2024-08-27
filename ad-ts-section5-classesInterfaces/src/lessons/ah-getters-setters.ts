//getters and setters


class Department7 {
  protected employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    this.id = id;
    this.name = name;
  }

  describe(this: Department7) {
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




class AccountingDepartment2 extends Department7 {
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

const accounting2 = new AccountingDepartment2("d3", []);
accounting2.describe();
accounting2.addEmployee('Mateus')
accounting2.addEmployee('John')
accounting2.printEmployeeInformation()
accounting2.addReport("this is a first report");
accounting2.mostRecentReport = 'testing'
accounting2.mostRecentReport
accounting2.printReports();
