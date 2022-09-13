//* ===================================================
//*                 (OBJECTS)
//* ===================================================

//? Diziler sirali bellek bölgeleridir.Bu yuzden dizilere
//? indeksleme ile erisebiliriz. Ancak daha karmasik (unstructured)
//? verilerimiz icin  Object'leri kullanabiliriz.

//? Object'lerde Key-value (property-value) yapisi kullanilir.
//? Herhangi bir veriyi erismek icin property (key) adi kullanilir.

console.log("******* Objects *********");

//! 3 farkli yontem ile Object olusturulabilir
//* ---------------------------------------------------------
//* 1- Object() class'ından new Operatörü ile
//* ---------------------------------------------------------

const arabalar = new Object();
arabalar.marka = "BMW";
arabalar.motor = "1.3";
arabalar.model = 2022;
arabalar.lpg = true;
console.log(arabalar);

//!Read
// console.log(arabalar.lpg); //? .notation
// console.log("MODEL:", arabalar["model"]); //? Square bracket notation

// //? Square bracket yonteminin en buyuk avantaji key degerini
// //? degisken olarak kullanabilmemizdir.
// const key = "marka";
// console.log(arabalar[key]);

// arabalar.motor = "1.6";
// console.log(arabalar); // yaparak bır key ın degerını yenıden atayabılırız. motor artık 1.3 degıl 1.6 olacaktır.

// //* ---------------------------------------------------------
// //* 2- object constructor'i kullanarak (OOP ile ayrintilandirilacak)
// //* ---------------------------------------------------------

// //? Object Constructure-----------------------> bu yontem cok kullanılmamaktadır.
// function Personel(id, ad, maas) {
//   this.id = id;
//   this.ad = ad;
//   this.maas = maas;
//!burada P harfı buyuk yazılmıstır syntax ı bu sekılde.buradakı thıs kelımesı, blok scope ıcerısınde bulundugu mekanın sahıbının yerıne kullanılmaktadır. burada thıs = Personel
// console.log(this); //! Personel objesine baglanmistir (binded)
// }

// const kisi1 = new Personel("1234567890", "Mustafa", 15000);
// const kisi2 = new Personel("177567890", "Canan", 25000);
// // console.log(kisi1);
// console.log(kisi1.ad);
// console.log(kisi2.maas);
// console.log(kisi2["id"]);

// //? Global alanda window objesini gosterir.
// console.log(this);
// window.alert("Merhaba");

//* ---------------------------------------------------------
//* 3- Object literal (En cok tercih edilen yontem)
//* ---------------------------------------------------------
//? bır degıskene, suslu parantez ıcerısınde key-value ıkılılerı seklınde degerler-atamalar yapılması suretıyle tanımlamasıdır.
const worker = {
  name: "Can",
  surname: "Canan",
  age: 33,
  job: "developer",
  languages: ["C++", "Java", "Javacript", "Pyhton", "Go"],
  salary: "140000",
};
console.log(worker); //object verı turunun tum ıkılılerını alfabetık sırayla yazdırır

console.log("JOB:", worker.job);
console.log("Lang:", worker["languages"]); //Array(5) dıye cıktı verır.

console.log(worker.languages[2]); //Javacript

worker["languages"].forEach((l) => console.log(l)); //forEach yontemıyle tum elemanlarını tek tek ekrana yazdırır.

worker.dob = "1990"; // objectımıze yenı key ve valuesını yazarak ekleme yapabılırız.
worker.email = "can@gmail.com";
console.log(worker);

// worker["salary"] = worker["salary"] * 1.1; // her bır maasa 10% zam yaptık.
worker["salary"] *= 1.1;
console.log(worker);

//* Object Copy
const person = worker; //! Shallow (Sig - Sığ) Copying
console.log("PERSON:", person);
//*burada person ısımlı bır degıskene, worker objectını tanımladık-atadık. person artık bır workerdır. heap de worker ın gosterdıgı alanı artık person da gostermektedır. bu sebeple......
//! Object.create(), Object.assign(), spread (...), concat() , slice() -> Shallow Copying

person.dob = 2002;
console.log("PERSON:", person);
console.log(worker);
//*bu sebeple. herhangı bırısınde yapılacak degısıklık aynı sekılde dıgerınde de gerceklesecektır. cunku heap de gosterılen alan degıstıgı ıcın bu hepsı ıcın gecerlı olmaktadır.

