# JS Quiz

```js
const accounts = [
	{acctNo: 123, type: 'Checking', balance: 150},
	{acctNo: 234, type: 'Checking', balance: 200},
	{acctNo: 345, type: 'Savings', balance: 550},
	{acctNo: 456, type: 'Checking', balance: 550},
	{acctNo: 567, type: 'Savings', balance: 1500}
];
```
### Assuming the above accounts objects, list the most **suitable** method to use for the following tasks:

> Hint: Each method is only used once below

#### Q1) Create a new array containing the _account_ objects that have a `balance` greater than a certain amount.  

#### A1) filter
<br>

#### Q2) Access the _account_ object having an `acctNo` equal to a certain number.

#### A2) find
<br>

#### Q3) Check if there are any _accounts_ with a negative `balance`.

#### A3) some
<br>

#### Q4) Console.log all of the _accounts_.

#### A4) forEach
<br>

#### Q5) Create a new array containing a string (such as "Account 123 has a balance of $150") for each of the _accounts_ objects.

#### A5) map
<br>

#### Q6) Compute the sum of the balances for _accounts_ of `type` equal to 'Savings'.

#### A6) reduce
<br>

#### Q7) Check if all of the _accounts_ have a `balance` greater than a certain number.

#### A7) every
<br>


### More Questions...

#### Q8) Does the following code work properly? Will this return true or false?

```javascript
function isPalindrome(str){
  var reverseText = str.split('').reverse().join('');
  return str == reverseText;
}

isPalindrome('hannah');
```
#### A8) true

#### Q9) We have a timer function that returns a Promise that resolves after a random amount of time. We use Promise.all to resolve an array of timers. What gets logged? Do we know or is it random?

```javascript
const timer = a => {
  return new Promise(res =>
    setTimeout(() => {
      res(a);
    }, Math.random() * 100)
  );
};

const all = Promise.all([
  timer('first'),
  timer('second')
]).then(data => console.log(data));
```
#### A9) ["first", "second"]


#### Q10) What is returned from the following console.log?

```javascript
let dog = {
    breed: "Border Collie",
    sound: "Wooh",
    getBreed: () => { 
        return this.breed;
    },
    getSound: function() {
        return this.sound;
    }
};
console.log(dog.getBreed(), dog.getSound());
```
#### A10) undefined  Wooh

#### Q11) When running JavaScript in the browser, what gets logged when we try to call myFunction()? myFunction, Window, or undefined?

```javascript
function myFunction() {
  console.log(this);
}
myFunction();
```
#### A11) Window


#### Q12) In what order will the numbers 1-4 be logged to the console when the code below is executed?

```javascript

(function() {
  console.log(1);
  setTimeout(function() {
    console.log(2);
  }, 1000);
  setTimeout(function() {
    console.log(3);
  }, 0);
  console.log(4);
})();

```
#### A12) 1 4 3 2


#### Q13) What is the return of the following console.log?

```javascript
const n = 5;

console.log(1..n); // ?
```
#### A13) undefined

#### Q14) What gets logged when we test the following equality scenarios?

```javascript
const a = c => c;
const b = c => c;

console.log(a == b);
console.log(a(7) === b(7));
```
#### A14) false  true


#### Q15) Let's display some notifications to our user! What gets logged in the following snippet?

```javascript
const notifications = 1;

console.log(
  `You have ${notifications} notification${notifications !== 1 && 's'}`
);
```
#### A15) You have 1 notificationfalse


#### Q16) Given an array of fruits, after slice method is applied, what will the result be?

```javascript
var fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
var citrus = fruits.slice(1, 3);
console.log(citrus)
```
#### A16) ['Orange', 'Lemon']


#### Q17) When setting variables equal to each other and then changing one of them, does it change the other? Consider the following code. What is logged?

```javascript
let a1 = {
  name: 'Johnny',
  hobby: 'football'
};

let b1 = 'Lisa prefers Johnny';
let c1 = ['Denny', 'Michelle', 'Chris R'];
let a2 = a1;
let b2 = b1;
let c2 = c1;

a2.hobby = 'roofsitting';
b2 = 'Lisa prefers Mark';
c2[2] = 'Doggy';

console.log(a1.hobby);
console.log(b1);
console.log(c1[2]);
```
#### A17) roofsitting   Lisa prefers Johnny   Doggy

#### Q18) Consider the following block of code. What gets logged?

```javascript
var a = [9];
var b = [10];

console.log(a == 9);
console.log(b == 10);
console.log(a < b);
```
#### A18) true  true  false

#### Q19) What would be the output of the following three console.logs?

```javascript
function withVar() {
    const b = () => a;
    var a = 24;
    return b;
}

function withLet() {
	const b = () => a;
	let a = 24;
	return b;
}

function changingValue() {
	let a = 24;
	const b = () => a;
	a = 42;
	return b;
}

console.log(withVar()())  // ??
console.log(withLet()())  // ??
console.log(changingValue()())  // ??
```
#### A19) 24 24 42

#### Q20) Consider the following async function and its output, what will be displayed to the console when calling the f() function?

```javascript
async function f() {
  let result = 'first!';
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('done!'), 1000);
  });

  result = await promise;

  console.log(result);
}

f();
```
#### A20) done!


#### Q21) What does this snippet of code return?

```javascript
function ArrayBoolean(){
  if([] && [1])
    return [true, true]
  else if([] && ![1])
    return [true,false]
  else if(![] && [1])
    return [false,true]
  else
    return [false,false]
}

ArrayBoolean()
```
#### A21) [true, true]


#### Q22) Consider the following array of objects... okay, well one object. What happens when we spread that array and change the firstName property on the 0-index object?

```javascript
const arr1 = [{ firstName: 'James' }];
const arr2 = [...arr1];
arr2[0].firstName = 'Jonah';

console.log(arr1);
```

#### A22) [{ firstName: "Jonah" }]


#### Q23) Consider the following variables. What gets logged?

```javascript
var a = [1, 2, 3];
var b = [1, 2, 3];
var c = '1,2,3';

console.log(a == c);
console.log(b == c);
console.log(a == b);
```

#### A23) true, true, false

#### Q24) Consider the following arrays. What gets logged in various sorting conditions?

```javascript
const arr1 = ['a', 'b', 'c'];
const arr2 = ['b', 'c', 'a'];

console.log(
  arr1.sort() === arr1,
  arr2.sort() == arr2,
  arr1.sort() === arr2.sort()
);
```

#### A24) true true false


#### Q25) What gets logged?

```javascript
const arr = [
  x => x * 1,
  x => x * 2,
  x => x * 3,
  x => x * 4
];

console.log(arr.reduce((agg, el) => agg + el(agg), 1));
```

#### A25) 120

#### Q26) What gets logged in the following scenario?

```javascript
console.log(2 + "1");
console.log(2 - "1");
```

#### A26) "21" 1