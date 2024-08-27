//spread operator (...)

const hobbies = ['Sports', 'Cooking']

// const activeHobbbies = ['Gaming']
const activeHobbbies = ['Gaming', ...hobbies]

// activeHobbbies.push(hobbies[0], hobbies[1])
activeHobbbies.push(...hobbies) // same effect as the method above, and works as below as well



//it works with objects as well

const person = {
  name: 'Mateus',
  age: 24
};

const copiedPerson = person // 'copy' the object, but in this case just create a pointer to the same memory address, if you change something, it will change the original object as well

const copiedPerson2 = {...person, teste: 'test'} // in this case will copy to a new object and create a new property in the object

console.log(copiedPerson, copiedPerson2)




// rest parameters 

// a flexible way of passing an undefined quantity of parameters, so you don't need to guess the quantity

const add5 = (...numbers: number[]) => {
  const result = numbers.reduce((prevSum, number) => prevSum + number, 0)
  return result
}
const addedNumbers = add5(1,2,3,4,5)
console.log(addedNumbers)