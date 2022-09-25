const calculator = document.querySelector(".islem");
console.log(calculator);

let array = [];
let islem = "";

document.querySelector(".container3").addEventListener("click", (e) => {
  if (e.target.classList.contains("btnNo")) {
    if (calculator.innerText == "0") {
      calculator.innerText = e.target.innerText;
    } else {
      calculator.innerText += e.target.innerText;
    }
  } else if (e.target.classList.contains("btnIslem")) {
    array.push(calculator.innerText);
    console.log(array);

    if (array.length == 3) {
      calculator.innerText = hesapla(array);
      array = [];
      array.push(calculator.innerText);
    }

    islem = e.target.innerText;
    calculator.innerHTML += islem;
    array.push(islem);
    console.log(array);
  } else if (e.target.classList.contains("btnOpposite")) {
    // if (!array.includes(calculator.innerText)) {

    // }
    array.push(calculator.innerText);

    if (array.length == 3) {
      calculator.innerText = hesapla(array);
      array = [];
    }
  } else if (e.target.classList.contains("btnAc")) {
    calculator.innerText = "0";
    array = [];
    console.log(array);
  }
});

function hesapla(array) {
  let islem1 = array[1];
  let sayı1 = array[2].split(islem1);
  console.log(sayı1);

  switch (islem1) {
    case "+":
      return Number(sayı1[0]) + Number(sayı1[1]);

    case "-":
      return sayı1[0] - sayı1[1];

    case "x":
      return sayı1[0] * sayı1[1];

    case "÷":
      return sayı1[0] / sayı1[1];

    case "%":
      return (sayı1[0] * sayı1[1]) / 100;

    default:
      "";
  }
}
