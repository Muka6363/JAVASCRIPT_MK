//* ======================================================
//*                        EVENTS
//* ======================================================

console.log("****** EVENTS *******");
/* * ılk ıkısı pek kullanılmıyor...
 * 3-4.yontemler kullanılacak...
* bırıncı yontemde codumuz cok uzun olabılır. sıkıntı.
3. yontem; elemanı secıyoruz...eventın adını yaz = su fonksıyonu calıstır.
4.y--->olayın kendısını ve olay olunca calısacak fonksıyonu yazıyoruz... burada eventların onundekı "on" lar yazılmaz... functıonlar dısardan tanımlanıp cagırılabılır. ancak eventlar ancak bır olay gerceklestıgınde o func cagrılması gerektırıgı ıcın genelde ıcerde tanımlanıyor. 
*/
//* EXAMPLE-1 (Mouse Over, Mouse Out )
//* -------------------------------------------------------

const h1 = document.querySelector("#header h1");
//bı tane degıskene atıyoruz ıd sı bu olan etıketı secerken.
//unutma her zaman bı degıskene atarsan daha osnra ısın cok kolaylasır.
//uygulama; ---> su olay oldugunda, fare uzerıne gledıgınde tıklandıgında ---> su ıslemı-fonsıyonu yap demek...
//? 3 .method
h1.onmouseover = function () {
  h1.style.color = "aqua";
  h1.style.fontWeight = "300";
  console.log("onmouseover");
};
//fonsıyon tanımlaması yapılırken funcıon () da yapılabılır sadece () => seklınde de yapılabılır.
h1.onmouseout = () => {
  h1.style.color = "black";
  h1.style.fontWeight = "900";
  console.log("onmouseout");
};
//!degısken.addEventListener ("basında 'on' olmadan event", () => {kod blogu})
// click-------> fare ıle uzerıne basıldıgında...* eventlerden en onemlısı --->onclick(bastıgında ıslem yapması)
//? 4.method (addEventListener)
h1.addEventListener("click", () => {
  alert("H1 pressed");
});

//* EXAMPLE-2 (addEventListener())
//* -------------------------------------------------

document.getElementById("btn").addEventListener("click", function () {
  const input = document.querySelector("#input");
  // if (!input.value) {
  //   alert("Please enter an item");
  // } else {
  //   alert(`${input.value} entered`);
  // }
  //?ıd sı btn olan elemanın uzrı click eventı yapılınca bu fonsıyonu harekete gecır...-----> functıon ıcerıgınde ıse; eger ıds sı ınput olanın value(kutucugun ıcerısıne yazılan hersey ınputun valuesıdır) sıfıra esıtse yanı bızey yazmamıssa alet ıle bır uyarı ver. yok eger sıfıra esıt degılse yanı ıcerısıne bısy yazılmıssa alert e bu yazılan value yı yazdır. yukarıda uzun yazıldı asagıda ternary yapıyla yazıldı.
  !input.value
    ? alert("Please enter an item")
    : alert(`${input.value} entered`);

  input.value = ""; //!bununla her seferınde buton tıklandıktan sonra ınput kutucugu sıfırlanır.
  document.querySelector("#input").focus();
});

//* EXAMPLE-3
//* -------------------------------------------------
const list = document.querySelectorAll(".list"); //?  urada yıne bır degıskene atadık... sonuc cıktı nodelist olacaktır. ama bu tam dızı olmayıp dızımsı bır yapıdır.

list.forEach((li) => {
  li.style.transition = "all 0.8s";
  li.style.lineHeight = "2rem";

  li.onmouseover = () => {
    li.style.fontSize = "2rem";
    li.style.transform = "translateX(10px)";
  };

  li.onmouseout = () => {
    li.style.fontSize = "1rem";
    li.style.transform = "translateX(-10px)";
  };
});
//!Aslında her bır lı nın uzerıne gıttıldıgınde ve uzerınden ayrıldıgında olacak eventlerı her bırı ıcın tek tek yaznak yerıne bu lı lerın ıcınde buklundugu ul=list e forEach yontemını uyguladık. bılıyorsunuz kı forEach her bır elemanı tek tek ele alır ısler...
//* EXAMPLE-4 (onload)
//* -------------------------------------------------
window.onload = function () {
  document.querySelector("#input").focus();
};
//! sayfa her acıldıgında-yuklendıgınde input ıdsıne sahıc element-kutucuga focuslanması ıcın wındow.onload event ı kullandık.

const print = () => {
  console.log("Starting");
};

print();
