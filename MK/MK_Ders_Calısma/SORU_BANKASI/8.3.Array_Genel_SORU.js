//? ARKADAŞLAR MERHABA. KENDİ KENDİME ÇALIŞMAK İÇİN HAZIRLADIĞIM
//? ÇALIŞMA KODLARINI VE SORULARINI FAYDALI OLMASI ÜMİDİYLE
//? SİZLERLEDE PAYLAŞMAK İSTEDİM. UMARIM FAYDALI OLUR VE
//? JS ARRAY METODLARI HAKKINDA BİLGİLERİMİZ PEKİŞİR.
//****İYİ ÇALIŞMALAR *****/

//todo //BİLİNMESİ GEREKEN 15 JS ARRAY METODU//

01;
find();
02;
includes();
03;
filter();
04;
concat();
05;
push();
06;
join();
07;
sort();
08;
slice();
09;
splice();
10;
every();
11;
some();
12;
reduce();
13;
findIndex();
14;
entries();
15;
map();

//*** 1. find()
//! find() metodu, dizide bir elemanı bulmayı sağlar ve bu elemanı bulduğu anda arama işlemi durdurarak bulunan elemanı döndürür.

//? ÖRNEK
const ogrenciler = [
  { id: 1, name: "Murat", num: 22 },
  { id: 2, name: "Captain", num: 33 },
  { id: 3, name: "Price", num: 44 },
];

console.log(ogrenciler.find((numarası) => numarası.num > 3));
//* Çıktı ==> {id: 1, name: 'Murat', num: 22}. İlk bulduğu anda işlem durdu ve sonucu yazdırdı

////////////////////////////////////////////////////////////////////////////////////////////////////////TODO

//*** 2. includes()
//! includes() metodu ile dizinin belirli bir elemanı içerip içermediğini belirleyebiliriz. Eğer dizi bu değeri içeriyorsa TRUE, içermiyorsa FALSE değeri döndürür.

//? ÖRNEK
let arabalar = ["Tofaş", "Anadol", "Bugatti"];

console.log(arabalar.includes("Tofaş")); //* Çıktı ==> true

console.log(arabalar.includes("Ferrari")); //* Çıktı ==> false

////////////////////////////////////////////////////////////////////////////////////////////////////////TODO

//*** 3. filter()
//! filter() metodu sayesinde belirlediğimiz şarta göre tüm dizi elemanlarını kontrol eden ve şartı sağlayan dizi elemanlarıyla yeni bir dizi oluşturmayı sağlayabiliriz.

//? ÖRNEK
const sayılar = [1, 2, 3, 4, 5, 6, 7];

const filterMetodu = sayılar.filter((sayı) => sayı > 4); //* Sayılar dizisindeki 4'ten büyük sayıları filtreledik.

console.log(filterMetodu); //* Çıktı ==> [5, 6, 7]

console.log(sayılar); //* Çıktı ==> [1,2,3,4,5,6,7]  dizinin orjinali değişmedi!!!

////////////////////////////////////////////////////////////////////////////////////////////////////////TODO

//*** 4. concat()
//! concat() metodu, dizileri birleştirme işlemi yapar ve birleştirilen dizilerden de yeni bir dizi oluşturur.

//? ÖRNEK
const dizi1 = ["Murat", "Captain", "Price", true];

const dizi2 = [1, 2, "JavaScript", 3];

const dizi3 = dizi1.concat(dizi2);

console.log(dizi3); //* Çıktı ==> ['Murat', 'Captain', 'Price', true, 1, 2, 'JavaScript', 3]

////////////////////////////////////////////////////////////////////////////////////////////////////////TODO

//*** 5. push()
//! push() metodu, dizinin sonuna bir veya daha fazla öğe(eleman) ekler ve dizinin yeni halini döndürür.

//? ÖRNEK
const isimler = ["Murat", "Captain", "Price"];

