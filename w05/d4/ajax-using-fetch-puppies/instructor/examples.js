async function getUsers() {
  const endpoint = 'https://jsonplaceholder.typicode.com/users';
  let users;
  console.log('5');
  try {
    let response = await fetch(endpoint);
    users = await response.json();
    console.log('6');
    return users;
  } catch (err) {
    console.log(err);
  }
  // let users = await fetch(endpoint).then((res) => res.json());
  // console.log(users);
}

console.log('1');
(async function () {
  console.log('2');
  users = await getUsers();
  console.log('3');
  console.log(users);
})();

console.log('4');

/* Examples using nested async function
function fetchStuffAfter5() {
  setTimeout(async function () {
    const endpoint = 'https://jsonplaceholder.typicode.com/users';
    let users;
    try {
      let response = await fetch(endpoint);
      users = await response.json();
    } catch (err) {
      console.log(err);
    }
  }, 5000);
}

fetchStuffAfter5();

fetch('https://jsonplaceholder.typicode.com/users').then(async function (response) {
  console.log('Response back');
  let users = await response.json();
  console.log(users);
});
*/

// Example of immediately rejecting promise
// same as Promise.reject()
const failedPromise = () =>
  new Promise((resolve, reject) => {
    // do some stuff
    // if it worked, resolve
    // if it didn't, I'd reject
    reject(new Error('My rejected promise'));
  });

/* Error example using try catch blocks
async function errorExample() {
  try {
    let x = await failedPromise();
    // let x = await Promise.reject()
    console.log('after promise');
  } catch (err) {
    console.log('inside catch');
    console.error(err);
  }
  console.log('after catch');
}
*/

const exPromise = (num) =>
  new Promise((resolve, reject) => {
    if (num > 5) {
      resolve(num);
    } else {
      reject(new Error('My rejected promise'));
    }
  });

async function errorExample() {
  let x = await exPromise(2).catch((err) => err);
  // let x = await Promise.reject()
  if (x instanceof Error) {
    console.log('Uh oh, error happened');
    return;
  }

  console.log(x);
}

// errorExample();
