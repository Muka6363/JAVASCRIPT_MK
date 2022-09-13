console.log("***** SELECTORS *****");
//1. document.getElementById(id) ---> Bir elemanı id’ye göre bul
//2. document.getElementsByTagName(isim)--->  Bir elemanı Tag (Etiket) adına göre bul
//3. document.getElementsByClassName(isim)---> Bir elemanı Class (Sınıf) adına göre bul

/*herseye document.(neye ulasmak ıstıyorsak onu yazıyoruz)
document.getElementById-ClassName-TagName........dıye yazabılır ve elemanlarına ulasabılırız.

h1.style.fontSize= "..."  //camel case olmak zorunda, = var ve yazılacaklar "" ıcıne yazılır.
h1.id = "yenıH1Adı"  //h1 e yenı bır ıd verıyoruz.
h1.textCondent = "Hello" //icerıgıne ulasabılıyoruz.
element.innerHTML = yeni icerik // bununla ıcerıgını degısırız.*/

//*===========================================
//*            GETELEMENTBYID()
//*===========================================

//* EXAMPLE-1
//*-------------------------------------------

const h1 = document.getElementById("header"); //ıdsını yazdıgımız elemanı buluyoruz.
console.log(h1);
h1.style.color = "white"; // degısken.style.yapmakıstedıgımızseyıyazıyoruz...bu formatla degısıklıklerı yapıyoruz.
h1.style.background = "red"; //bu formatla degısıklıklerı yapıyoruz.

//* EXAMPLE-2
//*-------------------------------------------

const myInput = document.getElementById("input");
const button = document.getElementById("btn");
button.style.background = "black";
button.style.color = "white";
button.style.width = "7rem";
button.style.border = "none";
button.style.borderRadius = "10px";
button.style.padding = "1rem";
button.style.fontSize = "1.1rem";
myInput.style.padding = "1rem";

//*===========================================
//*          GETELEMENTSBYTAGNAME()
//*===========================================

//*EXAMPLE-3
//*-------------------------------------------

const list = document.getElementsByTagName("li"); //aynı elaman hakkında bırden fazla ıslem yapacagımız zaman yukarıda yaptıgımız gıbı bır degıskene ataıyoruz. daha sonra bu degısken uzerınden ıstedıgımız gıbı oynuyoruz.
console.log(list); //? HTML Collection ---> bırden fazla bır elementın secılecegı durumlarda bıze bır array donecektır. tag ısmı yazılırken buna dıkkate etmek gerekır. daha sonra bu degısken uzerınden ıstedıgımız gıbı oynuyoruz.
list[2].style.color = "red"; //bıze donen HTML collectıon nın elemanına ındex kullanarak ulabılır ve ona style verebılırız. aynı zmanda list.item(3);

const elementThree = list.item(3); //ındex no
elementThree.style.color = "blue";
elementThree.textContent = "React / Vue / Angular";

list[4].innerText = "Django / Flask"; 

console.log(list[1].textContent);
console.log(list[1].innerText);
//!innerHTML, innerText veya textContent -----> bunların 3 u de belırtılen elemanı degıstırmek ıcın kullanılır... Ancak;

//1. innerHTML---> HTML kodlarini calistirir. (Guvenlik acisindan problemli) // guvenlık acısından bu kullanılmamalı.
//2. innerText veya textContent kullanılmalı.. bunların arasında da soyle bır fark vardır;
//3. textContent HTMLden bagımsız herseye ulasır. ancak innerText HTML ıle bırlıkte hareket eder. bu sebeple HTML de gorunmesın dedıgımız seylerı gostermez.

list[4].innerHTML = "<a href='https://www.clarusway.com'>Clarusway Web</a>";

//*===========================================
//*          GETELEMENTSBYCLASSNAME()
//*===========================================

//* EXAMPLE-4
//* ------------------------------------------
const myList = document.getElementsByClassName("list");// "" ıcerısıne class adını yazarak o elemana-elemanlara ulasırız. class bırden cok elemana verılebılır oldugunda bu method ıle eleman tesoıtı yaptıgımızda bıze bır HTML Collectıon yanı bır array donderır. ancak dııkat edın. array gelmıs olsa bıle dırekt array methodları kullanılamaz.----> Spread ve Array.from() 
// class sececeksek = ".clasadıyaz"
// id sececeksek = "#ıdadıyaz"
console.log(myList); //? HTML Collection
console.log(myList[0].innerText);

//? HRML Collection'larda Dizi metotlari dogrudan kullanilamaz.
//? Spread ve Array.from() ile kullanilabilri hale gelir.

//?1. Yontem-----> Array.from()
const myListArray = Array.from(myList); //formatıyla yenı bır degıskene atıyoruz. asagıda da bu yenı olusturulan degısken-arrayın uzerınde ıstedıgımız array methodunu uyguluyoruz.
myListArray.forEach((item) => console.log(item.innerText));

//?Spread
[...myList].forEach((item) => console.log(item.innerText));

[...myList].forEach((item) => (item.style.color = "red"));

//* ========================================
//*              QUERYSELECTOR(); 
//!Bir elemanı id, class, özellik, tür ve değere göre seçmek için kullanılır. Eşleşen ilk elemanı seçer.
//* ========================================

//? 1- queryselector() etiket secebilir
const myLi = document.querySelector("li"); //sadece ilk li yi secer. secıyor bı degıskene atıyoruz sonra ıstedıgımıx gıbı oynuyoruz
console.log(myLi.innerText);
myLi.style.color = "yellowgreen";

//? 2- queryselector() class secebilir.

const itemList = document.querySelector(".item-list");
itemList.style.background = "grey";

