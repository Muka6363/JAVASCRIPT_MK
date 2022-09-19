const input = document.querySelector(".input");
const buton1 = document.querySelector(".buton1");
const myul = document.querySelector(".myul");
const liste = document.querySelector(".liste");
let total = document.querySelector(".total");
const newElement = document.createElement("ul");
const buton2 = document.querySelector(".buton2");
const btnSil = document.querySelector(".trash");

myul.appendChild(newElement);

total = 0;
buton1.addEventListener("click", () => {
  if (!input.value) {
    alert("lütfen bir seyler yazınız...");
  } else {
    total += 1;
    myul.innerHTML += `<li class="myli"> <button class="check"> <i class="fa-solid fa-check"></i></button>${input.value}<button class="trash"><i class="fa-solid fa-trash-can"></i> </button>
</li>`;
    input.value = "";
    input.focus();
  }
});
// document.querySelector(".check").addEventListener("click", () => {});

// btnSil.addEventListener("click", () => {});
