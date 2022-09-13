console.log("**** TRAVERSING DOM ****");

//*===========================================
//*            TRAVERSING DOM
//*===========================================
//? Bir HTML elementi uzerinden baska elementleri secmeye
//? DOM traversing denilir. Ozellikle dinamik olarak degisen
//? (silme veya yeni ekleme gibi) HTML elemanlarinin secerken
//? gerekli olabilir.

//? Secme islemi 3 yonlu yapilabilir.
//? - Yukari yonde (Parent) yanı bır ustundekı, atası
//? - Asagi yonde (children) yanı bır altındakı cocugu
//? - Yatay yonde (Sibling) yanı aynı duzeydekı kardesler

//* 1- Yukari Yonde traverse
//*----------------------------------------------

//! parentElement, parentNode
const list = document.querySelector(".list"); //classı list olan elamanı sec.
const ul = list.parentNode; //bu elemanın
ul.style.border = "2px solid red";

console.log(list.parentNode.parentNode.parentNode.parentNode.parentNode); //? document

console.log(list.parentElement);

//! closest(): belirtilen elementin parent'larin ilk uygun parent'i secer
const itemListSec = list.closest("section"); //sectıon ıcındekı
itemListSec.style.background = "green";

//*2- Asagi Yonde traverse
//*----------------------------------------------
const addItem = document.querySelector(".add-item");
console.log(addItem.children); // clası .add-item olan elemanı buluyoruz. bunun altındakılerı-cocuklarına ulasmak ıcın ındex yontemını kullanıyoruz.
const h2 = addItem.children[0];
const inp = addItem.children[1];
h2.style.color = "blue";
inp.style.background = "red";

console.log(addItem.parentNode.parentNode.children[0]); //? Header

console.log(ul.firstElementChild.innerText);
console.log(ul.lastElementChild.innerText);

//*3- Yatay Yonde traverse
//*----------------------------------------------

//! nextElementSibling ,previousElementSibling

const myList = ul.children;
console.log(myList);

const javascript = myList[2];

const css = javascript.previousElementSibling; //aynı hızadakı ve kendınden once yazılmıs
console.log(css.innerText);
const react = javascript.nextElementSibling; //aynı hızadakı ve kendınden sonra yazılmıs eleman
console.log(react.textContent);
console.log(javascript.previousElementSibling.previousElementSibling.innerText); //aynı hızadakı ve kendınden sonra yazılmıs elemandan sonra yazılmıs eleman---<HTML>

/****************************************************************** */
console.log("**** CREATE NODE ****");
/****************************************************************** */
// document.createElement(isim) ---> Yeni bir eleman oluşturur.
// Document.createTextNode(text) ---> Bir eleman için text düğümü oluşturur.
// element.appendChild(text düğüm) ---> Bir text düğümüne elemana bağlar.
// Element.removeChild(child düğüm) ---> Bir elemanın çocuk düğümünü siler

//?Yeni bir P elementi olusturalim
const newP = document.createElement("p"); //ıcı bos bı p olusturup bı degıskene atadık.
newP.id = "new-par"; //yenı bır ozellık verebılıyoruz. id sı bu olsun.
newP.setAttribute("class", "new-class"); //yenı bır ozellık verebılıyoruz. her turlu ozellıgı verebılıyoruz. burada ılk yazılan ozellık adıdır, ıkıncısı ıse bu ozellıge verılen deger, yanı valuesudur. class olasturduk ve clasına da new-class adını verdık.

const text = document.createTextNode("This is a new p element"); //burada yenı bır ıcerık olusturduk
newP.appendChild(text); //text ıcerıgını bu method ıle newP nın chıld ı yaptık.
console.log(newP);

const h4 = document.querySelector(".item-list h4"); //burada kendımız bır nokta-yer belırlemek belırlıyoruz. neden mı? cunku yukarıda olusturdugumuz yenı elemanımızı bu belırledıgımız noktanın oncesıne veya sonrasına yerlestırecegız.
h4.before(newP);
// h4.after(newP);

