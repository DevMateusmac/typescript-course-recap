// type aliases/custom types


type Combinable = number | string 

type Conversion = 'as-number' | 'as-text'

function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: Conversion
) {
  let result: number | string;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

// function combine(
//   input1: number | string,
//   input2: number | string,
//   resultConversion: 'as-number' | 'as-text' 
// ) {
//   let result: number | string;
//   if (
//     (typeof input1 === "number" && typeof input2 === "number") ||
//     resultConversion === "as-number"
//   ) {
//     result = +input1 + +input2;
//   } else {
//     result = input1.toString() + input2.toString();
//   }
//   return result;
// }

const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);

const combinedStringAges = combine("30", "26", "as-number");
console.log(combinedStringAges);

const combinedNames = combine("Mateus", "Suetam", "as-text");
console.log(combinedNames);



// type to create object 
type User = { name: string; age: number };
const u1: User = { name: 'Max', age: 30 }; 

function greet(user: { name: string; age: number }) {
  console.log('Hi, I am ' + user.name);
}

//or using destructuring
 
function isOlder({age}: User, checkAge: number) {
  return checkAge > age;
}