//! given array = [10, 5, 2, 7, 8, 7] and k = 3,
//! get: [10, 7, 8, 8],
// since:
// 10 = max(10, 5, 2)
// 7 = max(5, 2, 7)
// 8 = max(2, 7, 8)
// 8 = max(7, 8, 7)

//! Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
//! Output: [3,3,5,5,6,7]
// Explanation:
// Window position                Max
// ---------------               -----
// [1  3  -1] -3  5  3  6  7       3
//  1 [3  -1  -3] 5  3  6  7       3
//  1  3 [-1  -3  5] 3  6  7       5
//  1  3  -1 [-3  5  3] 6  7       5
//  1  3  -1  -3 [5  3  6] 7       6
//  1  3  -1  -3  5 [3  6  7]      7

const array1 = [10, 5, 2, 7, 8, 7];
const k1 = 3;

const array = [1, 3, -1, -3, 5, 3, 6, 7];
const k = 3;

const SlidingWindowMaximum = (array, k) => {
  let arr = [];
  for (let i = 0; i <= array.length - k; i++) {
    //   console.log(array.slice(i, i + k));
    arr.push(Math.max(...array.slice(i, i + k)));
    // console.log(...array.slice(i, i + k));
    // console.log(array.slice(i, i + k));
    //spread
  }
  return arr;
};

console.log(SlidingWindowMaximum(array, k));
console.log(SlidingWindowMaximum(array1, k1));
// let arr = [];
// for (let i = 0; i <= array.length - k; i++) {
//   // console.log(Math.max(array.slice(i, i + k)));
//   // console.log(array.slice(i, i + k));
//   arr.push(Math.max(...array.slice(i, i + k)));
//   // console.log(...array.slice(i, i + k));
//   // console.log(array.slice(i, i + k));
//   //spread
// }

//********** 2 **********

// let modal = document.querySelector("#result");
// setTimeout(function () {
//   modal.classList.remove("hidden");
// }, 10000);
// console.log("Results shown");

//********** -3- **********
// var Storm = function () {};
// console.log(Storm);
// Storm.prototype.precip = "rain";
// console.log(Storm.prototype.precip);
// var WinterStorm = function () {};
// console.log(WinterStorm);
// WinterStorm.prototype = new Storm();
// console.log(WinterStorm.prototype);
// WinterStorm.prototype.precip = "snow";
// console.log(WinterStorm.prototype.precip);

// var bob = new WinterStorm();

// console.log(bob.precip);

//********** -4- **********

// function logThis() {
//   this.desc = "logger";
//   console.log(this);
//   return 2;
// }
// asd = new logThis();
// console.log(asd);
// console.log(logThis);

// obje = {
//   asdf: "mklmk",
//   mlkm: "ıjpıjp",
// };
// console.log(obje);

//********** -5- **********
// Aşağıdaki sınıf için, bir X instanceından 42 değerini nasıl alırsınız?

// class X {
//   get Y() {
//     return 42;
//   }
// }
// var x = new X();
// console.log(x.Y);

//********** -7- **********

// var start = 1;
// function setEnd() {
//   var end = 10;
// }
// setEnd();
// console.log(setEnd());
// console.log(end);

//********** -8- **********

// function sayHello() {
//   console.log("hello");
// }
// console.log(sayHello.prototype);

//********** -9- **********
