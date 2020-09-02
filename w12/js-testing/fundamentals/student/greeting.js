const greet = (name) => `Hi ${name}`;
const superGreet = (name) => `HEY ${name.toUpperCase()}!!!`;

// these are kinda pointless, but it's just to simulate an async function
const greetAsync = (...args) => Promise.resolve(greet(...args));
const superGreetAsync = (...args) => Promise.resolve(superGreet(...args));

module.exports = { greet, superGreet, greetAsync, superGreetAsync };