isimler.push(`Messi`);

console.log(isimler); //* Çıktı ==> ['Murat', 'Captain', 'Price', 'Messi']

isimler.push(`Ronaldo`, `Alex`);

console.log(isimler); //* Çıktı ==> ['Murat', 'Captain', 'Price', 'Messi', 'Ronaldo', 'Alex']

////////////////////////////////////////////////////////////////////////////////////////////////////////TODO

//*** 6. join()
//! join() metodu, bir dizinin (veya dizi benzeri bir nesnenin(object)) tüm öğelerini(elemanlarını) belirtilen düzende birleştirir.

//? ÖRNEK
const adlar = ["Murat", "Captain", "Price"];

console.log(adlar.join("*")); //* Çıktı ==> Murat*Captain*Price

console.log(adlar.join("-")); //* Çıktı ==> Murat-Captain-Price

console.log(adlar.join()); //* Çıktı ==> Murat,Captain,Price

console.log(adlar.join(" ")); //* Çıktı ==> Murat Captain Price

console.log(adlar.join("")); //* Çıktı ==> MuratCaptainPrice

////////////////////////////////////////////////////////////////////////////////////////////////////////TODO

//*** 7. sort()
//! sort() metodu, bir dizinin elemanlarını sıralar ve dizinin sıralanmış halini aynı diziye atar.

//? ÖRNEK
const arr = [1, 2, 5, 7, 545, 14, 65, 32, 1000000];

arr.sort();
console.log(arr); //* Çıktı ==> [1, 1000000, 14, 2, 32, 5, 545, 65, 7]

//! UYARI: sort() metodu içine herhangi bir fonksiyon almazsa UTF-16 kod birimine göre sıralama yapar. Yani 16 bitlik kod birimiyle.
//! Sayılarda düzgün bir sıralama yapmak için şunu yapabiliriz.

//? ÖRNEK
arr.sort((a, b) => a - b); //* Küçükten büyüğe sıraladık
console.log(arr); //* Çıktı ==> [1, 2, 5, 7, 14, 32, 65, 545, 1000000]

arr.sort((a, b) => b - a); //* Büyükten küçüğe sıraladık
console.log(arr); //* Çıktı ==> [1000000, 545, 65, 32, 14, 7, 5, 2, 1]

//?STRİNG İFADELER İÇİN ÖRNEK
const kelimeler = ["elma", "armut", "portakal", "muz"];

kelimeler.sort(); //* alfabetik olarak sıraladık
console.log(kelimeler); //* Çıktı ==>  ['armut', 'elma', 'muz', 'portakal']

////////////////////////////////////////////////////////////////////////////////////////////////////////TODO

//*** 8. slice()
//! slice() metodu, dizinin bir bölümünü seçer ve yeni diziyi döndürür.(Bu dizi içerisinde başlangıç ve son arasında(!!!SON DAHİL DEĞİL!!!) tüm elemanları kopyalar.)

//? ÖRNEK
const basketbolcular = ["Lebron", "Kobe", "T-mac", "Jordan"];

console.log(basketbolcular.slice(2)); //* Çıktı ==> ['T-mac', 'Jordan']

////////////////////////////////////////////////////////////////////////////////////////////////////////TODO

//*** 9. splice()
//! splice() metodu diziye eleman eklemeyi ve eleman kaldırmayı sağlar.

const names = ["Murat", "Captain", "Price"];

names.splice(1, 1, "Alex"); //* Index numarası 1 olan 1 elemanı değiştir.

console.log(names); //* Çıktı ==>  ['Murat', 'Alex', 'Price']

////////////////////////////////////////////////////////////////////////////////////////////////////////TODO

//*** 10. every()
//! every() metodu dizideki bütün elemanlar girilen koşulu sağlıyorsa TRUE döndürür. Herhangi biri bu koşulu sağlamıyorsa FALSE döndürür.

