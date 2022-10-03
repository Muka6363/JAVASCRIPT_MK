const btn = document.querySelector("#btn");
const input = document.querySelector("#to-do");
const list = document.querySelector("#list");

//? todo app
// btn.addEventListener("click", () => {
//   if (input.value.trim() == "") {
//     alert("boş string girildi");
//   } else {
//     let todoList = `<li><i class="fa-solid fa-check fa-lg"></i> <span>${input.value}</span> <i class="fa-solid fa-trash"> </i></li> `;
//     list.innerHTML += todoList;
//   }
//   input.value = "";
// });

// // input.addEventListener("keydown", (event) => {
// //   console.log(event);
// // });

// list.addEventListener("click", (event) => {
//   if (event.target.classList.contains("fa-trash")) {
//     event.target.parentElement.remove();
//   } else if (event.target.classList.contains("fa-lg")) {
//     event.target.nextElementSibling.classList.toggle(
//       "text-decoration-line-through"
//     );
//     event.target.classList.toggle("text-success");
//     console.log(event.target.nextElementSibling);
//   }
// });

//? Check out page
btn.addEventListener("click", () => {
  if (input.value.trim() == "") {
    alert("boş string girildi");
  } else {
    let amount = `<li class = "liste"><button id="minus"> - </button> <span>${input.value}</span> <button id="plus"> + </button>   &nbsp; &nbsp;&nbsp;<i class="fa-solid fa-trash"> </i></li>  `;
    list.innerHTML += amount;
  }
  input.value = "";
});

list.addEventListener("click", (event) => {
  if (event.target.id == "plus") {
    //   event.target.previousElementSibling.innerText++;
    let plus = event.target;
    let num1 = plus.previousElementSibling;
    num1.innerText++;
    let num2 = plus.parentElement.nextElementSibling.children[1].innerText;
    let toplam = document.querySelector("#toplam");
    toplam.innerText = num1.innerText * num2;
  } else if (event.target.id == "minus") {
    event.target.nextElementSibling.innerText--;
    let minus = event.target;
    let num1 = minus.nextElementSibling;
    num1.innerText--;
    let num2 = minus.closest(".liste").nextElementSibling.children[1].innerText;
    let toplam = minus.closest(".text-center").nextElementSibling;
    toplam.innerText = num1.innerText * num2;
  }
});
