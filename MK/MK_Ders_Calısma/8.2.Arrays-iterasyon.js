//! *************************************DIZILERDE ITERASYON ***********************************************
// •3. Dizi iterasyon metotları:

// //? Arrayler bırer "object" türüdür. typeof--->ıle bakılabılır. ayrıca bır degıskenın bır array ı barındırıp barındırmadıgının kontrolunu Array.isArray()-veya-instanceof methodlarıyla yapabılıyoruz.

// const myArr = [1, 2, 3];
// const myObj = {firstName: "John", lastName: "Doe", age:24};

// console.log(typeof myArr); // object
// console.log(Array.isArray(myArr)); // true

// console.log(myArr instanceof Array); // true
// console.log(typeof myObj); // object

// console.log(Array.isArray(myObj)); // false
// console.log(myObj instanceof Array); // false

// • JS’de bir dizi içerisinde iterasyon yapmak için çok farklı yollar kullanılabilir.
// //! Döngüler ile;
// • Klasik for, while, do-while döngüsü
// • for in döngüsü
// • for of döngüsü
// //! Dizi iterasyon metotları ile (En çok kullanılanlar)
// •Array.forEach() *Array.every() •Array.map() *Array.some() •Array.filter() *Array.find() •Array.reduce()

//? FOR DONGUSUYLE DIZI ITERASYONU:
//! ÖRNEK: Bir dizideki sayıların toplamını hesaplayan uygulamayı For döngüsü ile yazınız.
// const rakamlar = [-5, 15, 22, -4, 45, 78, -25];
// const total = 0;
// for (let i = 0; i < rakamlar.lenght; i++) {
//         total += rakamlar[i];
// }
// console.log(total);

//! ÖRNEK1: Bir dizideki pozitif ve negatif sayıların toplamını hesaplayan uygulamayı For döngüsü ile yazınız. topla adında bir fonksiyonda hesaplamayı yapınız.
// const dizi = [-5, 15, 22, -4, 45, 78];
// const topla = (dizi) => {
// let negatifler = 0;
// let pozitifler = 0;
// for (let i = 0; i < dizi.length; i++) {
// if (dizi[i] < 0) {
// negatifler += dizi[i];
// } else {
// pozitifler += dizi[i];
// } }
// console.log(`Dizideki Pozitif Sayıların Toplamı: ${pozitifler}`);
// console.log(`Dizideki Negatif Sayıların Toplamı: ${negatifler}`);
// };
// topla(dizi);

//! ÖRNEK2: negatıf- poazıtıflerı ayrı bırer dızıde toplamak...

// const dizi = [-5, 15, 22, -4, 45, 78];

// const negatifler = [];
// const pozitifler = [];

// const dizelereAyir = (n) => {
//   //buradakı "n" yerıne baskaca herhangı bır ısım de verebılırız. bız burada bır func. tanımlıyoruz bu yuzden ne kullandıgımzın bır onemı yok. sadece parametrede kullanmıs oldugumuz ısmı alt satırlarda da kullanmayı unutmamak lazım. yoksa ne kullanıldıgı hıc onemlı degıl.
//   for (let i = 0; i < n.length; i++) {
//     if (n[i] < 0) {
//       negatifler.push(n[i]); //yaptıgımız her ıteretıonsda condıtıons a gore bu ındexdekı eleman negatıf ıse bunu .push methoduyla negatıd dızesıne;
//     } else {
//       pozitifler.push(n[i]); //yaptıgımız her ıteretıonsda condıtıons a gore bu ındexdekı eleman poz. ıse bunu .push ıle pozıtıf dızesıne eklıyoruz
//     }
//   }
// };
// dizelereAyir(dizi); //dızelereAyir functıonsnun ıcerısınde "dizi" isimli diziyi cagırıyoruz... bunu uyguladıktan sonra asagıda neg. ve poz. dızılerı ayrı ayrı ekrana yazdırıyoruz.
// console.log(negatifler);
// console.log(pozitifler);
// console.log(dizi);

//?FOR IN DÖNGÜSÜ ILE DIZI ITERASYONU
// • For döngüsünün kısaltılmış halidir. (sayaç ve koşul kullanmaya gerek yok.) kendısı bunu algılıyor.  yanı i dızının lenght-uzunlugu kadar her seferınde bırer artarak tum elemanları dolasıyor. Özellikle dizi ve nesnelerin iterasyonu için geliştirilmiştir.
// for (let i in dizi) {
//         console.log(dizi[i]);
// };
// for ( değişken in diziAdı) {
//         Döngü içi
// };

