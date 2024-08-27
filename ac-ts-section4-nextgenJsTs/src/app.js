// array & object destructuring 
var hobbies1 = ['Gym', 'Gaming'];
// const hobby1 = hobbies1[0]
// const hobby2 = hobbies1[1]
var hobby1 = hobbies1[0], hobby2 = hobbies1[1]; // same effect as the two lines of code above, you pull the value from the array, and it doesn't affect the original array/object
console.log(hobby1);
console.log(hobby2);
// same for objects
var person1 = {
    name1: 'Mateus',
    surname: 'Maciulevicius',
    age: 24
};
// const name1 = person1.name
var name1 = person1.name1, surname = person1.surname; // same effect as the code above
console.log(name1, surname);
