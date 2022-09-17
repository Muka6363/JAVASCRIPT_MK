let inputli = document.querySelectorAll(".inputli");
let spanh2 = document.querySelector(".spanh2");
let spanli = document.querySelectorAll(".spanli");

console.log(spanli);
console.log(inputli);
// spanh2 = 0;
inputli[0].addEventListener("click", () => {
  spanli[0].classList.toggle("text-decoration-line-through");
});
// ********

// ********
// inputli[1].addEventListener("click", () => {
//   spanli[1].classList.toggle("text-decoration-line-through");
// });
// inputli[2].addEventListener("click", () => {
//   spanli[2].classList.toggle("text-decoration-line-through");
// });
// inputli[3].addEventListener("click", () => {
//   spanli[3].classList.toggle("text-decoration-line-through");
// });
​
// inputli.forEach((item) => {
//   inputli[item].addEventListener("click", () => {
//     spanli[item].classList.toggle("text-decoration-line-through");
//   });
//   console.log(item);
// });