const prompt = require("prompt-sync")();
// bu komutu asagıda termınalı calıstırmak ıcın yuklemek zorundayız. aksı takdırde promt calısmayacak hata verecektır. bu arada node_modules folder ını da genel klasorumuzun ıcıne konumlandırdık.

//! ODEV1: Dort Islem Hesap Makinasi (2 Sayı bir operator)

console.log("----------------------------------");
console.log(" ***** Basit Hesap Makinasi ****** ");
console.log("----------------------------------");
const s1 = Number(prompt("1.Sayiyi Giriniz:"));
const islem = prompt("Islemi giriniz: +,-,*, /");
const s2 = +prompt("2.Sayiyi Giriniz:");
let netice = 0;
switch (islem) {
  case "+":
    netice = s1 + s2;
    break;
  case "-":
    netice = s1 - s2;
    break;
  case "*":
    netice = s1 * s2;
    break;
  case "/":
    netice = s1 / s2;
    break;
  default:
    alert("Yanlis islem girisi");
    break;
}
console.log(`${s1} ${islem} ${s2} = ${netice}`);

//! ODEV2 :Clarusway’deki haftalık ders ve etkinlik programınızı, console’dan girilen gün değerine göre çıktı veren kodu switch-case yapısı ile yazınız.
//? Pazartesi, Salı ,Çarşamba, Perşembe -> InClass
//? Cuma -> Teamwork
//? Cumartesi ->  InClass + Workshop
//? Pazar -> Self-Study
//? Aksi takdirde -> Yanlis gun girildi.

const gun = prompt("Lutfen bir gun giriniz: ").toLowerCase();
switch (gun) {
  case "pazartesi":
  case "sali":
  case "carsamba":
  case "persembe":
    console.log("Inclass");
    break;
  case "cuma":
    console.log("Teamwork");
    break;
  case "cumartesi":
    console.log("Inclass ve workshop");
    break;
  case "pazar":
    console.log("Self study.");
    break;
  default:
    console.log("Yanlis gun girildi");
}

//! ODEV3:Maasi asgari ucretten az olanlara %50 zam,fazla olanlara ise %10 zam yapmak istiyoruz.
const maas = Number(prompt("Maasinizi giriniz"));
const asgariUcret = 5500;
const zamliMaas = maas >= asgariUcret ? maas * 1.1 : maas * 1.5;
console.log("NORMAL MAAS:", maas, "ZAMLI MAAS:", Math.trunc(zamliMaas));

//!ODEV4: Kredi Risk Programı
//? Console’dan kişinin gelir ve gider miktarını alan
//? eğer kişinin geliri giderinden en az asgari ücret kadar fazla ise Kredi Verilebilir 🤑
//? değilse Kredi Verilemez 🥺
//? şeklinde çıktı veren kodu Ternary deyimi kullanarak yazınız.

const gider = Number(prompt("Giderlerinizi giriniz"));
const gelir = Number(prompt("Gelirleriniz giriniz"));
const kredi = gelir - gider >= 5000 ? "KREDI ALABILIR 🤑" : " KREDI ALAMAZ 🥺";
console.log(kredi);
