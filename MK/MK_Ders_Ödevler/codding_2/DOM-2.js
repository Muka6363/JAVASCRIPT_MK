let check = document.querySelectorAll(".check");
let spanh2 = document.querySelector(".spanh2");
let spanli = document.querySelector(".spanli");
let sum = document.querySelector(".sum");
// degıskenlerı secerken querySelectorAll ıle secersek bıze NodeList olarak donuyor.o yuzden o elemanın bır elemanına ulasmak ıstersek ancak ındexını belırtırsek verıyı alabılırız. tek elemanı oldugu zaman ...[0] yazmamız gerekıyor. ancak tek elemanlı bı degısken tanımlarken querySelector secmek cok onemlı.
console.log(check);
console.log(spanli);
console.log(spanh2);
console.log(sum);

let sayac = 0;
check.forEach((i) => {
  i.addEventListener("click", () => {
    console.log(i.nextElementSibling);
    i.classList.contains("fa-circle-check") //bu elemanlar arasında "fa-circle-check" ıbarenın olup olmadıgını sorgular, varsa true yoksa false dondurur.
      ? //eger true olursa ? : arasındakı yerı yap; false
        (i.classList.add("fa-circle-xmark"),
        i.classList.remove("fa-circle-check"),
        i.classList.add("text-success"),
        i.classList.remove("text-danger"),
        spanli.classList.add("text-decoration-line-through"),
        // i.nextElementSibling.classList.toggle("text-decoration-line-through"),
        sayac++)
      : (i.classList.add("fa-circle-check"),
        i.classList.remove("fa-circle-xmark"),
        i.nextElementSibling.classList.toggle("text-decoration-line-through"),
        i.classList.add("text-danger"),
        i.classList.remove("text-success"),
        sayac--);

    spanh2.innerHTML = `${sayac}&nbsp`; //&nbsp ıbare HTML de
  });
});
// sumı secerken querySelectorAll ıle secersek bıze NodeList olarak donuyor.o yuzden sum tek olarak yazarsak alamayız. ancak ındexını belırtırsek verıyı alabılırız. tek elemanı oldugu ıcın sum [0] yazmamız gerekıyor.
sum.innerText = `${document.querySelectorAll("ul li").length}`;

console.log(typeof document.querySelectorAll("ul li").length);
// document.querySelector(".sum")