//? ÖRNEK
function kucukMu50(eleman, index, dizi) {
  return eleman < 50; //* Dizi elemanlarının 50'den küçük olup olmadığının kontrolünü yapıyoruz
}

[20, 80, 94, 12, 50].every(kucukMu50); //* Çıktı ==> false
[49, 12, 45, 3, 26].every(kucukMu50); //* Çıktı ==> true

////////////////////////////////////////////////////////////////////////////////////////////////////////TODO

//*** 11. some()
//! some() metodu, dizimizde bulunan elemanların en az biri belirlediğimiz kurala uyuyorsa TRUE, hiçbiri uymuyorsa FALSE değeri döndürür.

//? ÖRNEK
function kucukMu30(eleman, index, dizi) {
  return eleman < 30; //* Dizi elemanlarından en az birinin 30'dan küçük olup olmadığının kontrolünü yapıyoruz
}

[70, 80, 94, 42, 50].some(kucukMu50); //* Çıktı ==> false
[89, 52, 15, 3, 26].some(kucukMu50); //* Çıktı ==> true

////////////////////////////////////////////////////////////////////////////////////////////////////////TODO

//*** 12. reduce()
//! reduce() metodu dizinin her değeri için bir işlev yürütür ve sonunda diziyi tek bir değere dönüştürür. Reduce metodunun dönüş değeri, ilk parametresi olan (aşağıdaki örnekte) ilkParametre'de saklanır.

//? ÖRNEK
const numberNumber = [6, 5, 4];

const reduceMetoduOrnek = (ilkParametre, anlıkDeğer) =>
  ilkParametre * anlıkDeğer;

//* 6 * 5 * 4 işlemini yapacak
console.log(numberNumber.reduce(reduceMetoduOrnek)); //* Çıktı ==> 120

//* 10 * 6 * 5 * 4 işlemini yapacak
console.log(numberNumber.reduce(reduceMetoduOrnek, 10)); //* Çıktı ==> 1200

////////////////////////////////////////////////////////////////////////////////////////////////////////TODO

//*** 13. findIndex()
//! findIndex() metodu, test işlevini karşılayan ilk öğenin dizinini döndürür. Eğer hiçbir öğe test işlevini karşılamazsa sonucu -1 olarak döner.

//? ÖRNEK
const array = [6, 17, 2, 45, 61];

//* 20'den büyük elemanı bulmak istiyoruz
const number = (eleman) => eleman > 20;

console.log(array.findIndex(number)); //* Çıktı ==> 3.   20'den büyük ilk elemanın index'ini döndürdü. Yani 45'i

////////////////////////////////////////////////////////////////////////////////////////////////////////TODO

//*** 14. entries()
//! entries() metodu dizideki her dizin için anahtar/değer çiftlerini içeren yeni bir dizi(array) yineleme nesnesi(iterator object) döndürür.

//? ÖRNEK
const dizi123 = ["a", "b", "c"];

const iterator = dizi123.entries();

console.log(iterator.next().value); //* Çıktı ==> [0, 'a']

console.log(iterator.next().value); //* Çıktı ==> [1, 'b']

console.log(iterator.next().value); //* Çıktı ==> [2, 'c']

////////////////////////////////////////////////////////////////////////////////////////////////////////TODO

//*** 15. map()
//! map() metodu, bir dizide değişiklik yaparak yeni bir dizi oluşturmamızı sağlar. Dikkat etmemiz gereken en önemli kısım eski dizide yani orjinal dizide hiçbir değişikliğin olmamasıdır.

//? ÖRNEK
const sayilar = [1, 3, 5, 7, 9];

//* Her elemanı 3 ile çarpıyoruz
const yeniDizi = sayilar.map((sayı) => sayı * 3);

console.log(yeniDizi); //* Çıktı ==> [3, 9, 15, 21, 27]

console.log(sayilar); //* Çıktı ==> [1, 3, 5, 7, 9]
