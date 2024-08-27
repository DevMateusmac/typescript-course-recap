// const person = {
//   name: 'Mateus',
//   age: 24,
//   hobbies: ['Sports', 'Cooking', 'Gaming'],
//   role: [2, 'author'] // in this case, ts will accept any amount of data of type number or string, but if we want just 2 elements of type number and string we would need to declare like this below
// };


const person: {
  name: string;
  age: number;
  hobbies: string[],
  role: [number, string] // => like this, this is a tuple, if we set any other value, ts will complain about it, because we want just two elementos in this array
} = {
  name: 'Mateus',
  age: 24,
  hobbies: ['Sports', 'Cooking', 'Gaming'],
  role: [2, 'author']
};