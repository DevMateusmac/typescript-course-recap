// ----------------------------- generics ------------------------------------------------

//const names = ['Mateus', 'Mateus 2'];



//const names1: Array<string> = []; // =>its equals to string[]

// generic with promises
//const promise: Promise<string> = new Promise((resolve, reject) => {}) // this means that the type of this promise will return a data of type string, normally, a promise return type 'unknown


// those above are built in generics, bellow is our custom generic 



//-------------------------------------- generic function ---------------------------------

function merge(objA: object, objB: object){
  return Object.assign(objA, objB)
}
console.log({name: 'Mateus'}, {surname: 'Maciulevicius'})



const mergedObj = merge({name: 'Mateus'}, {surname: 'Maciulevicius'})
// here you can't access a property because ts doesn't know which property will exist, because it just returns an object


// but using generics you can tell ts which property based on type that you pass to generic
function merge2<T extends {}, U >(objA: T, objB: U){ // in the lecture, the instructor didnt have to specify the first generic argument to extend object, but here I had to
  return Object.assign(objA, objB)
}

const mergedObj2 = merge2({name:'Mateus'}, {surname:'Maciulevicius'})

// or be even more specific
const mergedObj3 = merge2<{name:string}, {surname: string}>({name:'Mateus'}, {surname:'Maciulevicius'}) // but this is redundant 

console.log(mergedObj2)


// ----------------------------------- working with constraints -------------------------------------------------
// i'm using constraints above, it's when you use extends on the generic type



// --------------------- another generic function -------------------------------------


interface Lengthy {
  length: number
}

// here, TS will complain about length property because it's not clear that generic type have this property, so we can use an interface to set this 
function countAndPrint<T extends Lengthy>(element: T): [T, string]{ // explicity specifying the return type, it tells will have a tuple with generic type T and string
  let descriptionText = 'Got no value.'

  if(element.length === 0) {
    descriptionText = `Got ${element.length} element`
  }else{
    descriptionText = `Got ${element.length} elements`
  }
  return [element, descriptionText]
}
console.log(countAndPrint('Hey, me and Yasmin are dating, I love her!'))
console.log(countAndPrint(['Mateus', 'Yasmin']))




// ------------------- Keyof constraint ---------------------------------

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U){ // this keyof ensure that the second element is a key that really exists on the object 
  return 'Value: ' + obj[key]
}

extractAndConvert({name: 'Mateus'}, 'name')


// ---------------------- generic classes --------------------------------

class DataStorage<T>{
  private data: T[] = []

  addItem(item: T){
    this.data.push(item)
  }

  removeItem(item: T){
    this.data.splice(this.data.indexOf(item), 1)
  }


  getItems(){
    return [...this.data]
  }
}

const textStorage= new DataStorage<string>();

textStorage.addItem('Mateus');
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

const mixedStorage = new DataStorage< string | number>();

// this is a case where should have a little problem when using objects

const objStorage = new DataStorage<object>();

objStorage.addItem({name: 'Mateus1'})

const objToStore = {name2: 'Mateus2'}
objStorage.addItem(objToStore)

objStorage.addItem({name3: 'Mateus3'})

// trying to remove any object but the second one will cause an error, because objects are referenced values, and using this method that removes one object, it will not find the index of the object we actually want to remove, so it will return -1 and remove the last object.

// the right way to remove an object is the second one, that is stored in a variable before, the reference will be the same when you try to remove it from the array.

// to make sure, just check the js docs about objects address in memory 






// -------------------- generic utility types ---------------------------
// for reference => https://www.typescriptlang.org/docs/handbook/utility-types.html

// Partial type

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}


function createCourseGoal(title: string , description: string, date: Date):  CourseGoal {
  // return {title, description, completeUntil: date} => let's supose that I want set it step by step, property by property 

  let courseGoal: Partial<CourseGoal> = {} // this means that all roperties of type are set to optional in the begining and in the end will return a type that represents all props of that given type, in this case CourseGoal
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  
  return courseGoal as CourseGoal
}


// Readonly
//this generic utility 

const names: Readonly<string[]> = ['Mateus1', 'Mateus2']
// names.push('Mateus3') //cause a runtime error because we are saying this array can't be modified, is an array of string with Readonly generic 