// index properties


interface ErrorContainer { // this is used when you don't know exacly the name of the property, and you want to let it be flexible 
  [prop: string]: string;
}

// so could be used like this

const errorElementMessage: ErrorContainer = {
  email: 'Not a valid email!',
  username: 'Must start with a capital character!'
} 

// if you have a predifined hardcoded property, the value must be of the same type of flexible property, in the examble above, the property should have a value of type string