// private constructor => singleton it ensure that you have only one instance of a class



abstract class Department10 {
  protected employees: string[] = [];
  static fiscalYear = 2020

  constructor(protected readonly id: string, public name: string) {
    this.id = id;
    this.name = name;
  }


  static createEmployee(name: string){
    return {name}
  }

  abstract describe(this: Department10): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}


// const employee3 = Department10.createEmployee('Mateus')
// console.log(employee3, Department10.fiscalYear)




class AccountingDepartment5 extends Department10 {
  private lastReport: string
  private static instance: AccountingDepartment5

  get mostRecentReport(){
    if(this.lastReport){
      return this.lastReport;
    }
    throw new Error('No report found');
  }

  set mostRecentReport(value: string){
    this.addReport(value)
  }

  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0]
  }



//accessing this by using static method 
  static getInstance(){
    if(AccountingDepartment5.instance){
      return this.instance
    }
    return this.instance = new AccountingDepartment5('d4', [])
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

// to use this class now
const singleaccounting = AccountingDepartment5.getInstance()
const singleaccounting1 = AccountingDepartment5.getInstance()
console.log(singleaccounting, singleaccounting1)

// now we can have just one instance, even with the other "instance", they are the same



// const accounting5 = new AccountingDepartment5("d3", []); // it doesn't work anymore because the constructor is private

// accounting5.describe();
// accounting5.addEmployee('Mateus')
// accounting5.addEmployee('John')
// accounting5.printEmployeeInformation()
// accounting5.addReport("this is a first report");
// accounting5.mostRecentReport = 'testing'
// accounting5.mostRecentReport
// accounting5.printReports();
// accounting5.describe()
