//* ======================================================
//*             OOP - Object Constructor (ES5)
//* ======================================================

//* Javascript, prototype-temelli bir dildir.
//* Butun JavaScript nesneleri (objects) ozellikleri (properties)
//* ve methotlari bir prototipten miras olarak almaktadir.
//* Object prototipi, prototip miras zincirinin en tepesinde yer almaktadir.
//* Ornegin Date ve Array nesneleri Object.prototype'dan miras almaktadir.

//? Object Constructor
// todo---> function dıye yazılır. parametreler sıralarınır...suslu acılır ve ıcıne herbır parametre this.kelimesiyle bılıkte tanımlanır. ısımlerın aynı olması gerekmez onemlı olan basta yazılanın ıcerde tanımlanmasıı aynı olsun...
function Book(title, author, y) {
  this.author = author;
  this.title = title;
  this.year = y;
  // this.getSummary = function () {
  //   return `${this.title} was writtten by ${this.author} in ${this.year}`;
  // };
}

//? new keyword'u Book Constructor'ini parameterler ile cagirmaktadir.
//? Constructor ise Book nesnesinden bir ornek (instance) olusturmaktadir.
//? Constructor, mantiksal bir ifade iken instance fiziksel bir olusum gibi dusunulebilir.
//? Contructor'da tanimlanmis tum degisken ve fonksiyonlar olusturulan
//? her bir instance'da hayat bulmus olur.
// todo--->  constructor temeldedır... bu temelden olusturulacaklar sa bırır ornek-instancedır. new keyworduyla bırlıkte yazılır. her bır parametreye karsılık gelecek argumanlar da yazılır..
//?instance
const book1 = new Book("Kasagi", "Omer Seyfettin", 1920);

//?instance
const book2 = new Book("Sinekli Bakkal", "H. Edip Adıvar", 1930);

//! Prototype, belirli bir Nesne'nin (Object) tum instance'larina
//! kolay bir sekilde metotlar tanimlamaya izin vermektedir.
//! Prototip alaninda bir metot tanimlamanin avantaji bu metot'un
//! olusan tum instance'larin belleginde yer kaplamamasi ancak tum
//! instance'larin bu metota ulasabilmesidir.
console.log(book2);

Book.prototype.getAge = function () {
  return new Date().getFullYear() - this.year;
};
console.log(book1);

Book.prototype.getSummary = function () {
  return `${this.title} was writtten by ${this.author} in ${this.year}`;
};

Book.prototype.price = 100;
// book1.price = 100;

//* Ornegin Book nesnesinin tum instance'lari getAge() fonksiyonunu miras alabilir.
//* Ancak, getAge() fonksiyonu bellekte sadece bir yer kaplamaktadir.

//* Bir nesnenin prototiplerine .prototype ile erisilebilir.
//* Ancak bir instance'in prototiplerine .__proto__ ile erisilmektedir.

console.log(Book.prototype);
console.log(book1.__proto__);

console.log(book1);
console.log(book1.getSummary());

console.log(book1, book2);

console.log(book1, book2);
console.log(book1.getAge());
console.log(book2.getAge());

//? INHERITANCE (Kalitim - ES5)
//?----------------------------------------------------------

// //? Sub-Class
// function Magazine(title, author, year, month) {
//   Book.call(this, title, author, year);
//   this.month = month;
// }

//! Prototipleri miras almak icin Object.create() metodu kullanabilir.
// Magazine.prototype = Object.create(Book.prototype);

// //? Magazine objesinin yeni bir instance
// const mag1 = new Magazine("Scientific Research", "Einstein", 1926, "Sep");
// console.log(mag1);

// //! Prototipler dogrudan miras olarak gelmez.
// console.log(mag1.getSummary());
// console.log(mag1.getAge());
// console.log(mag1.price);
