console.log("log-sequence.js")
console.log("4 Implementations: setTimeout(), nested setTimeout(), Async-Await, Promise Chain")

// setTimeout()

console.log("setTimeout()")
console.log('Start');

setTimeout(() => {
  console.log('1 second passed');
}, 1000);

setTimeout(() => {
  console.log('another 2 second passed');
}, 3000);

setTimeout(() => {
  console.log('end');
}, 5000);

// Nested setTimeout()

console.log("Nested setTimeout()")
console.log('Start');

setTimeout(() => {
  console.log('1 second passed');
  setTimeout(() => {
    console.log('another 2 second passed');
    setTimeout(() => {
      console.log('end');
    }, 2000);
  }, 2000);
}, 1000);


function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(ms / 1000), ms);
  });
}

// Promise Chain

console.log("Promise Chain")
console.log('Start');

wait(1000)
  .then((s) => {
    console.log(`${s} second passed`);
    return wait(2000);
  })
  .then((s) => {
    console.log(`another ${s} second passed`);
    return wait(2000);
  })
  .then(() => {
    console.log('end');
  });

// Async-Await
// without ; at end of console.log(), there was error
console.log("Async-Await");
(async () => {
  console.log('Start');
  const s1 = await wait(1000);
  console.log(`${s1} second passed`);
  const s2 = await wait(2000);
  console.log(`another ${s2} second passed`);
  await wait(2000);
  console.log('end');
})();
