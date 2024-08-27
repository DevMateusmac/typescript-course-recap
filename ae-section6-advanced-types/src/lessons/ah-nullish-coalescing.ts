// nullish coalescing 

const userInput = null;

const storedData = userInput || 'DEFAULT'; // returns a fallback in case of falsy value, therefore, if userInput is an empty string, null or undefined, it will return 'DEFAULT' 
const storedData2 = userInput ?? 'DEFAULT'; // nullish coalescing, only if it is just null or undefined that will return 'DEFAULT'

console.log(storedData)
console.log(storedData2)