//? getAttribute() // bununla olusturdugumuz elemanın bılgılerını soruyoruz. varsa karsısındakı degerı yazdırır. yoksa null deger donderır.
console.log(newP.getAttribute("class"));
console.log(newP.getAttribute("id"));
console.log(newP.getAttribute("name"));

//? classList
console.log(newP.classList.contains("par")); //? false
newP.classList.add("new-class");
console.log(newP);
newP.classList.remove("new-class");

//? INNER HTML (Ciddi Guvenlik aciklari var)
const ulMy = document.querySelector("ul");
ulMy.innerHTML += `<li id="list-id" class="list">Boostrap</li>`;

//?====================================================================//
//? ******************************* ÖRNKLER****************************//
//?====================================================================//
//! 1.ORNEK
// Sayfamızda bulunan <p> elemanına erişip renginde değişiklik yapalım. • Bunun için HTML dosyamızda p elemanına bir id ekleyelim
// <p id="my-par">Javascript öğrenmek için link </p>
// • Artık getElementById() metodu ile javacript kodumuzda <p> elemanına erişebiliriz.
// const paragraf = document.getElementById('my-par');
// • Ve artık bu elemana ait bir çok özelliğe değişkenAdı. ile erişebiliriz.
// paragraf.style.color = 'red'

//! 2.ORNEK
// Sayfamızda bulunan <button> elemanına ait bazı değişiklikleri yapalım.
// • Bunun için HTML dosyamızda elemanımıza id=‘btn’ eklemesini yapalım.
// const buton = document.getElementById("btn");
// buton.style.color = "yellow";
// buton.style.backgroundColor = "black";
// buton.innerHTML = "ARA";
// buton.style.fontSize = 20;
// NOT: id tüm HTML dosyası için tekrarsız olduğu için getElementById()
// metodu ile sadece tek bir HTML elemanını seçebiliriz.

//! 3.ORNEK
//  Sayfamızda bulunan <img elemanına ait bazı değişiklikleri yapalım.
//  • Bu sefer getElementByTagName() metodu ile elemanımızın özelliklerine erişelim.
// const resim = document.getElementsByTagName("img");
// resim[0].style.borderStyle = "solid";
// resim[0].style.borderolor = "purple";
//  NOT: Bu metot ile etiketi aynı olan tüm elemanlar (<img) seçilmektedir.
// Dolayısıyla tek bir eleman seçmek için indisleme kullanmak gerekir.

//! 4.ORNEK
/*Sayfamızda bulunan <h1> elemanına ait bazı değişiklikleri yapalım. 
• Bu sefer getElementByClassName() metodu ile elemanımızın özelliklerine erişelim.
const header = document.getElementsByClassName('header');
header[0].innerHTML = 'DOM Manipülasyonu Çok ilginç';
header[0].style.fontSize = 25;
header[0].style.fontFamily ='Tahoma';
header[0].style.color = 'blue';
NOT: Bu metot ile class (sınıfı) aynı olan tüm elemanlar (<h1>)
seçilmektedir. Dolayısıyla tek bir eleman seçmek için indisleme kullanmak
gerekir. */

//! 5.ORNEK
/*Sayfamızın arka planının rengini ve sayfamızın başlığını (title) değiştirelim ve elemanları seçmek için querySelector() metodunu kullanalım.
const body = document.querySelector(‘#body');
body.style.backgroundImage = 'linear-gradient(to right, green, yellow)’;
const title = document.querySelector(".title");
title.innerHTML = "DOM Örnekleri 👀";
NOT:
• querySelector metodunda id ile seçim yaparken ‘#id’, class için ise ‘.classAdı’ yazılmalıdır. 
• querySelector belirtilen şarta uygun ilk elemanı seçer. Aynı class’daki birden
fazla elemanı seçmek için querySelectorAll() metodu kullanılmalıdır. */
