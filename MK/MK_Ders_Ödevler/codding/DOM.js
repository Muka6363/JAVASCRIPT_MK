const input = document.querySelector("input");
const newElement = document.querySelector("p");
const buton = document.querySelector("button");

const vowel = ["a", "e", "i", "o", "u"];

buton.addEventListener("click", () => {
  let counter = 0;
  let inputValue = input.value.toLowerCase();
  // toLocaleLowerCase orjinal stringi değiştirmesin diye koydum ve küçük harf oluyor o yüzden
  if (!input.value) {
    alert("Please, enter a text...");
  } else {
    for (let i = 0; i < inputValue.length; i++) {
      if (vowel.includes(inputValue[i])) {
        //! includes() metodu, belirtilen değerin dizi öğelerinde olup olmadığını test eder.Metod, belirtilen değerin içinde geçmesini değil, tam olarak eşleşip eşleşmediğini kontrol eder.Eğer aranan değer eşleşiyorsa true eşleşmiyorsa false döner.
        sayac++;
      }
      newElement.innerHTML = `There are ${counter} vowels in <span>${input.value}</span> `;
      input.value = "";
    }
  }
});
