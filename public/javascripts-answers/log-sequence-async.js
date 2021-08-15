function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), ms);
  });
}

// we can't use await outside async function
// so just wrap everything in an async IIFE
(async function logSequence() {
  console.log('Start');

  await wait(1000);

  console.log('1 sec passed');

  await wait(2000);

  console.log('another 2 sec passed');

  await wait(2000);

  console.log('End');
})();
