//type casting 

//two ways of using type casting, generic or using 'as'

// const userInputElement = <HTMLInputElement>document.getElementById('user-input')!;
const userInputElement = document.getElementById('user-input')! as HTMLInputElement;

userInputElement.value = 'Hi there!'

//or using if verification

const userInputElement2 = document.getElementById('user-input');

if(userInputElement2){
  (userInputElement2 as HTMLInputElement).value = 'Hi there!' // it must be inside parentheses, or ts will detect syntaxe errors
}


//when you use queryselector, then TS is able to identify, because of "p" tag for example, that tells ts the element is a paragraph 

// ! using exclamation mark it tells ts that the element will not be 'null'

//using the id selector, it doesn't tells the proper element, just that is an 'HTMLElement' so, type casting is useful here

// type casting helps the dev tell TS the type when ts isn't able to detect the type of element/data
//at the dom for example, the case above, there are two ways to identify an input element  