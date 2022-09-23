/*
akıs bızım belırledıgımız sıraya gore degıl de calısma hızına gore kuyruk olusturmaalr.
setTimeout; bıze bır zaman olusturuyor. bu nan blokıng code... ıcıne zorunlu parametre alıyor, bırıncısı calıstıracagız callback functıon ıkıncısı de ne zaman calıstıracagını belırten zaman dılımı.
setTimeout(() => {
        console.log("hej");
}, 2000)
ıkı sanıye sonra yazı gelıyor.
ornek;
        console.log("hej ılk");
        setTimeout(() => {
        console.log("hej");
}, 2000)
        console.log("hej son");
burada ekrana cıkıs sıralaması----> hej ılk - hej son - hej seklındedır.

bas belası reklamların kapanması ıcın x bassak da settımeout kullanıldıgı ıcın bellı bır sure gecmeden kapanmıyor.

let counter = 0
setİnterval(() =>{
        console.log(++counter);
}, 1000)
her sanıyede bu clg yazdıracak bır arttıracak her sanıye counter arttacak. durdurmak ıstersek bır ıf bloguyla halledebılırız.

let counter = 0
const intervalId = setİnterval(() =>{
        console.log(++counter);
        if(counter > 4){
                clearInterval(intervalId);
        }
}, 1000);
console.log("Timer Stoped");
///////////////////////////////////////////
fetch API ve ASYNC-AWAIT en cok kullanılan yapılardır.
*/

//*========================================
//*             3- FETCH API
//*========================================

//? Dis kaynaklardan veri getirmek icin kullanilan basit bir arabirimdir.
//? Ag istekleri yapmamizi ve cevaplari yontebilmemize olanak saglar.
//? Javascript ortaminda en cok kullanilan Asenkron islem orneklerinin basinda
//? gelmektedir.

//? fetch() fonksiyonu veri getirmek istediginiz kaynagin yolunu gosteren zorunlu
//? bir parametre almaktadir ve bu istegin cevabini gosteren bir Promise dondurmektedir.

console.log("FETCH");
// let userData;

fetch("https://api.github.com/users")
  .then((res) => {
    // console.log(res);
    //! Error handling
    if (!res.ok) {
      throw new Error("Something went wrong");
    }
    return res.json();
  })
  .then((data) => updateDOM(data))
  .catch((hata) => console.log(hata));

// console.log(userData);

const updateDOM = (users) => {
  console.log(users);
  const userDiv = document.querySelector(".users");
  users.forEach((user) => {
    const { login, avatar_url, following_url } = user;
    userDiv.innerHTML += ` <h2>${login}</h2>
    <img src="${avatar_url}" width="300px" alt="" />
    `;
  });
};

// FeTCH API; asıl amacı network ten bılgı cekmek ıcın kullanılır. dısarıdan verı ceker.dogrudan kullanabılırız.
// apıden verı cekme; rest countrıes.com a gırınız.
// sol tarafta all dıyor mesela

fetch("https://api.github.com/users")
  .then((res) => res.json())
  .then((data) => console.log(data)); //buraya bır ıstek gonderıyor. get dısında baska bısey yapılacaksa ıcıne yazılmalıdır.sadece bu sekılde yazılması gıt verıyı al getır demektır. ılk ham halıne res ıkındı halıne ıse data denır. ı hata olursa da catch ıle yazdırrız. fecth kendısıne bır verı geldıkten sonra bunun bne olduguna bakmaksızın basarılı sayıyor. bız error meselesını kendımız tespıt edıyoruz. "o"k