//! Deep Copy
let deepCopyOfWorker = JSON.parse(JSON.stringify(worker));
//* JSON.stringify(worker) -----------> tum key ve value ları bırer strınge donusturmektedır.
// console.log(JSON.stringify(worker));

deepCopyOfWorker.dob = "2022"; // burada kendı uhdesıne alıp sadece kendısınde degısıklık yaptıgı ıcın bu degısıklıkten dıgerlerı etkılenmez. worker.dob hala 2002 olmaya devam edecektır.
console.log("DEEP:", deepCopyOfWorker);
// console.log(worker);

//* ======================================================
//*              Object Metotlari
//* ======================================================

const personal = {
  name: "Can",
  surname: "Canan",
  dob: "1990",
  job: "developer",
  salary: "140000",
  drivingLicense: true,
  calculateAge: function () {
    return new Date().getFullYear() - this.dob;
  },
  summary: function () {
    console.log(this); //? window
    return `${this.name} is ${this.calculateAge()} years old`;
  },
  // summary: () => {
  //   console.log(this); //? window
  //   return `${this.name} is ${this.calculateAge()} years old`;
  // },
};

//! NOT: arrow fonksiyonlari ozellikle callback fonksiyonu olarak
//! kullanilmak ve bu fonksiyonlarda this keyword kullanim
//! gereksinimini kaldirmak icin gelistirilmistir.
//! Lexical context'e sahiptirler.Dolayisiyla, bir obje fonksiyonu
//! olarak kullanilirsa, this kelimesi global scope'u (window nesnesini)
//! gösterir. Bunu engellemek için object fonksiyonlarini tanimlarken
//! diger (func. expression veya declaration) yontemlerini kullanabilir.

console.log("Age:", personal.calculateAge());
console.log("SUMMARY:", personal.summary());

// * ======================================================
// *                  OBJECT ITERATION
// * ======================================================

//? nested--->object ıcınde object yazılabılır. peopel obj. 3 tane object turunde elemanı var gıbı dusunulebılır. burda people---> 3 adet person1-2-3 seklınde key i var. bu key lerın karsılıgındakı {....} ıse valuesdır. per bır person ıse ıcınde key-value lar barındıran bır objecttır.
const people = {
  person1: {
    name: "Can",
    surname: "Canan",
    dob: "1990",
    job: "developer",
    salary: "140000",
    drivingLicense: true,
  },
  person2: {
    name: "John",
    surname: "Sweet",
    dob: "1990",
    job: "tester",
    salary: "110000",
    drivingLicense: false,
  },
  person3: {
    name: "Steve",
    surname: "Job",
    dob: "2000",
    job: "developer",
    salary: "90000",
    drivingLicense: true,
  },
};

console.log(people); //? {person1: {…}, person2: {…}}
console.log("Salary of P2:", people.person2.salary);
//!peopel objectın person2 objectının salary key ne ulasmak ıcın bu  sekılde bır syntax yazılır. cok aıst degıl mı :))

//? Javascript'de Objeler default olarak iterable degildir. yanı elemanlarına bolunemzler.
//? Ama for in ve for of donguleri ile itere edilebilirler.

//? Objelerin key ve value'larini okumak icin built-in metotlar vardir.
//? Bu mettotlar aslinda objelerin key ve/veya value'lari bir dizi olarak dondurur.
console.log(Object.keys(people)); //['person1', 'person2', 'person3']
console.log(Object.values(people)); //{name: 'Can', surname: 'Canan', dob: '1990', job: 'developer', salary: '140000', …}, {name: 'John', surname: 'Sweet', dob: '1990', job: 'tester', salary: '110000', …}, {name: 'Steve', surname: 'Job', dob: '2000', job: 'developer', salary: '90000', …}
console.log(Object.entries(people)); //!bu da tum objectlerın tum key ve valuelerını yazdırır oldugu gıbı

//! FOR - IN
//* for (key in object) {
//*   // code block to be executed
//* }

for (let person in people) {
  //!for in de ındıs uzerınden hareketle ulasım saglanır.
  console.log(person); // bu ıkı satırda her seferınde sırayla person1-2-3 yazdırır ve hemen altına
  console.log(people[person]); //o person nun tum key-valuelarını yazdırır. o objectlerı dondurur.
}

//! FOR - OF
//* for (x of iterable) {
//*   code block to be executed
//* }
console.log("****************");
for (let key of Object.keys(people)) {
  //! bu dongude ıse her seferınde objectın keylerınden bır tanesını yazdırır.person1-2-3 seklınde. let key degılde let herhangıBirSey de yazılabılırdı. ama Object.keys sabittir.
  console.log(key); //
}

