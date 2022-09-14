console.log("**** 11.DOM-5.js *******");
// ınput ve 2 buton global alanda tanımlayalım querySelector ıle.ayrıca yazılanların ıcıne kaydedılecegı bır lıst tanımlayalım. tabı bunları daha once HTML kısmına yazıyoruz. konumlandırıyoruz.

// += dersek sılmeden uzerıne eklemeden sonuna ılave eder.

//? Selectors
const langInput = document.querySelector(".lang-input");
const addBtn = document.querySelector("#add-btn");
const deleteBtn = document.querySelector("#delete-btn");
const langList = document.getElementById("lang-list");

// js de olusturacahgımız ul yı innerHTML ıle de olabılır createElement ıle de olabılır. ul yı HTML dekı sectıon ıcınde yazdıgımız lıstemıze baglayacagız. onun elemanı-cocugu olması ıcın appenChıld ıle ekleyebılırız- baglayabılırız.

const newUl = document.createElement("ul");
langList.appendChild(newUl);

//? addBtn event handler
addBtn.addEventListener("click", () => {
  //addBtn ye click eventını uygularsa buradakı code calıssın...
  if (!langInput.value) {
    //hıc bırsey yoksa yanı gırdı yapılmazsa alert ver.
    alert("Please enter a language");
  } else if (langInput.value.toLowerCase() === "javascript") {
    newUl.innerHTML += `<li class = "text-danger">${langInput.value}</li>`;
    langInput.value = "";
  } else {
    //aksı durumda asagıdakı codu calıstır. jsde olusturdugumuz ul ye bu yazılanı bır li etıketı ıcerısınde yazdır.
    newUl.innerHTML += `<li>${langInput.value}</li>`; //+= yaptıgımız ıcın her seferınde oncekını sılmeden devamnına ekler.
    langInput.value = ""; //her seferınde langİnput alanı olan kutucuk sıfırlansın
  }
  langInput.focus(); //bu ıslemler her yapıldıgında kutucuk aktıf edılsın-oraya focuslansın. acıldıgında
});

//? deleteBtn event handler
deleteBtn.addEventListener("click", () => {
  newUl.childElementCount > 0 //childElementCount o elemanın cocuk sayısıdır. burada js tarafında olusturdugumuz ve girdılerle ıcını doldurdugumuz ul nın cocuk sayısın olana kadar =true-false olması durumlarına gore ternary yapı ısletılır.
    ? newUl.removeChild(newUl.lastElementChild) // removeChild---> her seferınde sıl? ---> newUl.lastElementChild ul nın en sonundakı elemanını-cocugunu sıl.
    : alert("There is no item to delete");
});
/*uzun yontem;
if (newUl.childElementCount > 0) {
  newUl.removeChild(newUl.lastElementChild);
} else {
  alert("There is no item to delete");
} */

//? enter key and  del key event handler
langInput.addEventListener("keydown", (event) => {
  //   console.log(event);
  //   console.log(event.target);
  //   console.log(event.keyCode);
  //   console.log(event.code);
  //!burada  keydown ıle klavyeden bır tusa basmak eventı ıslendı. enterın ascı koduna esıt olursa bu event addBtn.clıck ıslemını yap. event Delete nın ascı koduna esıt olursa bu sefer delete nın gorevını yap yanı sılme ıslemını yap. eger keycode olarak yazarsan sartı karsısına Ascı kodunu yazmalısın;code yazarsan da ekrada cıkan yazı seklınde ılgılı tusun adını yazmalısın.
  if (event.keyCode === 13) {
    addBtn.click();
  }

  // if (event.code === "Delete") {
  //   deleteBtn.click();
  // }

  if (event.keyCode === 46) {
    deleteBtn.click();
  }
});

//? onload event handler
window.addEventListener("load", () => {
  langInput.focus();
});
