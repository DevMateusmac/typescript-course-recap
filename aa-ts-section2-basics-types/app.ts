// never type

// function generateError(message: string, code: number){
//   throw {message: message, errorCode: code}
// }

function generateError(message: string, code: number): never{
  throw {message: message, errorCode: code}
} 

const result = generateError('An error occurred!', 500)
console.log(result) // will not show undefined, this function never return something, is a 'crash' function that throws an error, is of type never