//* SORU: studens dizisinde ogrenci isimleri saklanmaktadir. ogrencileri aramamizi saglayacak ve aranilan ogrenciden ne kadar sayida bulunuldugunu  ana programa döndürecek bir fonksiyonu yaziniz. Eger aranilan isimde bir ogrenci yok ise fonksiyon "ogrenci bulunamadi" dondurulmelidir.

// const students = ["ahmet", "mehmet", "ismet", "ahmet", "can", "mehmet", "cem"];
// const findStudents = (itereEdilecekDizi, aranacakİsim) => {
//   let counter = 0;
//   for (let i in arr) {
//     if (aranacakİsim === itereEdilecekDizi[i]) {
//       counter++;
//     }
//   }
//   if (!counter) { // !counter demek aslında false yanı counter = 0 demektir. 0 harıcı tum sayılar true olacaktır.
//     return `${aranacakİsim} can not be found`;
//   } else {
//     return `${aranacakİsim} found ${counter} times`;
//   }
// };

// const name = prompt("Please enter a name").toLowerCase();
// console.log(findStudents(students, name)); //ılk parametre students--->itereEdilecekDizi ıken; ıkınıcı yanı name ıse--->aranacakİsim

//! ÖRNEK: Bir dizideki tüm elemanların toplamını bulan programı FOR IN ile yazınız.

// const sayılar = [-5, 15, 22, -4, 45, 78, -25];

// let sonuc = 0;
// for (let i in sayılar) {
//   sonuc += sayılar[i];
// }
// console.log(sonuc);
// **************************************************
// let sonuç = 0;
// for (let i in sayılar) {
//         sonuç += sayılar[i];
// };
// console.log(sonuç);
//!ÖRNEK: İki ayrı dizideki eşleşen indis elemanları birleştirerek ayrı bir diziye saklayan uygulamayı FOR IN ile yazınız.

// const adlar = ["Ahmet", "Can", "Mustafa", "Ayşe", "Elif"];
// const soyAdlar = ["Öztürk", "Yılmaz", "Arı", "Çalı", "Yazı"];

// const concent = (first, last) => {
//   let firstLast = [];
//   for (let i in first) {
//     firstLast[i] = `${first[i]} ${last[i]}`;
//   }
//   return firstLast;
// };
// console.log(concent(adlar, soyAdlar));
// **************************************************
// const birleştir = (x,y) => {
// let adVeSoyadlar = [];
// for (let i in x) {
// adVeSoyadlar[i] = `${x[i]} ${y[i]}`;
// }
// return adVeSoyadlar;
// };
// console.log(birleştir(adlar, soyAdlar))

//?FOR OF DÖNGÜSÜ ILE DIZI ITERASYONU
// • FOR OF Döngüsü FOR IN döngüsünün Syntax’ına çok benzemektedir. • Ancak, FOR OF, bir çok veri yapısı üzerinde çalışabildiği için FOR IN’e göre daha geniş kullanım alanına sahiptir.
// • Diziler, Stringler, Map’ler v.b bir çok veri yapısında kullanılabilir.
// her bır elemanın kendısıne ulasmak ıcın kullanılıyor.
// for (let item of dizi) {
//         console.log(item);
// };
// for ( değişken of veriYapısı) {
//         Döngü içi
// };
//!ÖRNEK: Dizideki elemanların toplamını bulan programı FOR OF ile yazınız.
// const sayılar = [-5, 15, 22, -4, 45, 78, -25];
// let sonuç = 0;
// for (let item of sayılar) {
// sonuç += item; }
// console.log(sonuç);
//!ÖRNEK: Dizideki elemanları birleştirerek tek bir String haline getiren uygulamayı FOR OF ile yazınız.
// let arabalar = ["BMW", "Volvo", "Mini"];
// let yazı = "";
// for (let arac of arabalar) {
// yazı += arac + " ";
// }
// console.log(yazı);

//! Short-circuit: degılsesı olmayan yanı sadece bır seyı olan durumlarda ternary yapı yerıne short-circuit yontemı kullanılır. yanı kosul evet ıse true ıse bunu calıstır. else if veya else sı olmayan durumlardır...
// const findStudentsOf = (arr, search) => {
//   let counter = 0;
//   for (let item of arr) {
//     //? Ternary
//     // search === item ? counter++ : null;

//     //! Short-circuit yöntemi: && => kosul dogru (true) ise ifadeyi calisitir.
//     search === item && counter++;

//     //! Short-circuit yöntemi: || => kosul yanlis (false) ise ifadeyi çalıştır.
//     search === item || counter++;
//   }

//   return !counter
//     ? `${search} can not be found`
//     : `${search} found ${counter} times`;
// };

// const studentName = prompt("Please enter a name").toLowerCase();
// console.log(findStudentsOf(students, studentName));

