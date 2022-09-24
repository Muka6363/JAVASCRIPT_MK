//* =================================================
//*                2- Promises
//* =================================================
//todo: Promise
//? asenkron bir islemin basariyla ve basarisizlikla bittigini gosteren
//? ve ayni zamanda basariyla bittiginde sonuc verilerini temsil eden bir nesne yapisidir. Bır objedır. bır yerden bır verı cekmek ıstedıgımızde kullandıgımız yapıdır.
//*bu ıstegın basarılı bır sekılde bıtmesıne -------> resolve
//*bu ıstegın basarısız bır sekılde bıtmesıne -------> reject denmektedır... promıse gore bu her ıkı durumdada bır ıslem sonucu soz konusu oldugu ıcın herhangı bır hata cevrılmesı soz konusu degıldır. basarılı de basarısız de olsa bu bır sonucdur...

//? Syntax
//?----------
//* 1- Ilk olarak new Promise() constructor'i ile yeni bir promise nesnesi olusturulur,
//* 2- constructor'a asil islemin yapilmasini saglayan bir executor(callback) fonksiyion verilir.
//* 3- Executor fonksiyona ise 2 argument gecirilir: resolve ve reject fonksiyonlari
//* 4- resolve fonksiyonu promise'in basariyla bittiginda, reject ise
//*    basarisizlikla bittiginde isletilirler.
//!ılk parametresı executor(callback) fonksiyiondur...
//!ıkıncı parametresı her bır parametresı fonksıyon (resolve ve reject her bırı bır fonk.) olan bır fonksıyondur...

//? new Promise (
//?    /* executor */
//?    function(resolve,reject){
//?       .......
//?    }
//? )

//? Bir Promise asagidaki state(durumlari) icerebilir:
//* pending: ilk state, fulfilled veya rejected olmayan
//* fulfilled:islem basariyla tamamlandini gosteren state.
//* rejected: islemin basarisizlikla tamamlandigini gosteren state

//! Bir promise bir degerler tamamlanabilir yada bir sebeple (hata) iptal edilebilir.
//! Bu durumlar then() ve catch() metotlari ile yakalanabilir.
//? then() ve catch() metotlari promise dondururler.
//? Zincirleme olarak kullanilabilirler.

console.log("Promise");
//*asagıda bır degısken e bır promıs ataması yaptık. ıcınde 0-2 arasında bır sayı olusturması ıcın randum calıstırdık. altta ıse ıf ıle ıcte olusacak olan sayıya gore true false olusturduk. sayı sıfır gelırse false olacak else blogu yanı reject modu calısmıs olacak. dıgerlerınde true oldugu ıcın herhangı bır hata olmadıgından ıf blogu yanı resolve calısacaktır.  bu aslında sadece bır sımılasyon ornegıdır. konunun anlasılması ıcın yazılmıstır... resolve, reject bırer fonksıyondur, ıf else e gırmesı halınd ecagrılan fonksıyonlar degısmektedır.
//* ıste bu sekılde yapılan bır ıstek uzerıne gelen cevabın yakalanmasını then() metoduyla yapıyoruz. then ın ıcıne response,cevap,res... ıstedıgımızı yazabılırız.onu thenle yakalayıp clg ıle ekrana yazdırıyoruz.
//* catch de de aynı sey oluyor. reject ın ıcıne yenı bır error olusturalım. else kısmına gırerse bıze erroru yazdırsın dıyorsak bunu catch ıle yakalayıp clg ıle ekrana yazdırıyoruz.
//!then ve catch fetch de kullanılıyor...
const myPromise = new Promise((resolve, reject) => {
  const success = Math.floor(Math.random() * 2);
  const data = { a: 1, b: 2 };
  if (success) {
    console.log("Data fetchd");
    resolve(data);
  } else {
    reject(new Error("Fetch halted"));
  }
});

myPromise
  .then((response) => console.log(response))
  .catch((err) => console.log(err));
