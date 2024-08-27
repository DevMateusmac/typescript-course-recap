// const person: {
//   name: string;
//   age: number;
//   hobbies: string[],
//   role: [number, string] // => like this, this is a tuple, if we set any other value, ts will complain about it, because we want just two elementos in this array
// } = {
//   name: 'Mateus',
//   age: 24,
//   hobbies: ['Sports', 'Cooking', 'Gaming'],
//   role: [2, 'author']
// };





// enum => adde by ts, automatically enumerated global constant identifiers

// it works, but isn't enum
// const ADMIN = 0;
// const READ_ONLY= 1;
// const AUTHOR = 2;

// const person = {
//   name: 'Mateus',
//   age: 24,
//   hobbies: ['Sports', 'Cooking', 'Gaming'],
//   role: ADMIN
// };


// if(person.role === ADMIN){
//   console.log('is admin')
// }


//with enum
// enum Role {ADMIN, READ_ONLY, AUTHOR}
//IT WORKS AS WELL
enum Role {ADMIN = 'ADMIN', READ_ONLY = 100, AUTHOR = 200}

const person = {
  name: 'Mateus',
  age: 24,
  hobbies: ['Sports', 'Cooking', 'Gaming'],
  role: Role.ADMIN
};

if(person.role === Role.ADMIN){
  console.log('is admin')
}

// any type is the most flexible type, it is not that recomended to use this type