/*=============================================================================================================================== */
//todo===> && true ıcın || false ıcın kullanılıyor..... react ta cok kullanılıyor...
//! bu sadece 1 durum varsa kullanılmalıdır.
//? her ıkı durum varsa da ternary kullanmak daha mantıklı...
//! 2kenden daha fazla durum varsa ıf else ıf else kullanılmalı...
//? eger 5-6 veya daha fazla durum soz konusu olacaksa swich case yapısı kullanılmalıdır.
/*=============================================================================================================================== */

//?FOREACH METODU ILE DIZI ITERASYONU
// • Array.forEach() bir döngü deyimi değil bir dizi İTERASYON metodudur.
// • Bu metot, bir fonksiyonu parametre olarak alır ve bu fonksiyona göre bir belirtilen dizi üzerinde iterasyon yapılabilir.
// • Avantajı kullanımı kolaydır. Dezavantajı ise döngüyü kırmak ve atlamak mümkün değildir.(break ve contein kullanılamaz)
// • Ayrıca forEach metodu orijinal diziyi değiştirmez. sadece bir kopyasını olusturur...
// * herhangı bır atama yapmadan elemanlarını ve ındex numaralarını yazdırabılırız.
// dizi.forEach((items, index) => {
//         console.log(items);
//         console.log(index);
// });

//!ÖRNEK: Bir dizideki elemanları her birini ayrı ayrı yazdıran uygulamayı forEach metodu ile yazınız.
// let öğrenciler = ["John", "Ali", "Ahmet"];
// öğrenciler.forEach(yazdır);
// function yazdır(v) {
//         console.log(v);
// }
// Daha kısa hali (arrow function)
// öğrenciler.forEach((k) => console.log(k));

//? FOREACH METODUNDA İNDİS KULLANIMI
// • forEach() metodu içerinde çağrılan ya da tanımlanan fonksiyon aslında 3 adet parametre alabilmektedir.
// //! Array.forEach ( function( şuankiDeğer, indis, dizi ) )
// • şuankiDeğer: Seçilen dizi elemanının mevcut değerini
// göstermektedir. Kullanımı ZORUNLUDUR.
// • İndis: Şu anki dizi elemanının sırasını (index) gösterir. OPSİYONEL.
// • Dizi: Şu an ki elemanın ait olduğu dizi nesnesidir. OPSİYONEL.
// NOT: Bu parametrelerin isimlerini kullanıcı belirler ancak sırası
// önemlidir.
// 1. parametre değer (zorunlu)
// 2. index (ıstege baglı)
// 3. dizi (ıstege baglı)

//?-------------- ÖRNEK -------------------
//?  Dizideki herbir fiyati konsola bastiriniz.

// const prices = [100, 250, 50, 89];
// prices.forEach((x) => console.log(x));
// ************************************************
// prices.forEach((p) => console.log(p));

//?prices dızısındekı toplamını konsola yazdırınız?
// let sum = 0;
// prices.forEach((price) => (sum += price));
// console.log("SUM:", sum);
// //! NOT: forEach metodu void metottur.(Herhangi bir deger dondurmez)
// console.log(prices.forEach((price) => (sum += price))); //! undefined

//!forEach metodu void metodudur. return olmadıgı ıcın hıcbır deger dondurmez...

//!ÖRNEK: Belirtilen dizinin her bir elamanının 5 katını alarak ayrı bir dizide saklayan uygulamayı forEach() metodu ile yazınız.
// const dizi5 = [-5, 24, -13, 7];
// const yeniDizi = [];
// dizi5.forEach(katAl);

// function katAl(değer, indis, dizi5) {
// yeniDizi[indis] = değer * 5; }
// console.log(yeniDizi);

//!NOT: Bu örnekte fonksiyon içeresinde dizi5 nesnesi ile işlem yapmadığımız için parametre listesinden silebiliriz. Ancak, indis’i kullanmayıp dizi5 nesnesine ihyacımız olsaydı indis parametresini silemezdik. Eğer silersek sıralama karışacaktır. Bu durumda 3 parametreyi de kullanmamız gerekir.

// Daha kısa hali (ArrowFunction)
// const dizi6 = [-5, 24, -13, 7];
// const yeniDizi = [];
// dizi6.forEach( (d,i) => yeniDizi[i] = d * 5);
// console.log(yeniDizi);

//?-------------- ÖRNEK -------------------
//? prices dizisindeki her bir ara toplam degerini
//? konsola bastiriniz. Ayrica her bir fiyata %10 zam yapiniz.

// let total = 0;
// prices.forEach((price, index, arr) => {
//   total += price;
//   console.log(`${index + 1}.iteration: ${total}`);
//   arr[index] = Math.trunc(price * 1.1); //Math.trunc
// });

// console.log(prices);

