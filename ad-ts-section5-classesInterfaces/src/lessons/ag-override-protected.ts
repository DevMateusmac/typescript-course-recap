// overriding properties/ protected modifier

class Department6 {
  protected employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    this.id = id;
    this.name = name;
  }

  describe(this: Department6) {
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

class ItDepartment1 extends Department6 {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "TI");
    this.admins = admins;
  }
}

const it1 = new ItDepartment1("d2", ["Mateus"]);

// it1.addEmployee('John')
// it1.describe()




// now i'm overriding the addEmployee method
class AccountingDepartment1 extends Department6 {
  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
  }

  addEmployee(name: string){
    if(name === 'Mateus'){
      return console.log("Mateus isn't suitable for this role.")
    }
    this.employees.push(name) // in this case employees is a private property, so it can't be accessed, it's available only on the Department class, if we change tp protected, then we can access this property, because it will be able to access on classes that inherit this property
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  printReports() {
    console.log(this.reports);
  }
}

const accounting1 = new AccountingDepartment1("d3", []);
accounting1.describe();
accounting1.addEmployee('Mateus')
accounting1.addEmployee('John')
accounting1.printEmployeeInformation()
accounting1.addReport("this is a first report");
accounting1.printReports();
