function add(n1: number, n2: number): number{ // this is the explicit return type inference, it's not that recommended to use, instead, let TS infer the return type
  return n1 + n2;
}


function printResult(num: number){
  console.log('Result: ' + num) // this is a void return, because doesn't return anything 
}

printResult(add(4, 3))

// when you use a return value of a function that doesn't return anything, you get undefined



// function as types 

let combinedValues: Function;

combinedValues = add;
// combinedValues = 5 if we take of the type Function, this variable will accep the 5 as value, because it is "any" type

console.log(combinedValues(8, 8))

// a recommended way to declare a function type:

let combinedValues2 : () => number; // this function doesn't receive any parameter and returns a number
let combinedValues3 : (n1: number, n2: number) => number; // this function receive parameters of type number and returns a number
//and then this variable will need fit a function that match these requirements 


// function & callbacks

function addAndHandle(n1: number, n2: number, cbFunction: (num: number) => void){
  const result = n1 + n2;
  cbFunction(result)
}

addAndHandle(1, 2, (result) => {
  console.log(result)
})

addAndHandle(1, 2, printResult)

//function types
type AddFN = (a: number, b: number) => number;

let add: AddFN;

add = (n1: number, n2: number) => {
  return n1 + n2
}