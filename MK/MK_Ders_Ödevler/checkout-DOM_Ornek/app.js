let card = document.querySelector(".card");
let subTotal = document.querySelector("#sub-total");
let tax = document.querySelector("#tax");
let shipping = document.getElementById("shipping");
let son = document.getElementById("son");

card.addEventListener("click", (e) => {
  let price =
    e.target.parentElement.parentElement.children[1].innerText.split(" ")[1];
  let product = e.target.parentElement;
  if (e.target.classList.contains("plus")) {
    e.target.previousElementSibling.innerText =
      Number(e.target.previousElementSibling.innerText) + 1;

    e.target.parentElement.lastElementChild.innerText = (
      e.target.previousElementSibling.innerText * price
    ).toFixed(2);
    let total = document.querySelectorAll(".total1");
    let sum = 0;
    [...total].forEach((item) => (sum += Number(item.textContent)));
    subTotal.innerText = sum.toFixed(2);
    tax.innerText = subTax(sum);
    shipping.innerText = taxCount(sum);
    son.innerText = sonToplam();

    // console.log(total);
    // console.log(ttl);
  } else if (e.target.classList.contains("minus")) {
    e.target.nextElementSibling.innerText != 0 &&
      (e.target.nextElementSibling.innerText =
        Number(e.target.nextElementSibling.innerText) - 1);

    e.target.parentElement.lastElementChild.innerText = (
      e.target.nextElementSibling.innerText * price
    ).toFixed(2);
    let total = document.querySelectorAll(".total1");
    let sum = 0;
    [...total].forEach((item) => (sum += Number(item.textContent)));
    subTotal.innerText = sum.toFixed(2);
    tax.innerText = subTax(sum);

    shipping.innerText = taxCount(sum);
    son.innerText = sonToplam();
    // if( e.target.nextElementSibling.innerText != 0){
    //   e.target.nextElementSibling.innerText =
    // Number(e.target.nextElementSibling.innerText) - 1
    // }
  } else if (e.target.classList.contains("remove")) {
    e.target.previousElementSibling.children[1].innerText = 0;
    e.target.previousElementSibling.lastElementChild.innerText = 0;

    let total = document.querySelectorAll(".total1");
    let sum = 0;
    [...total].forEach((item) => (sum += Number(item.textContent)));
    subTotal.innerText = sum.toFixed(2);
    tax.innerText = subTax(sum);

    shipping.innerText = taxCount(sum);
    son.innerText = sonToplam();
    product.classList.toggle("invisible");
    console.log(e.target.parentElement);
  } else if (e.target.classList.contains("img")) {
    e.target.nextElementSibling.classList.remove("invisible");
    console.log(e.target.parentElement);
  }
});
function subTax(toplam) {
  return ((toplam * 18) / 100).toFixed(2);
}
function sonToplam() {
  return (
    Number(subTotal.innerText) +
    Number(shipping.innerText) +
    Number(tax.innerText)
  ).toFixed(2);
}

function taxCount(sum) {
  /*! 0-200          19
    201 - 400        29
    401- 600         39
    601          kargo bedava
*/
  if (sum > 0 && sum < 200) {
    return 19;
  } else if (sum > 200 && sum < 401) {
    return 29;
  } else if (sum > 400 && sum < 601) {
    return 39;
  } else {
    return 0;
  }
}