//? 3- queryselector() id secebilir.
const input = document.querySelector("#input");
console.log(input.value);

document.querySelector("#btn").style.cursor = "pointer";

//? 4- queryselector() ile CSS deki gibi secim yapilabilir.

const itemH2 = document.querySelector(".item-list h2");
itemH2.style.color = "purple";

const myBtn = document.querySelector("input[type='button']");
console.log(myBtn); //type button olan inputu myButn degıskenıne atadık.

//* ========================================
//*              QUERYSELECTORALL()
//* ========================================

const lists = document.querySelectorAll("ul li");
console.log(lists); //? nodelist

lists.forEach((li) => console.log(li.innerText));

console.log(
  document.querySelectorAll("section ul li:nth-child(3)")[0].innerText
);
console.log(document.querySelector("section ul li:nth-child(3)").innerText);



// //?__________________ORNEKLER______________________
//* EXAMPLE-1
// Todo App başlığını getElementById yöntemi ile stil Verin.
​
let baslık = document.getElementById("title");
baslık.style.background = "yellow";
​
console.log(baslık.id);
console.log(baslık.className);
console.log(typeof baslık.className);
console.log(baslık.classList);
​
//* EXAMPLE-2
// Görev 1'e getElementsByTagName metodu ile yeşil backgrand verin.
​
let liyesil = document.getElementsByTagName("li");
console.log(liyesil);
console.log(liyesil[0]);
​
liyesil[0].style.background = "green";
​
// item ilede elemanlara erişiliyor
liyesil.item(1).style.background = "yellow";
​
// 1. görevin karşısına (item ile) 'preclassları bitir' yazısı ekleyin.
liyesil.item(0).textContent = "Görev 1 : preclassları bitir";
liyesil.item(1).innerText = "Görev 2 : preclassları bitir";
liyesil.item(2).innerHTML = "Görev 3 : preclassları bitir";
​
// görev 2'yi innerText ile consola yazdırın.
​
console.log(liyesil.item(1).innerText);
​
// innerText html kodlarına bakarak text veriyor.
// textContent bütün text'leri veriyor.
// (textContent) bu metodlar hem içerik göstermeye hemde değiştirmeye yarıyor.
​
//* EXAMPLE-3
// getElementsByClassName yöntemini kullanarak bütün görevleri consola yazdırın.
​
let ikincililer = document.getElementsByClassName("task2");
console.log(ikincililer);
​
//?Array.from()
​
const arr = Array.from(ikincililer);
console.log(arr);
​
arr.forEach((x) => console.log(x.innerText));
​
//?Spread
​
[...arr];
console.log(arr);
​
// tüm görevlerin rengini red'a çevirin.
​
for (item of [...arr]) {
  item.style.color = "red";
}
​
//* EXAMPLE-4
​
// queryselector() (etiket) yöntemi ile görev 1'in bg' ını beyaz yapınız.
​
let ilkli = document.querySelector("li");
console.log(ilkli);
ilkli.style.background = "white";
​
// queryselector() (class) yöntemi ile görev 4 ya'in sarı bg veriniz.
​
document.querySelector(".task2").style.background = "yellow";
​
// queryselector() (id) yöntemi ile görev 3'e cursor pointer özelliği veriniz.
​
document.querySelector("#g3").style.cursor = "pointer";
​
// queryselector() yöntemi ile part-1'e bg özelliği veriniz.
​
document.querySelector("#task-list h2").style.background = "red";
​
//* EXAMPLE-5
​
// QUERYSELECTORALL() yöntemi ile consola tüm görevleri yazdırın.
​
console.log(document.querySelectorAll("ul li"));
​
// spread veya array from kullanmadık.
document.querySelectorAll("ul li").forEach((a) => {
  console.log(a.textContent);
});
​
//* EXAMPLE-6
​
// Görev 6 nın parentini consola yazdırınız.
​
let gor6 = document.querySelector(".task2");
console.log(gor6);
​
console.log(gor6.parentElement);
console.log(gor6.parentNode);
​
// Görev 6 nın parentine border verniz.? (traverse)
​
const gor6Parent = gor6.parentNode;
​
gor6Parent.style.border = "2px solid red";
​
// Görev 6 nın parentlerinden ilk  ul ın  bg'sini blue yapın.  (closest)
​
const gor6ul = gor6.closest("ul");
gor6ul.style.background = "blue";
​
// task-list id sinin alt elemanlarını (children) consola yazdırın. 2. çocugun bg sini değiştirin.
​
let tasklist = document.querySelector("#task-list");
​
console.log(tasklist.children);
​
tasklist.children[2].style.background = "yellow";
​
// görev 5 in kardeşlerine ulaşın farklı bg'ler verin.
​
let gorev5 = document.querySelector(".task-class").children[2];
​
gorev5.previousElementSibling.style.background = "yellow";
gorev5.nextElementSibling.style.background = "red";
​
//* EXAMPLE-7
​
// Part 1 altına bir p elementi ekleyip içeriğine "Bugün yapılacaklar listesi" ekleyin.
​
let newP = document.createElement("p");
newP.id = "newpar";
newP.setAttribute("class", "newclass");
​
// 1. parametre ne vermek istediğimizi, 2. adını ifade eder.
​
const text = document.createTextNode("Bugün yapılacaklar listesi");
newP.appendChild(text);
console.log(newP);
​
// h2.before(newP);
let h2 = document.querySelector("#task-list h2");
h2.after(newP);
// console.log(newP.getAttribute("class"));
​
//? INNER HTML ile Görev 7 yazdır.
​
const ul = document.querySelector(".task-class");
ul.innerHTML += `<li id="list-id" class="list">Görev 7</li>`;