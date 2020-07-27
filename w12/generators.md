[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# JavaScript Generators

## Three Kinds of Function in JS
Generators are a third kind of function in JavaScript:
```javascript
// Regular function
function() {}

// Arrow function
()=> {}

// Generator function
function* () {}
```

## Calling Generator Functions & Generator Objects

Generator functions, when called, return *generator objects*. Make sure you're clear on the distinction! The Generator object prototype has three methods: 
```javascript
Generator.prototype.next
Generator.prototype.return
Generator.prototype.throw
```
To call a generator function, we do the following:
  - Create a generator object
  - Call the generator object's `next()` method

Rather than using `return`, Generator functions use `yield`. The difference between `yield` and `return` is that the generator function will *maintain state* between calls. 

Additionally, `next()` returns an object with two keys: `value` and `done`. The `value` property is equal to what the function yields, `done` is if the function is finished returning or yielding values.

## Examples

```javascript
let numberFunction = function() {
  return 1      // All calls return 1
                // This is all the function will ever return
}

let numberGenerator = function*() {
  yield 1       // First call returns {value: 1, done: false}
  yield 2       // Second returns {value: 2. done: false}
                // Third returns {value: undefined, done: true}
}

// Call the function directly
numberFunction()

// Called through the Generator Object
let numberGeneratorObject = numberGenerator()
numberGeneratorObject.next()
```

Here is an example of a finite generator that takes a string as an input, splits
it using whitespace as delimiters, strips out punctuation, converts every word
to lowercase, and yields each word on successive iterations.

```javascript
const wordGenerator = function * (string) {
  const words = string.split(/\s+/)
                      .map(word => word.replace(/\W+/, ''))
                      .map(word => word.toLowerCase())

  for (const word of words) {
    yield word
  }
}

const words = wordGenerator('Hello, World!  This is a finite generator.')

let word = words.next()

do {
  console.log(word.value)

  word = words.next()
} while (!word.done)
```

## Using the Spread Operator
Generator functions can optionally be called using the spread operator: `...`. Note that you use the spread operator on generator functions *directly*, so there is no need to create a generator object!

```javascript
let getNames = function*() {
  yield "Tyler"
  yield "Brock"
  yield "Michael"
}

console.log(...getNames()) // Same as `console.log("Tyler", "Brock", "Michael")`
```

## Generators and Infinite Loops
Generators are useful for functions that would theoretically go on forever. For a function that returns an always-incrementing number:

```javascript
let infiniteNumberGenerator = function*() {
  let n = 0
  while(true) yield n++
}

let infiniteNumbers = infiniteNumberGenerator()
infiniteNumbers.next()
infiniteNumbers.next()
infiniteNumbers.next()
```

Note that if you use an infinitely-looping generator function with the spread operator your program will get stuck in an infinite loop!


## Exercise

Write a finite generator function, fizzBuzzGenerator, that, beginning from 1, yields 'Fizz' if the number is divisible by 3, 'Buzz' if the number is divisible by 5, 'Fizz Buzz' if the number is divisible by 15, and the number itself if none of the previous conditions are met. The generator function should take a parameter, max, that determines the maximum value that should be yielded. Assume that all inputs are valid (natural numbers).


## Resources

-   [Iterators and generators - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators)
-   [function* - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*)
-   [Generator - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator)
-   [yield - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/yield)