console.log("****************");
//? people objesindeki tum salary 'leri yazdir
for (let v of Object.values(people)) {
  console.log(v.salary); // her bır person un salarysını yazdırır.
  console.log(v); // her bır personun tum valus yanı tamamını yazdırır.
  // console.log(v["salary"]); //yularıdakıyle aynı ısı gormektedır.
}

//? people objesindeki tum salary 'leri yazdir
for (let [k, v] of Object.entries(people)) {
  //!her bır keyın person1-2-3, hem key adını hem de salarysını yazdırır.
  console.log(`${k} - ${v.salary}`);
}

//! ARRAY METOTLARI ILE
console.log("********");
Object.keys(people).forEach((p) => console.log(p));
console.log("********");
Object.values(people).forEach((p) => console.log(p.surname)); // her keyın valuelarını yazdır ama tum valuelarını degıl, sadece surname valuesını yazdır.

//? job = developer olanlarin dob degelerini yazdiriniz.
console.log("*** DOB ****");
Object.values(people) //valuelara ulasmamız gerekıryor.
  .filter((p) => p.job === "developer") //!bır fıltreleme yapıyoruz. sadece job u developer olanları cekıyoruz.
  .forEach((p) => console.log(p.dob)); //! bu developerların de tum bılgılerını degıl her defasında bırının sadece dob keyını yazdırıyoruz.keyın karsılıgı olan valuesunu...

//********************************************************
//* JSON => Javascript Object Notation
//********************************************************
//  array yontemlerını daha rahat kullanmak ıcın JSON kullanılmaktadır.
const team = [
  { name: "Josh", surname: "Adams", job: "developer", age: 30 },
  { name: "Mary", surname: "Bary", job: "tester", age: 22 },
  { name: "Hazel", surname: "Nut", job: "developer", age: 20 },
]; //* JSON

console.log(team);
console.log(team[2]);

//* Ornek1: team dizisindeki job'lari tek tek yazdiriniz.
//! eger bır degısken-value vs aynen ve tamamı yazılacaksa Arrow fonksıyonlardan forEach kullanmak gerekır.
team.forEach((person) => console.log(person.job));

//* Ornek2: age'leri bir artirarak yeni bir diziye saklayiniz.
const ages = team.map((p) => p.age + 1);
//!eger bır objenın-arrayın bır bır keyının tamamını ve fakat yenı bır transform-degısıklık yapılarak yazılacagı zaman map fonksıyon yontemı kullanılmalı... tamamına ulasacak ve her bırınde bır degısıklık yapacaksak...

//* Ornek3: name ve surname'leri birlestirip buyuk harfe ceviren ve
//* bunu fullName key'i olarak saklayan, ayni zamanda age degerlerini 5
//* arttirarak age key'ine saklayan ve olusan diziyi donduren kodu yazınız.

// const teamFullName = team.map((p) => ({
//   fullName: p.name.toUpperCase() + " " + p.surname.toUpperCase(),
//   age: p.age + 5,
// }));

//?Alternativly
const teamFullName = team.map((p) => {
  return {
    fullName: p.name.toUpperCase() + " " + p.surname.toUpperCase(),
    age: p.age + 5,
  };
});

console.log(teamFullName);

//* Ornek4: Yasi(age) 22 'den kucuk esit olan kisilerin adlarini (name) listeyiniz.

team.filter((p) => p.age <= 22).forEach((p) => console.log(p.name));

//* Ornek5: 22 yasindan kucuk ve esit olanlarin isimlerini diziye saklayiniz.

const teamUnder22 = team.filter((x) => x.age <= 22).map((p) => p.name);
console.log(teamUnder22);
//! map diziye uygulanırsa sonucta bır dızı dondururken; objecte uygulanırsa yenı bır object ortaya cıkarır.

//* Ornek6: ortalama yasi hesaplayiniz.
const avgAges =
  team.reduce((sum, person) => (sum += person.age), 0) / team.length;
console.log(avgAges);
//! aslında sum =acc, person = value olarak yazılır, 3.parametre ıse index tır. 0 ise ilk baslangıc degerıdır. reduce genelde toplama ıslemı ıcın kullanıldıgından etkıız eleman olarak 0 kullanılır, carpma olsaydı 1 ı kullanmamız gerekecejtı.
