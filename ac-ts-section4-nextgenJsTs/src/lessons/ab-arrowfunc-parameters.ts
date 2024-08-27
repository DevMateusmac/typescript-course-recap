const add1 = function (a: number, b: number) {
  return a + b;
};

const add2 = (a: number, b: number) => {
  return a + b;
};

const add3 = (a: number, b: number) => a + b;

const printOutput: (a: number | string) => void = (output) =>
  console.log(output); // whe using just one parameter you can ommit the parenteses, but using ts you it doesn't work with the type declaration of the parameter that is outpu, so you infer the type declaring the function type before

const button = document.querySelector("button");
if (button) {
  button.addEventListener("click", (ev) => console.log(ev)); // here you don't need to declare the function type, ts knows wich event will be provided
}

// default value for parameters
const add4 = (a: number, b: number = 4) => a + b; // default arguents must always be passed in the last position because ts/js doesn't look for argument position, so if you set a default argument to the first parameter, and set a value when execute the function, ts/js will set this value to the first parameter and ignore the other one
