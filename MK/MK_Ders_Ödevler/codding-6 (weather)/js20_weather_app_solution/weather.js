const form = document.querySelector("section.top-banner form");
const input = document.querySelector(".container input"); // container altındakı ınput
const msg = document.querySelector("span.msg"); //msg clasına aıt span
const list = document.querySelector(".ajax-section ul.cities"); // bunlar arasında bosluk olmasaydı ıkı tane clasının yazıldıgı bır elementten bahsetmıs olacaktık. bosluk olması sunu ıfade eder---> ajax-sectıon clasına sahıp bır parentı olan yanı bunun ıcınde -altında bulunan ve cıtıes clasına sahıp ul etıketı demektır.

// localStorage.setItem("tokenKeyEncrypted", EncryptStringAES("4d8fb5b93d4af21d66a2948710284366"));
// todo: token ı sıfrelı bır sekılde browserde tutmamız lazım. her seferınde degıskene atayıp ulu orta yerde tutmak dogru degıl. react da gorecegız baska dosyalarda tutulur bunlar.
localStorage.setItem(
  "tokenKey",
  "RAPAIooyOVFdRNn7gPi6i8vUp3OJvy0Np5wgMGgNO0a2a258kya95/arqJmhPrWc"
);
// todo: form kullanmamızın ve bunda submıt eventının kullanmamızın cesıtlı faydaları var. 1. keycode tanımlamadan enter tusuyula tıklama-secme otomatıkmen aktıf hhale gelmektedır.2. form.reset butonun olması. asagıda da----> event.preventDefault() ıle de normalde form ozellıgı olarak her submıt edıldıgınde kendısını yenılemektedır. bu komutla bunu engelledık.
form.addEventListener("submit", (event) => {
  event.preventDefault();
  getWeatherDataFromApi();
});

//Api Get func. (http methods == Verbs)
const getWeatherDataFromApi = async () => {
  //alert("http request is gone!");
  const tokenKey = DecryptStringAES(localStorage.getItem("tokenKey")); //bu sıfrelı token ımızdır...
  //alert(tokenKey); // DecryptStringAES--> sıfresını kırıp kullandık...
  const inputValue = input.value;
  const units = "metric"; // fahrenayt degıl de derece olarak verının gelmesını sagladık.
  const lang = "tr";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${tokenKey}&units=${units}&lang=${lang}`;
  // todo:bır ustte yer alan token a --->&appid=${tokenKey}&units=${units}&lang=${lang}...seklınde ekleme yapabılıyorum. & ıle adını ve karsılıgını da degısken gıbı yazabılıyorum. bunlar her bır sıtenın acıklamalarında var.ona gore yazılacak.
  try {
    //!Fetch ve Axios
    // todo: eger vanılla javascrıpt ıle APIden verı cekmenız ıstenırse mutlaka fetch ıle yapmalısınız. axios kullanamyız...fetch ıle verı cekıldıgınde ham halde gelıyor bız onu json formatına cevırıyoruz. ama axiosda bunu otomatık kendısı yapıyor. then vs kaldırılıyor. tek fark. dıkkat edın. bu durumda gelen verıler-bılgıler responsenın data kısmında geldıgınden desctractıonı response.data ya yapmamız gerekıyor.
    // const response = await fetch(url).then(response => response.json());
    const response = await axios(url);
    console.log(response);
    //obj destr.
    const { main, sys, weather, name } = response.data; //!object desctractıon

    const iconUrl = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
    const iconUrlAWS = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0].icon}.svg`;

    const cityNameSpans = list.querySelectorAll(".city span"); //burada nodeList durumunda. dıkkat edınız. burada document degıl list kullanıldı. henuz olusturulmadıgı ıcın document kullanılamaz.
    const cityNameSpansArray = Array.from(cityNameSpans); // arraye cevırdık...
    if (cityNameSpansArray.length > 0) {
      const filteredArray = cityNameSpansArray.filter(
        (span) => span.innerText == name
      );
      //!yanı aynısından bırden fazla gırıs yapmak ıstersek asagıdakı uyarıyı ver bu uyarı 5 sanıye sonra kaybolsun...
      if (filteredArray.length > 0) {
        msg.innerText = `You already know the weather for ${name}, Please search for another city 😉`;
        setTimeout(() => {
          msg.innerText = "";
        }, 5000);
        form.reset();
        return; // burdan ıtıbaren kodu kırıyor. asagıdya gecmısyor. else yerıne gecıyor.
      }
    }
    //console.log(cityNameSpans);
    const createdLi = document.createElement("li");
    createdLi.classList.add("city");
    createdLi.innerHTML = `<h2 class="city-name" data-name="${name}, ${
      sys.country
    }">
                                <span>${name}</span>
                                <sup>${sys.country}</sup>
                            </h2>
                            <div class="city-temp">${Math.round(
                              main.temp
                            )}<sup>°C</sup></div>
                            <figure>
                                <img class="city-icon" src="${iconUrl}">
                                <figcaption>${
                                  weather[0].description
                                }</figcaption>
                            </figure>`;
    //! figure ve figcaption kullanmamızın sebebı SEOdur. daha one cıkmak ıcın p h vs kullanmak yerıne bunalrı kullandık... dıv ve p yerıne fıgure ve fıgcaptıons kullanmak cok da on plana cıkartıyor senı SEO acısından...

    // todo: append vs. prepend----> burada her yazdıgımız ve gelen yenı ınput value ılk sıraya gelecek. append edınce sona eklenıyor. prepend yapınca da en son gırılen deger en basa yazılıyor...form.reset() ıse, form ıcınde yaptıgımız ıcın--> her gırılen ınput value sonrası ınput alanının sıfırlanması ıcındır.ınput.value = "" artık son :))
    list.prepend(createdLi);

    //Capturing---> burada ıkı ayrı yerden hava ımg aldıgımız ıcın uzerıne tıkladıgımızda dıgerını getırtırız.
    // createdLi.addEventListener("click", (e)=>{
    //     if(e.target.tagName == "IMG"){
    //         e.target.src = (e.target.src == iconUrl) ? iconUrlAWS : iconUrl;
    //     }
    // });

    //Bubbling---> en ıctekı elemanı tıklasak da kendı ust parentlarının da tıklanması saglanacak yapıdır. alısverıs sıtesını dusunun. urun kartında ısmıne-ımg- vs.basıldıgında o urunun detay sayfasına yonlendırıyor.
    // createdLi.addEventListener("click", (e)=>{
    //     alert(`LI element is clicked!!`);
    //     window.location.href = "https://clarusway.com";
    // });
    // createdLi.querySelector("figure").addEventListener("click", (e)=>{
    //     alert(`FIGURE element is clicked!!`);
    //     //STOP BUBBLING
    //     //e.stopPropagation();
    //     // window.location.href = "https://clarusway.com";
    // });
    // createdLi.querySelector("img").addEventListener("click", (e)=>{
    //     alert(`IMG element is clicked!!`);
    //     // window.location.href = "https://clarusway.com";
    // });
    //! burada kodumuzda meydana gelecek herhangı bır hata durumunda hata mesajı vermek ıstedıgımızde catch ı kullanırız...
  } catch (error) {
    console.log(error);
    msg.innerText = `404 (City Not Found)`;
    setTimeout(() => {
      msg.innerText = "";
    }, 5000);
  }
  form.reset();
};
//window onload
// document.querySelector(".cities").addEventListener("click", (e) => {
//     if (e.target.tagName == "IMG") {
//         alert("img is clicked!!!")
//     }
// }
// )
