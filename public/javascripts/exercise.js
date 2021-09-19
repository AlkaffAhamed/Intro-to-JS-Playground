// Exercise 1
console.log("Exercise 1");

let x;
x = 100;

let y = true;
y = false;

const me = {
  firstName: 'Alkaff',
  lastName: 'Ahamed',
  age: 20
};

console.log(x);
console.log(y);
console.log(me);

// Exercise 2
console.log("Exercise 2");

function weeksec() {
  let r = 7 * 24 * 60 * 60;
  return r;
}

function daysec(day) {
  let r = day * 24 * 60 * 60;
  return r;
}
  
console.log(weeksec());
console.log(daysec(10));
console.log('me');
  
// Exercise 3
console.log("Exercise 3");

// Function Declaration
function getRandomInt(min, max) {
  const minValue = Math.ceil(min);
  const maxValue = Math.floor(max);
  return Math.floor(Math.random() * (maxValue - minValue) + minValue);
}

// Arrow Function
const arrowRand = (min, max) => {
  const minValue = Math.ceil(min);
  const maxValue = Math.floor(max);
  return Math.floor(Math.random() * (maxValue - minValue) + minValue);
};

console.log(getRandomInt(12, 115));
console.log(arrowRand(23, 302));

// Anonymous + Immediately Invoked Function (IIFE)
console.log(
  (function (min, max) {
    const minValue = Math.ceil(min);
    const maxValue = Math.floor(max);
    return Math.floor(Math.random() * (maxValue - minValue) + minValue);
  })(10, 900)
);

// Exercise 4
console.log("Exercise 4");

function compute(a, b, oper) {
  switch (oper) {
    case 'add':
      return a + b;
    case 'subtract':
      return a - b;
    case 'multiply':
      return a * b;
    case 'divide':
      return b !== 0 ? a / b : 'Divide by 0?! No Way!';
    default:
      return 'Invalid Operation';
  }
}

console.log(compute(13, 9, 'add'));
console.log(compute(13, 9, 'subtract'));
console.log(compute(13, 9, 'multiply'));
console.log(compute(139, 0, 'divide'));
console.log(compute(13, 9, 'divide'));
console.log(compute(11, 3, 'modulo'));
