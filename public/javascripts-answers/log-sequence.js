console.log('Start');

setTimeout(() => {
  console.log('1 sec passed');

  setTimeout(() => {
    console.log('another 2 sec passed');

    setTimeout(() => {
      console.log('End');
    }, 2000);
  }, 2000);
}, 1000);
