// function overloads


type Combinable3 = string | number;


//function overload is a way of setting different function signature with the type of the data that must be returned 

// in the example below, you can't know the type that will be returned, so you can't use string methods for example, that's how  function overload helps
function add3 (a: number, b: number): number
function add3 (a: string, b: string): string
function add3 (a: string, b: number): string
function add3 (a: number, b: string): string
function add3 (a: Combinable3, b: Combinable3){
  if(typeof a === 'string' || typeof b === 'string'){
    return a.toString() + b.toString()
  }
  return a + b
}
const result = add3('a', 'a') // we know that we are passing two strings, 
result.split(' ');  // => it causes an runtime error  because the type that will return is string OR number
// with the overload upthere, it doesnt cause erros anymore because ts knows the possibly return types 


// using function overload we can explicity set the variety return types
