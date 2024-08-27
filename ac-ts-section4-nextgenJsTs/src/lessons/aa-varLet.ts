// https://compat-table.github.io/compat-table/es6/ => hints for resources/features that is supported by the browser

const userName = 'Mateus';

// userName = 'Maciulevicius'

let age = 24;

age = 25;

function add(a: number, b:number){
  let result;
  result = a + b
  return result
}

if(age > 20){
  // var isOld = true; 
  let isOld = true; 
}

// console.log(isOld) /*it worsk because var is declared globally, but it's not correct, with let doesn't work because let is limited on that if scope */