//?MAP() METODU
// • Array.map() metodu, bir fonksiyonu parametre olarak alır ve orijinal dizinin kopyasını bu fonksiyona göre modifiye ederek döndürür.
// • Yani bir diziyi transformasyondan geçirmek için map() metodu kullanılabilir.
// • map() metodu orijinal diziyi değiştirmez. Yeni bir dizi oluşturarak döndürür.
// bır degısıklık yapmak ıstıyorsak map kullanmalı.

//!ÖRNEK: Bir dizideki elemanların 5 katını alarak yeni bir diziye kaydeden uygulamayı map() metodu ile yazınız.
// const rakamlar = [3, 7, 17, 8, 9, 3, 0];
// const katAlınmış = rakamlar.map((x) => x * 5);
// console.log(katAlınmış);
// • Bu uygulamayı forEach ile de yapmıştık ancak map() kullanmak çok daha basit.
// • map() metodu, güncellenmiş diziyi doğrudan bir değişkene atmaya izin vermektedir.

//! ÖRNEK: Bir dizideki tüm isimleri BÜYÜK harfe dönüştüren uygulamayı yazınız.

// let names = ["Mustafa", "Murat", "Ahmet", "Mustafa", "Ayşe", "canan"];
// const bigNames = names.map((name) => name.toUpperCase());
// console.log(bigNames, names);

//!ÖRNEK: tlFiyatlar dizisindeki fiyatların Euro ve dolar karşılıklarını hesaplatarak yeni dizlere kaydediniz.
// const euro = 18.23;
// const dolar = 18.19;
// const tlPrices = [100, 150, 100, 50, 80];

// const euroPrices = tlPrices.map((tl) => Number(tl / euro).toPrecision(3)); //toPrecision methodu toplam kac basamaklı olmasını belırtır. uzun kusuratlı sayının tamamını yazmamk ıcın kullanılır
// console.log(euroPrices);

// const dolarPrices = tlPrices.map((tl) => Number(tl / dolar).toFixed(5)); //toFixed vırgulden sonrakı kac basamak yapılacagını belırler.uzun kusuratlı sayının tamamını yazmamk ıcın kullanılır
// console.log(dolarPrices);

//!ÖRNEK: tlFiyatlar dizidekisindeki ürünlere zam yapılmak isteniyor.Fiyatı 100 TL den fazla olanlara %10 zam, 100 TL den az olanlara ise %15 zam yapılmak isteniyor. Ayrıca, zamlı olan yeni değerleri örnekteki gibi diziye saklamak istiyoruz.
// 1.Ürün Zamlı Fiyatı:110
// const değerler = tlFiyatlar.map(function (d,i) {
//         if (d > 100) {
//                 return `${i + 1}. Ürün Fiyatı: ${(d * 1.1).toFixed(2)}`;
// }else {
//         return `${i + 1}. Ürün Fiyatı: ${(d * 1.15).toFixed(2)}`;
// }
// });
// console.log(değerler);
//?-------------- ÖRNEK -------------------
//? products dizisinin icerisindeki her urunu (Orjinal dizideki)
//? buyuk harf olarak degistirelim.

// const products = [
//         "Iphone12",
//         "samsungS20",
//         "lenovo",
//         "macbook pro",
//         "mac air",
//         "Galaxy tablet",
//         "macbook",
//         "Iphone12",
//         "mac air",
//         "lenovo",
//         "macbook pro",
//         "samsungS20",
//       ];
//       //! Orjinal diziyi degistidik.
//       //?For UpperCase
//       // products.map((p, i, arr) => (arr[i] = p.charAt(0).toUpperCase()));

//       //?For Capitilize
//       products.map((p, i, arr) => (arr[i] = p[0].toUpperCase() + p.slice(1)));
//       console.log(products);

//* ======================================================
//*                 FILTER METHOD
//* ======================================================

const salaries = [5500, 8000, 6500, 9000, 10000, 15000, 25000];

//?-------------- ÖRNEK -------------------
//? Maasi 10000'den buyuk olanlari ayri bir diziye saklayalim

// const bigThan = salaries.filter((s) => s > 10000);
// console.log(bigThan, salaries);

// const range = salaries.filter((s) => s >= 6000 && s <= 10000);
// console.log(range);

//?-------------- ÖRNEK -------------------
//? Maasi 9000'den az olanlara %10 zam yaparak bu degerleri
//? yeni diziye saklayalim.

// const lessThan9000Increase = salaries
//   .filter((s) => s < 9000)
//   .map((s) => Math.trunc(s * 1.1));

// console.log(lessThan9000Increase);

// salaries
//   .filter((s) => s < 9000)
//   .map((s) => Math.trunc(s * 1.1))
//   .forEach((s) => console.log(s));

//!***************************REDUCE***************************************
// carpma toplma varsa bu kullanılır.
