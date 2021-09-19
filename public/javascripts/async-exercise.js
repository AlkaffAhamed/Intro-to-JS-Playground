/* eslint-disable */

// TODO: rewrite the following code using Promise instead of callback
function getServerTime(callback) {
  const xmlHttp = new XMLHttpRequest();
  xmlHttp.open('HEAD', window.location.href);
  xmlHttp.setRequestHeader('Content-Type', 'text/html');
  xmlHttp.addEventListener('load', () => {
    callback(xmlHttp.getResponseHeader('Date'));
  });
  xmlHttp.send('');
}

function getServerTimePromise() {
  //                   v------------ the resolve is here
  return new Promise((resolve) => {
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.open('HEAD', window.location.href);
    xmlHttp.setRequestHeader('Content-Type', 'text/html');
    xmlHttp.addEventListener('load', () => {
      // callback() change to resolve()
      resolve(xmlHttp.getResponseHeader('Date'));
      //        ^------------------- this will be the value returned by Promise()
    });
    xmlHttp.send('');
  });
}

//getServerTime((serverDate) => console.log(`Server date is ${serverDate}`));

getServerTimePromise().then((val) => 
{
  console.log(`Server date is ${val}`)
})


/*================================================================================
|--------------------------------------------------------------------------------|
================================================================================*/

// TODO: rewrite the following code using async function
/*
function wait(second) {
  return new Promise((resolve) => setTimeout(resolve, second * 1000));
}

function fetchPricingData() {
  return fetch('/api/pricing').then((res) => res.json());
}

// function fetchDataThenWait() {
//   return fetchPricingData().then((pricingData) => {
//     return wait(1).then(() => pricingData);
//   });
// }

// My answer
// I didnt convert the fetchPricingData() to Async

(async () =>
{
  const pdata = await fetchPricingData()
  const wait1sec = await wait(1)
  return pdata
})()
*/

// Model Answer
function wait(second) {
  return new Promise((resolve) => setTimeout(resolve, second * 1000));
}

async function fetchPricingData() {
  const res = await fetch('/api/pricing');
  return res.json();
}

async function fetchDataThenWait() {
  const pricingData = await fetchPricingData();
  await wait(1);
  return pricingData;
}
