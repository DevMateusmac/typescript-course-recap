// intersection types 

// the same goal coudl be achieved using interfaces

type Admin = {
  name: string;
  privileges: string[];
}

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const user1: ElevatedEmployee = {
  name: 'Mateus',
  privileges: ['server-manager'],
  startDate: new Date()
}




type Combinable = string | number;

type Numeric = number | boolean;

type Universal = Combinable & Numeric