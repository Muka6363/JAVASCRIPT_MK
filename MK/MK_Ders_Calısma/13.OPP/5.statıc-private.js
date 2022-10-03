// prıvıte degısken kullanması ıcın parentın gosterdıgı yoldan gtımelıdır. bunu sebebı ıste ızolasyon. encapsuatıon... onunde # olan prıvate degıskendır. get veya set ıle ulasılabılır. okumak ıcın get... degıstırmek ıxıcn set kullanılayor.
//* ======================================================
//*        OOP - Static and Private  (ES6)
//* ======================================================

//? Static degiskenler ve metotlar butun bir class'i ilgilendiren
//? verileri tutmak veya degistirmek icin elverislidir.

//? Eger nesnelerden bagimsiz sadece ilgili class' a ait bir degiskene
//? ihtiyac varsa o zaman static degisken kullanmak mantiklidir.

//! Encapsulation OOP'nin temel unsurlarindan birisidir.
//! Bir class icerisindeki degeri/durumu class disindan dogrudan ve izinsiz erisimlere kapatmak icin kullanilir.

//! Encapsulation private degiskenler ve private metotlar yardimiyla yapilir.
//! ES6 ve sornasinda private degisken ve metotlari belirtmek icin
//! # (hash) kullanilir.

//! Private degiskenler dogrudan erisilemezler. Bunlara erismek icin class icerisinde tanimlanan public (genel) erisimli getter ve setter metotlar kullanilir. bu ozel bır code dur,ancak benım ıstedıgım sekılde kullanabılırsın.
//! .

//! Private metotlara ise class disirasindan da eriselemez.
//! Private metotlara ancak class icerisindeki diger metotlar ile erisilebilir.

class Book {
  #id; //!Private degisken tanimlamasi, buna ılk basta "123456" degerı verelım
  static counter = 0; //! static property tanimlamasi
  constructor(title, author, year) {
    this.author = author;
    this.title = title;
    this.year = year;

    //? Private property
    this.#id = 44;
    this.getTitle = function () {
      return this.title;
    };

    //* static degiskenin degerini degistirdik
    Book.counter++; //! ClasName.propertyName
  }

  //? Class icerisinde public metotlar yardimiyla private degiskenler okunabilir.
  //? Bu tip metotlara getter metot denilir.
  //! getter metotlari class icerisinde tanimlanmalidir. bunu ancak getId metoduyla okuyabılırsın dıye kısıtlama yapmıs.
  getId() {
    return this.#id;
  }

  //? Class icerisinde public metotlar yardimiyla private degiskenlere yazilabilir.
  //? Bu tip metotlara setter metot denilir.
  //! setter metotlar class icerisinde tanimlanmalidir.
  setId(id) {
    this.#id = id;
  }

  getSummary() {
    return `${this.title} was writtten by ${
      this.author
    } so its age is ${this.#computeAge()} `;
  }

  //!private metot tanimlanmsi...basına # mutlaka kullanılmalı. buna dısarıdan erısılemez. bunu ancak claasın ıcerısınde kullanılabılır-erısılebılır. kontrollu erısım ıcın bu yazılır.
  #computeAge() {
    return new Date().getFullYear() - this.year;
  }

  //? static method
  static compareAge(b1, b2) {
    return `Books age difference: ${b1.year - b2.year}`;
  }
}

const book1 = new Book("Simyaci", "Poelho Coelgo", 1988);
console.log(book1.title);

//? Private bir degiskenin degeri class disindan dogrudan okunamaz.
// console.log(book1.#id);

//? Private bir degiskenin degeri class disindan dogrudan degistirilemez
// book1.#id = "11111";

//! Private field '#id' must be declared in an enclosing class (at 5-static-private.js:42:18)
//? Private degiskeni okuma
console.log(book1.getId());

//? Private degiskene deger atama
book1.setId("00000");
console.log(book1.getId());

//!Private metotlar class disirasindan erisilemezler.
//! Ancak class icerisindeki bir metottan erilebilrler.
// console.log(book1.#computeAge());

console.log(book1.getSummary());

const book2 = new Book("ABC", "Ali Veli", 1988);
const book3 = new Book("XYZ", "Ahmet Can", 1988);
const book4 = new Book("XYZ", "Ahmet Can", 1920);

//! Static degiskenlere sadece class uzerinden erisilebilir
console.log(Book.counter);

//! instance'lar üzerinden static degiskenlere erilemez.
console.log(book1.counter);

//? Static metot cagrilmasi
console.log(Book.compareAge(book2, book4));
