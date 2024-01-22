// array

const myArray = [0, 1, 2, 3, 4, 5];
const myArr = ["shaktiman", "naagraj", "ironman", "thanos", "spiderman", "batman"];

const myArr2 = new Array(1, 2, 3, 4);
//  console.log(myArr.length);

// Array methods

//  myArr.push(6);
//  myArr.push(7);
//  myArr.pop();

// myArr.unshift(0);
// myArr.shift();

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(4));

// const newArr = myArr.join();
// console.log(newArr, typeof newArr);
// console.log(myArr);

// slice, splice

console.log("A ", myArr);

const myArr1 = myArr.slice(1, 3);

console.log(myArr1);
console.log("B ", myArr);

const myNewArr = myArr.splice(1, 3);
console.log(myArr);
console.log(myNewArr);