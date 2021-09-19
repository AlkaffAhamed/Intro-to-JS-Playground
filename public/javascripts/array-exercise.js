/* eslint-disable */

console.log("array-exercise.js")
/* TODO: create a doubleItem function that accepts an array of number and 
returns an array of equal length but with all of its item double  */
function doubleItem(arr) {
  return arr.map((x) => 2 * x);
}

/* TODO: create an invertSign function that accepts an array of number and 
returns an array of equal length but with all of its item sign inverted */
function invertSign(arr) {
  return arr.map((x) => -x);
}

let a = [2, 1, 3];
console.log(a);
console.log(doubleItem(a));
console.log(invertSign(a));

/*================================================================================
|--------------------------------------------------------------------------------|
================================================================================*/
{
  const participants = [
    { name: 'Abu', idNumber: 'S7282395H', gender: 'male' },
    { name: 'Mary', idNumber: 'T4689018Z', gender: 'female' },
    { name: 'Suzi', idNumber: 'G5512873T', gender: 'female' },
    { name: 'T Chakra', idNumber: 'T8198514B', gender: 'male' }
  ];

  // TODO: assign idNumber of all participants to idNumbers
  const idNumbers = [];
  console.log(idNumbers); // ['S7282395H', 'T4689018Z', 'G5512873T', 'T8198514B']
}

/*================================================================================
|--------------------------------------------------------------------------------|
================================================================================*/
{
  const numbers = [3, -2, 1000, 201, 50, 100, 33, 50, -21];

  // TODO: get the results of multiplication of all the numbers using reduce method
  
  let m1 = numbers.reduce((prev, i) => i * prev, 1);
  //                                             ^--- initial value
  console.log(m1);

  // TODO: get the results of multiplication of all the numbers using for...of loop
  let m2 = 1;
  for (let item of numbers) {
    m2 = m2 * item;
  }
  console.log(m2);
}

/*================================================================================
|--------------------------------------------------------------------------------|
================================================================================*/
{
  const numbers = [3, -2, 1000, 201, 50, 100, 33, 50, -21];

  // TODO: get all the positive numbers (above or equal to 0)
  let f1 = numbers.filter((x) => x >= 0);
  console.log(f1);

  // TODO: get all the odd numbers
  let f2 = numbers.filter((x) => x % 2 == 1);
  console.log(f2);

  // TODO: get all the numbers that is larger before the number before it
  // (exclude first number)
  let f3 = numbers.filter((x, i, a) => a[i] > a[i - 1] && i > 0);
  console.log(f3);
}

/*================================================================================
|--------------------------------------------------------------------------------|
================================================================================*/

{
  const participants = [
    { name: 'Abu', idNumber: 'S7282395H', gender: 'male' },
    { name: 'Mary', idNumber: 'T4689018Z', gender: 'female' },
    { name: 'Suzi', idNumber: 'G5512873T', gender: 'female' },
    { name: 'T Chakra', idNumber: 'T8198514B', gender: 'male' }
  ];

  // TODO: get the names for all participants
  const names = participants.map((row) => row.name);
  console.log(names);

  // TODO: get the id numbers for female participants only
  const girls = participants
    .filter((row) => row.gender === 'female')
    .map((row) => row.idNumber);
  console.log(girls);
}
