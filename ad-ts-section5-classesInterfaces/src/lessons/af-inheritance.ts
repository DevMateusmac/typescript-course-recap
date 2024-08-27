// inheritance

class Department5 {
  private employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    this.id = id;
    this.name = name;
  }

  describe(this: Department5) {
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

class ItDepartment extends Department5 {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "TI");
    this.admins = admins;
  }
}

const it = new ItDepartment1("d2", ["Mateus"]);

// it.addEmployee('John')
// it.describe()

class AccountingDepartment extends Department5 {
  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  printReports() {
    console.log(this.reports);
  }
}

const accounting = new AccountingDepartment1("d3", [
  "this is a first report",
  "this is a second report",
]);
accounting.addReport("this is a third report");
accounting.printReports();
accounting.describe();
