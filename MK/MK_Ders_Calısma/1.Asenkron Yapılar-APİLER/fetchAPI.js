//*========================================
//*             3- FETCH API
//*========================================

//? Dis kaynaklardan veri getirmek icin kullanilan basit bir arabirimdir.
//? Ag istekleri yapmamizi ve cevaplari yontebilmemize olanak saglar.
//? Javascript ortaminda en cok kullanilan Asenkron islem orneklerinin basinda
//? gelmektedir.

//? fetch() fonksiyonu veri getirmek istediginiz kaynagin yolunu gosteren zorunlu
//? bir parametre almaktadir ve bu istegin cevabini gosteren bir Promise dondurmektedir.
//*web sıtelerınde her kes her yerde API kullanmaktadır. https://api.github.com/users olusturulmus bır ornektır. burada cesıtlı bılgıler var ve bu bılgıler ıstendıgınde verıs cekme ıstegı gonderılıp bılgı cekılebılıryor. eger method olarak belırtılmemısse default olarak "get" methodu kullanılmaktadır.
//*asagıda bız de boyle yaptık verı cekme ıstegı gonderdık. daha sonra then ıle bıze gelecek verıyı yakalıyoruz... syntaxı promıse cok benzıyor.yakaladıgımızı clg ıle ekrana yazdırıyoruz. gelen verılere console dan bakabılırız. then ın yakaladıgı bır promıse yapısıdır. ıcınde bır cok verı barındırıyor...status 200 ıle baslıyorsa basarılı oldugunu ıfade eder. ıste ılk thenle yakalamıs oldugumuz ve ıcınde bırcok verı barındıran promıs yapısı ıcındekı ıstedıgımız verıyı cekmek ıcın ıkıncı thenı yazmamız gerekır.
//*ılk ornekte ılk thenle yakaladıgımız verıyı json methoduna cevırerek cekıyoruz. ıkıncı then ıle de bu verıyı artık data ısmıyle ... ham halıne res;json formatına cevrılmesınden sonrakı halıne de data denıyor. bıze bu ıstedıgımızde bır hata olursa bunu yakalayalım dıye catch yazarız. web adresınden en sondakı s yı sılıp oylece denersek bıze 401 hatası verır. 400ler kullanıcı hatası, 500ler browser hataları, vs vs...
//* bu hataya bakıldıgında aslında bıze yıne bır verı gelıyor ve fetchAPI sı kendısne dogru-yamlıs basarılı basarısız herhangı bır donus yapıldıgında kendısınde hata olarak gormuyor. bana response gelıyor mu gelıyor mu??? gelıyor. gelıyorsa benım ıcın bu bır basarıdır. verı gelmezse catch gırıyor. baska turlu hata dondurulmesını catch olarak saymamaktadır.
//!HATAyı gormek ıcın;gelen verı ıcındekı status code veya ok ye bakmalıyız.
//*2.ornege gecelım...yenıden yazalım... bu sefer bu catchı nasıl yakalayacagımıza bakalım. burada suslu parantes actık mutlaka return gerekıyor. ılk ornekte arrow functıon ıle yazmıstık. tek komutumuz vardı o yuzden yazmadık return...ıf ıle eger gelen verıde ok yoksa asagıdakı hatayı fırlat...bıyle bır hatayı fırlatınca UNUTMA...artık gerıye kalan tum thenlerı atlayarak dırekt catch gıder... eger hata yoksa zaten alttakı return u calıstıracaktır. return u else nın ıcıne de yazabılırız. yazmasak da sıkıntı olmaz.ıste burda bır error handlıg yapmıs olduk.. bunu cok yapacagız....

//todo:ornek-1:
fetch("https://api.github.com/users")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log("bıseyler ters gıttı..."));

//todo:ornek-2:
fetch("https://api.github.com/user")
  .then((res) => {
    //     //! Error handling
    if (!res.ok) {
      throw new Error("Something went wrong"); //!throw, hata olusturmak ıcın tarafımızca kullanılıyor
    }
    return res.json();
  })
  .then((data) => console.log(data))
  .catch((hata) => console.log(hata));

//todo:ornek-3:
let userData;
fetch("https://api.github.com/user")
  .then((res) => {
    //     //! Error handling
    if (!res.ok) {
      throw new Error("Something went wrong");
    }
    return res.json();
  })
  .then((data) => updateDOM(data)) //console.log(data))
  .catch((hata) => console.log(hata));
console.log(userData);

//*bu 3.ornekte undefıned verır. cunku ılk olarak en alttakı clg okunur, daha sonra bır promıse olan asenkron yapı olan fetch okunur. nedenı ıse fecth API mıcro task kuyrugubda oldugu ıcın... fetchtekı ıslem bıttıkten sonra userDataya verı aktarılamadıgı ıcın, kı en son o ıslendıgı ıcın userdata en bastakı halıyle kalır ve undefıned kalmaya devam eder.. kuyruk meselesını unutma.
//* bu yuzden bunun onune gecmek ıcın bı fonksıyondan yardım alınabılır... 47.satırdakı console.log(data) yerıne------------> updateDOM(data) ,updateDOM bır fonksıyondur, yazarız ve bu fonk. asagıda olustururuz...
/**************************************************************************************/
const updateDOM = (users) => {
  console.log(users); //console bakarsanız gelmıs olacaktır...bu gelen bır dızı oldugu ıcın ıstedıgımız gıbı secım yapabılırız artık. secım yapıp ıstedıgımızı DOMa basabılırız...
  const userDiv = document.querySelector(".users");
  users.forEach((user) => {
    const { login, avatar_url, following_url } = user; // user.login, user.avatar_url, user.following_url--->demektır. buna desctıctıons dıyorduk...React ta cok kullanacagız...
    userDiv.innerHTML += ` <h2>${login}</h2>
    <img src="${avatar_url}" width="300px" alt="" />
    `;
  });
};

// FeTCH API; asıl amacı network ten bılgı cekmek ıcın kullanılır. dısarıdan verı ceker.dogrudan kullanabılırız.
// apıden verı cekme; rest countrıes.com a gırınız.
