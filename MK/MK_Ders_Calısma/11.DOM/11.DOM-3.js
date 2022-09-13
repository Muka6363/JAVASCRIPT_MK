function sayHello() {
  alert("Hello World");
}

// 2. yontemde ıse, js. tarafında yazıp hazırladıgımız fonksıyonları-olayları cagırmak seklınde olur.
const header2 = document.querySelector(".header2");
const yaziMavi = () => (header2.style.color = "blue");
const yaziSari = () => (header2.style.color = "yellow");

//3.YÖNTEM: HTML sayfasında herhangi bir ekleme yapmaksızın sadece Javascript ile Olayları kontrol ederek. burada ılk olarak uygulamayı uzerıne yapacagımız elemanınımızı secıyoruz... ve buna bır ıslem-olay uyguluyoruz. fare uzerıne gelınce bu renk, uzerınden gıttıkten sornra bu renk demek gıbı. ıste bunu da bır fonksıyona tanımlayarak yapıyoruz. her bır ıslem-olay ıcın ayrı bır fonk.yazılıyor.
document.querySelector(".header3").onmouseover = function () {
  document.querySelector(".header3").style.color = "red";
};
document.querySelector(".header3").onmouseout = function () {
  document.querySelector(".header3").style.color = "aqua";
};

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// 4.Yontem addEventListener yontemı... aslında sadece syntax ı farklı yoksa aynı mesele...;
// document.querySelector(".header4").addEventListener('mouseover’, function(){document.querySelector(".header4").style.color = "blue"});

// document.querySelector(".header4").addEventListener("mouseout", () => { document.querySelector(".header4").style.color = "black";});
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// DOM OLAYLARI (ÖRNEK-2)
// • Butonumuza tıklandığında web sayfasının arkaplan renginin Yeşil olmasını ve
// Butonun içindeki yazının BAS olarak değiştirilmesini sağlayan kodu HTML sayfasına bir ekleme yapmaksızın yazalım.
//! 1.YÖNTEM:
document.getElementById("btn").onclick = function () {
  document.getElementById("body").style.backgroundColor = "green";
  document.getElementById("btn").innerHTML = "BAS";
};

//! 2.YÖNTEM:
document.querySelector("#btn").addEventListener('click', () => {
document.querySelector("#body").style.backgroundColor = "green";
document.querySelector("#btn").innerHTML = "BAS";



//************************************** */

// derten;
/*

* ozellıkle ınput boxlarda daha cok---> onchange 
* onkeyup-onkeydown

 


// q.selectorAll nodeLıst donderıyordu.
// forEach yontemıyle bırden fazla lıye aynı seyı uyguladık.
// onload, wındow ıle 
app.js


// ınputu uzerındeyken entera basınca ılave edılecegız ıcın, ınputa addeventList ılave edeyıyoruz.


// key kodu ascı kod karsılıgını yazarız.addEventListenercode ıle yazınca dlete-ısmıyle yazılır.