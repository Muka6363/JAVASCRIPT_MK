let card = document.querySelector(".card");
let total1 = document.querySelector(".total1");
let total2 = document.querySelector(".total2");
let totalPrice;
let tax = document.querySelector("#tax");

card.addEventListener("click", (e) => {
  if (e.target.classList.contains("plus")) {
    e.target.previousElementSibling.innerText =
      Number(e.target.previousElementSibling.textContent) + 1;
    let fiyat = e.target.parentNode.parentNode.children[1].textContent
      .trim()
      .split("");
    fiyat.shift();
    fiyat.shift();
    fiyat = fiyat.join("");
    total1.innerText = e.target.previousElementSibling.textContent * fiyat;
    totalPrice = Number(total1.textContent) + Number(total2.textContent);
    tax.innerText = ((totalPrice * 18) / 100).toFixed(2);
  } else if (e.target.classList.contains("minus")) {
    if (e.target.nextElementSibling.textContent == 0) {
      alert("miktar 0 dan küçük olamaz");
    } else {
      e.target.nextElementSibling.innerText =
        Number(e.target.nextElementSibling.textContent) - 1;
      let fiyat = e.target.parentNode.parentNode.children[1].textContent
        .trim()
        .split("");
      fiyat.shift();
      fiyat.shift();
      fiyat = fiyat.join("");
      total1.innerText = e.target.nextElementSibling.textContent * fiyat;
      totalPrice = Number(total1.textContent) + Number(total2.textContent);
      tax.innerText = ((totalPrice * 18) / 100).toFixed(2);
    }
  }
});
