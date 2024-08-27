// objects



// const person = {
//   name: 'Mateus',
//   age: 24
// };


//is not an indicated type of type declaration 
// const person: {
//   name: string;
//   age: number;
// } = {
//   name: 'Mateus',
//   age: 24
// };


// object type inference 
// const person = {
//   name: 'Mateus',
//   age: 24
// };


// nested objects

// const product = {
//   id: string;
//   price: number;
//   tags: string[];
//   details: {
//     title: string;
//     description: string;
//   }
// }



// array


const person = {
  name: 'Mateus',
  age: 24,
  hobbies: ['Sports', 'Cooking', 'Gaming'] // type inference -> string[]
};


let favoriteActivities: string[]
favoriteActivities = ['Sports']


for(const hobbies of person.hobbies){
  console.log(hobbies)
  console.log(hobbies.toUpperCase())
}