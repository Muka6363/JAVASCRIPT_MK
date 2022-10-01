function add(n1, n2) {
  return n1 + n2;
}

const WORKING_HOURS_WEEK = 40; // 45 , 30

let counter = 0;
let localCounter = 0;

function inc(amount = 1) {
  counter += amount;
  return counter;
}

function dec(amount = 1) {
  counter -= amount;
  return counter;
}

const moduleName = "Module 1";
// export default moduleName;

export default (num) => num * num;

export {
  WORKING_HOURS_WEEK,
  WORKING_HOURS_WEEK as WHW,
  add as sum,
  inc,
  dec,
  counter,
};

console.log("module 1 is loaded");
