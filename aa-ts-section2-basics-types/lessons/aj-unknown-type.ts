// unknown type

let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max';

// userName = userInput => will cause error because userName expect a type string, if we check the type with the if case, we can set this variable, like this

if(typeof userInput === 'string'){
  userName = userInput
} // will not cause compilation error