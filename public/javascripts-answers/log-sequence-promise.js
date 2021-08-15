function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), ms);
  });
}

console.log('Start');

wait(1000)
  .then(() => {
    console.log('1 sec passed');
  })
  .then(() => wait(2000))
  .then(() => {
    console.log('another 2 sec passed');
  })
  .then(() => wait(2000))
  .then(() => {
    console.log('End');
  });
