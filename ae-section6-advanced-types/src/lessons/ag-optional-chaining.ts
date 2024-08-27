// optional chaining

const fetchedUserData = {
  id: 'u1',
  name: 'Mateus',
  job: { title: 'CEO', description: 'My own company'}
}

console.log(fetchedUserData.job.title)
console.log(fetchedUserData?.job?.title) // is a safe way of trying to access a property that it might doesnt exist, it returns undefined instead of throwing an error 

//or these examples as well
console.log(13 ?? "não encontrado") // 13
console.log(0  ?? "não encontrado") // 0

console.log("Dri"  ?? "não encontrado") // "Dri"
console.log(""     ?? "não encontrado") // ""

console.log(true  ?? "não encontrado") // true
console.log(false ?? "não encontrado") // false

console.log(undefined ?? "não encontrado") // "não encontrado"
console.log(null      ?? "não encontrado") // "não encontrado"
