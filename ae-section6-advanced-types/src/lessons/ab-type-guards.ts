// type guards


type Admin2 = {
  name: string;
  privileges: string[];
}

type Employee2 = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee2 = Admin2 & Employee2;

const user2: ElevatedEmployee2 = {
  name: 'Mateus',
  privileges: ['server-manager'],
  startDate: new Date()
}




type Combinable2 = string | number;

type Numeric2 = number | boolean;

type Universal2 = Combinable2 & Numeric2



function add (a: Combinable2, b: Combinable2){
  if(typeof a === 'string' || typeof b === 'string'){
    return a.toString() + b.toString()
  }
  return a + b
}


type UnknownEmployee = Employee2 | Admin2


function printEmployeeInformation(emp: UnknownEmployee){
  console.log('Name: ' + emp.name)
  if('privileges' in emp){ // it's a built in js feacture this 'in' key so you can check a property
    console.log('Privileges: ' + emp.privileges)
  }
  if('startDate' in emp){ // it's a built in js feacture this 'in' key so you can check a property
    console.log('Start Date: ' + emp.startDate)
  }
}

printEmployeeInformation(user2)
printEmployeeInformation({name: 'Mateus2', startDate: new Date()})


// ways that doesn't work when trying to access privileges property 

// if(emp.privileges) => in TS you can't check a property directly
// if(typeof emp === 'object') => it doesn't work because it doesn't ensure that will have that property
// if(typeof emp === 'Employee') => it doesn't work because this type isn't a valid js type



class Car {
  drive(){
    console.log('Driving...')
  }
}

class Truck {
  drive(){
    console.log('Driving a truck...')
  }

  loadCargo(amount: number){
    console.log('Loading cargo ...' + amount)
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle){
  vehicle.drive()
  if('loadCargo' in vehicle){
    vehicle.loadCargo(1000)
  }
}

// or, use this method instead that is more secure 

function useVehicleSecure(vehicle: Vehicle){
  vehicle.drive()
  if(vehicle instanceof Truck){
    vehicle.loadCargo(1000)
  }
}

useVehicle(v1)
useVehicle(v2)
useVehicleSecure(v1)
useVehicleSecure(v2)