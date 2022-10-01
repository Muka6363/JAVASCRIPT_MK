const input = document.querySelector(".input");
const buton1 = document.getElementById("add-btn");
const myul = document.querySelector(".myul");
const liste = document.querySelector(".liste");
let tota = document.querySelector(".tota");
let compl = document.querySelector(".comp");
const newElement = document.createElement("li");
const btnSil = document.querySelector(".trash");
let total = 0;
let completed = 0;
buton1.addEventListener("click", () => {
  if (!input.value) {
    alert("lütfen bir seyler yazınız...");
  } else {
    myul.innerHTML += `<li class="myli d-flex justify-content-between">
    <i class="fa-regular fa-square "></i>
    <span class="">${input.value}</span>
    <i class="fa-solid fa-trash-can"></i>
  </li>`;
    total++;
    input.value = "";
    input.focus();
  }
  tota.innerHTML = `Total: ${total}`;
});
input.addEventListener("keydown", (e) => {
  if (e.keyCode === 13) {
    buton1.click();
  }
});
// keyCode === 13 girildiğinde hem numara bölümündeki enter hemde harflerın ıcındekı diğer enter islem yapabılıyor.
console.log(myul);
myul.addEventListener("click", (e) => {
  console.log(e); //PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}
  console.log(e.target); //
  // target metodu uygulamak ile uygulamamak arasındaki fark: "e" içerisinde "fa-trash-can" class'lı element'e tıklayınca işlem yap demiş oluyoruz.
  if (e.target.classList.contains("fa-trash-can")) {
    e.target.parentElement.remove();
    total--;
    // completed--;
  } else if (e.target.classList.contains("fa-square")) {
    e.target.classList.remove("fa-square", "fa-regular");
    e.target.classList.add("fa-solid", "fa-check");
    e.target.parentElement.classList.add("bg");
    // completed++;
  } else if (e.target.classList.contains("fa-check")) {
    e.target.classList.add("fa-square", "fa-regular");
    e.target.classList.remove("fa-solid", "fa-check");
    e.target.parentElement.classList.remove("bg");
    // completed--;
  }
  // compl.innerHTML = `Completed: ${completed}`;
  tota.innerHTML = `Total: ${total}`;
});

window.addEventListener("load", () => {
  input.focus();
});
const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();
const fullyear = `${year}/${month}/${day}`;
console.log(fullyear);
document.querySelector(".date").innerText = `${fullyear}`;

// nerden gelecegnı bılmedıgımız durumlarda even gonderıyoruz. target belırlenen her yerde target.
// hıcbırsey yazmadan add basarsak alert vermesını ıstersek ıf else yaparız.trim de yaparsak sadece bosluk gırılıp add basılınca da alert vermesını ıf bloguna yazarız.
//  sadece bır yerde ıse ona clıck verıleır.buton gıbı,
//  clıck yepılınca html ımıze eklencek olana verıyı yanı ınput.valueyı dırekt let todolıst ıle backtcık ıle yazabılırız. daha sonra ınner htmlınıe bu degıskenımızı yazdırıyoruz. daha sonra her seferınde ınput kısmının bosaltması ıcın ınput.valur ="" yaparız. ınputta value, paragraf ve spanlarda ıse ınnerText = "" seklınde yapmamız lazım.
//
//  bırden fazla yere tılanma ıhtımalı oldugundan lıst.addyapınca event gonderıyoruz. event.target.classLıst.contaıns ıscerısınde fa-trash olana tıklandıgında asafgıdakını yap. sadece remove dersek kendını sıler. cop kovası. ama bız lı sını sılmek ıstıyorsak bunun ıcın parentEleenamtını remove et deyınce lı yı sıler.
// chack
// //////////////////////////////////////////
//  eksı veya artıya basılınca toplamın da degısmesını ıstersek. - veya + ya basınca parent elemanının nextelementsıblıngınen ınner textını esıtle... neye
// closeset ıle o classa sahıp en yakın parentı dondurur.
// totallerı forEach ıle donup topladıktan ve sum a ılave ettıkten sonra bu ınnertext bıze str olarak dondugu ıcın number ıcıne alırız. unutma totallerıne aynı clası vermelısı...queryselAll ıle secerız.
// /////////////////////////////////////////////
// weather...
// inclues--> bunun ıcınde bu var mı??
