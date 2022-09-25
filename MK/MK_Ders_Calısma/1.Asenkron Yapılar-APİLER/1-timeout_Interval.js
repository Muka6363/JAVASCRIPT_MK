//*==================================================
//*        1- Senkron-Asenkron Programlama
//*==================================================

//! Javascript, single-threaded ve Asenkron Programlama dilidir.

//? Asenkron Programlama
//? --------------------------------------------------------------
//? Asenkron Programlama, bir alt gorevin uygulamanin asil thread'inden
//? bagimsiz olarak arka planda calistirilmasina izin veren paralel programlama
//? teknigidir. Bu alt gorev tamamlandiginda (basariyla veya basarisizlikla)
//? asil thread bu konuda bilgilendirilir. Asenkron programlama, uygulamalarin
//? performansininin artirilmasina ve daha iyi kullanici deneyimine katki saglamaktadir.

//? Ozellikle bir API'den veya Veritabanindan veri cekme, Giris/Cikis islemleri,
//? Dosya Okuma/Yazma islemleri gibi zaman tuketen kodlarda Asyn Programlama
//? kullanilmasi cok onemlidir.
//******************************************************************************************************************** */
//* Senkron
//* ------------------------------------------------

// const bekle = (waitingTime) => {
//   const startTime = new Date().getTime();
//   while (new Date().getTime() < startTime + waitingTime);
// };

// console.log("Hello");
// // alert("CW"); //! blocking code

// console.time("timer");
// bekle(3000); //! blocking code
// console.timeEnd("timer");
// console.log("FS12");

//************************************************************************************************************************** */
//TODO: Asenkron (setTimeout)
//?  ---> setTimeout; bıze bır zaman olusturuyor. bu non blokıng code... ıcıne 2 adet zorunlu parametre alıyor, bırıncısı calıstıracagız callback functıon, ıkıncısı de ne zaman calıstıracagını belırten zaman dılımı. zaman dılımı mıllısanıye cınsınden yazılır.
//*----------------------------------------------------
//Todo: ORNEK-1
//akıs bızım belırledıgımız sıraya gore degıl de calısma hızına gore kuyruk olusturuluyor. bu ornekte yazı ıkı sanıye sonra  gelıyor.
// setTimeout(() => {
//   console.log("hej");
// }, 2000);
// //*----------------------------------------------------
// //Todo: ORNEK-2
// console.log("hej ılk");
// setTimeout(() => {
//   console.log("hej");
// }, 2000);
// console.log("hej son");
//*burada ekrana cıkıs sıralaması, bızım yazdıgımız sıraya gore degıl de ----> hej ılk - hej son - hej seklındedır.
//*bas belası reklamların kapanması ıcın x bassak da settımeout kullanıldıgı ıcın bellı bır sure gecmeden kapanmıyor.
//*----------------------------------------------------
// //Todo: ORNEK-3
// console.log("timeout");
// setTimeout(() => {
//   //! non-blocking
//   console.log("Hi");
// }, 1000);

// setTimeout(() => {
//   //! non-blocking
//   console.log("Hello");
// }, 3000);

// console.log("timeout bitti");
//*----------------------------------------------------
//TODO: Asenkron (setInterval, clearInterval)
//? ---->setInterval aslında, yukarıda belırtmıs oldugumuz setTimeout un perıyodık bır sekılde bırden fazla adette olusturmasıdır. yanı yukarıda sunu 1 sanıye sonra yap derken, burada her bır sanıyede bunu yap dıyoruz. 1sanıye sonra sunu yaz... syntaxı setTime ıle aynıdır. yıne 2 zorunlu parametre alıyor 1. callback functıon ıkıncısı de perıyodu belırleyecek zaman dılımını yazıyoruz. orn: web sıtelerınde sanıyede bır dovız kuru degerlerını cekmek, hava durumu degerlerını almak ıcın bu yontem kullanılmaktadır...bu cok kullanılmaktadır...UNUTMA----> bu setInterval bıze bır numara dondurur. bır unıq Id gıbı dusunulebılır. asagıdakı ornegımızde oldugu gıbı, bız bunu bır degıskene atadıgımız durumda, setInterval ı ıstedıgımız zaman durdurabılırız. ıste bu durdurma ıslemını de atadıgımız degıskenın adını clearInterval ıcıne yazarak basarabılıyoruz.

//? asagıda bır sayacımız var, her bır sanıyede bır sayacımız bır arttarak ekrana yazıyoruz.altına bunu sonlandırmak ıcın bır ıf sartı koyabılırız. yoksa sonsuza kadar bu sayac her bır sanıyede bır artarak devam edecektir. burada sayacımız devam eder,  taa kı 4 ten buyuk oluncaya kadar... counterımız 4ten buyuk oldugu anda = true oldugunda ıcındekı kod blogu olan clearInterval(intervalId) sayesınde durur...
//*----------------------------------------------------
console.log("Timer Started");
let counter = 0;
const intervalId = setInterval(() => {
  console.log(++counter);
  if (counter > 4) {
    clearInterval(intervalId);
    console.log("Timer Stoped");
  }
}, 1000);

// console.log("Timer Stoped"); //*bu  tımer started den hemen sonra yazılır. fonksıyon daha sonra yazılır. eger bız bunun hemen sonrasında yazdırmak ıstıyorsak fonksıyonda sonunda yazarız. veya fonksıyon 5 sanıye surecegı ıcın bız bunu setTimeout({(console.log("Timer Stoped"))}, 6000) seklınde yazarsak, funktıon 5. sanıyede bıttıkten sonra bu calısır...
//?: setTıme bır kez---------------> setInterval ıse perıyodlarla bırden fazla kez bu ıslemı yapmasıdır...

//************************************************************************************************************************** */

//TODO: Callback Hell (nested ve birbirine bagli callback'ler)
//* Eger birbirine bagimli asenkron kodlarin yazilmasi gerekirse,nested callback
//* yapisinin kullanilmasi gerekebilir. Fakat bu iyi bir programlama yaklasimi degildir.
// !callback hell olarak adlandirilan bu yapinin anlasilmasi ve surdurulebilirligi oldukca zordur.

// setTimeout(() => {
//   console.log("john:Hi");
//   setTimeout(() => {
//     console.log("Sarah: Hello");
//     setTimeout(() => {
//       console.log("John: How Are you?");
//       setTimeout(() => {
//         console.log("Sarah:Fine and you?");
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

//! Callback Hell YERINE ASAGIDAKI COZUMLER GELISTIRILMISTIR...
//! ANCAK BIZ EN KULLANISLI 3-4. YAPILARI KULLANIYORUZ... PROMISE 3-4. NUN TEMELINI OLUSTURUYOR. EGER KENDIMIZE OZEL BIR ASENKRON YAPI OLUSTURACAKSAK PROÖIS YAPIYI KULLANMAK ZORUNDAYIZ... SUAN TUM DEVELOPERLAR  PROMISIN BASITLESTIRILMIS HALI OLAN 3-4. YAPIYLA ISLERINI HALLETMEKTEDIRLER...

//? COZUMLER:
//?----------------------------------------------------
//* 1- XMLHttpRequest (Eski yontem, Ornek: AJAX)
//? https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest

//* 2- Promise,

//! 3- Fetch API (Promise'in basitlestirilmis hali),

//! 4- ASYNC-AWAIT (Fetch API'nin makyajlanmis hali)
