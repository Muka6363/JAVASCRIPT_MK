//* ======================================================
//*  DESTRUCTURING (OBJECT)
//* ======================================================
console.log("****** NEW OPERATORS *******");

const car = {
  name: "BMW",
  model: 1990,
  engine: 1.6,
  colors: ["blue", "purple"],
};

//* 1.YONTEM (Classical)
const name1 = car.name;
const model1 = car["model"];
//! bu sekılde tek tek yazıp ulasabılıyoruz.

//* 2.YONTEM: DESTRUCTURING
const { name: carName, colors, model, engine } = car;
console.log(carName, model, engine, colors);
//! bır degısken keyı yazıp {} ıcıne cagırmayı ıstedıgımız valueların keylerını yazıyoruz. = bılgılerı cekecegımız objectı yazıyoruz.

//* EXAMPLE: NESTED (icice objectler)
const cars = {
  car1: {
    name: "BMW",
    model: 1990,
    engine: 1.6,
  },
  car2: {
    name: "Mercedes",
    model: 2022,
    engine: 2.0,
  },
};

const { car1, car2 } = cars;
console.log(car1, car2);
// ! key degılde objectın kendısını yazarsak, tumunu key+valueları getırır.
const { name: c1Name, model: c1Model } = car1;
const { name: c2Name, model: c2Model } = car2;
//! name ve dıgerlerınden bırden fazla olunca, bu keylerı sıralı baska bırer ısme atamak-esıtlemek gerekıyor. cagırırken de bu yenı ısımlerıne gore cagırmak gerekmektedır.
console.log(c1Name, c2Name);

//* Example
// ! asagıda her bırı bır object olan 3 adet elemanı olan bır array tanımlanmıstır.
const team = [
  {
    name: "Josh",
    surname: "Barry",
    job: "developer",
    age: 30,
  },
  {
    name: "Josh",
    surname: "Barry",
    job: "tester",
    age: 45,
  },
  {
    name: "Hazel",
    surname: "Nut",
    job: "team lead",
    age: 40,
  },
];
console.log(team.length);
console.log(team[0]);
//* Classical
// !elemanlarına ulasmak ıcın forEach ıle o array-obj. keyını yazıp valuesuna
team.forEach((p) => {
  console.log("****************");
  console.log("Name:", p.name);
  console.log("Surname:", p.surname);
  console.log("Job:", p["job"]);
  console.log("Age:", p.age);
});

//* DESTRUCTURING
team.forEach((p) => {
  const { name, surname, job, age } =
    p; /* cagırmayı ıstedıgımız keylerı belırtıyoruz. */
  console.log("****************");
  console.log("Name:", name);
  console.log("Surname:", surname);
  console.log("Job:", job);
  console.log("Age:", age);
});

//* functionund dondurdugu obje dogrudan dest. yapilabilir
const getInfo = () => {
  return {
    id: 1,
    productName: "Iphone",
    price: 30000,
  };
};

console.log(getInfo());
const { productName, price } = getInfo();
console.log("Product Name:", productName);
console.log("Product Price:", price);

//? Fonksyionlarin obje parametreleri dogrudan dest. yapilabilir.
const calculate = ({ id, price }) => {
  console.log(price * 1.1);
};

calculate({ id: 1, price: 3000 });

//* ======================================================
//*  DESTRUCTURING (ARRAY)
//* ======================================================
const names = ["Ahmet", "Mehmet", "İsmet", "Saffet"];

//*Classical
const mehmet = names[1]; //* indexing

//const [p1, p2, p4] = names;bu sekılde sırasıyla elemanları yazdırır. arraylerde yazmasını ıstemedıklerımız yerıne , bos atmamız gerekır
const [p1, p2, , p4] = names;
console.log(p1, p2, p4);

//*======================================================
//*  REST (...)
//* ======================================================

//? REST operatoru kullanici tarafindan girilen degerleri dizi
//? icerisine konumlandirir. Cesitli kullanim alanlari vardir.

//! 1- Bir dizi veya object'deki bazi degerlerden geri kalanlarini
//!    ayri dizi yada objelere kopyalanmasini saglayabilir.

//* REST: (Arrays)
const autos = ["anadol", "reno", "bmw", "mercedes", "ferrari"];

const [anadol, reno, ...restAutos] = autos;
console.log(anadol, reno);
console.log(
  restAutos
); /*arraylerde dıkkat edılmesı gereken sey sıra ıle yazdırılan-cekılenlerın arta kalanlarını ...rest dondurebılır. */

//* REST (Objects)
const personel = {
  pName: "john",
  surname: "smith",
  job: "developer",
  age: 30,
};

const { pName, job, ...ageSurname } = personel; // arrayleerde oldugu gıbı objectlerde sıra ıle yazdırmaya-secmeye gerek yokrur. karısık olarak yazdırılabılır, gerıye kalan karısık yerlerdekıler de ...rest yoluyla secılebılıyor.

console.log(ageSurname);
console.log(pName, job);

//! 2- Bir fonksiyonun argumanlarini diziye cevirmek icin kullanilabilir.

const sum = (x, y) => x + y;

//? hata vermez fakat sadece 2 argumani toplar
console.log(sum(1, 2, 3, 4, 5, 6));

const sumAll = (...numbers) => {
  console.log(numbers); //? (4) [1, 2, 3, 4]
  return numbers.reduce((s, n) => (s += n), 0);
};

console.log("SUM OF NUMBERS:", sumAll(1, 2, 3, 4, 5, 6));

const showName = (name, surname, ...titles) => {
  console.log(
    titles
  ); /** name,surname harıcındekı tum degerlerı tıtles a atamaıs olduk. */
  const summary = `${name} ${surname} is a ${titles.join(" and ")}`; //joın ıle elemanları and ıle basında-sonunda bır bosluk bırakarak bırlestır.
  console.log(summary); //atadıgımız degıskenı yazdırınca yukarıdakı tum ıslemlerın netıcesını gomus olacagız.---->
  //Noah Adams is a Developer and Instr and Professor and Dad
};

showName("Noah", "Adams", "Developer", "Instr", "Professor", "Dad");

//*======================================================
//*  SPREAD (...)
//* ======================================================
// //? Spread operatoru ise iterables olan bir elemani bireysel
//? degerler haline getirir.

const flyingVecihles = ["Aircraft", "Helicopter", "QuadCopter"];
const automobiles = ["Truck", "Bus", "Car", "SUV"];
