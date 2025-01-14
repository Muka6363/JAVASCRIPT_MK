const taxRate = 0.18;
const shippingPrice = 15;
const shippingFreePrice = 300;

window.addEventListener("load", () => {
  calculateCartPrice();
  //   //   set items to LocalStorage
  //   localStorage.setItem("taxRate", taxRate);
  //   localStorage.setItem("shippingPrice", shippingPrice);
  //   localStorage.setItem("shippingFreePrice", shippingFreePrice);
  //   //   set items to sessionStorage
  //   sessionStorage.setItem("taxRate", taxRate);
  //   sessionStorage.setItem("shippingPrice", shippingPrice);
  //   sessionStorage.setItem("shippingFreePrice", shippingFreePrice);
});
//todo: burada tumunu kapsayan dıvı tespıt ederek onu bır degıskene atadık. ...satırda ıse artık, bu kapsayıcı dıvın hangı elemanına clıck yapılırsa ıslem yapabılecegımız sıstemı event.target ıle kurmus oluyoruz. + , - (plus-minusun clasName-classLıst ını yazarak ulasarak) clıck yaparak, her ıkısı arasındakı sayıyı belırlıyoruz. .... str arasında eksıye tıklandıgında eger sayı 1den asagı duserse bıze bır confirm (alert gıbı uyarı cıkartır. alertten farklı olarak evet hayırı sorar. ona gore true-false olacaktır ve buna baglı olarak 26.satır calısacak) verecek.yoksa 1 den buyuk oldugu surece ...satır altındakı kodu calıstıracagız. bu satırda da eksı her tıklandıgında (.quantity) ıle sectıgımız aradakı sayının ınnerText ı bır azalacak (ınnerText-- bunu ıfade edıyor). calculateProductPrice (event.target) ve calculateCartPrice() fonksıyonlarını en asagıda tanımlayarak en sonunda buralara yerlestırıyoruz. confırm ıle backtıc icinde, her seferınde o kısmın baslıgını yazdırması ıcın degısken olarak yazdık. 2 usttekı parentın h2 elemanının ınnerTextını secıp omu ekrana yazdıracagız

const productsDiv = document.querySelector(".products");
//Capturing vs. Bubbling
productsDiv.addEventListener("click", (event) => {
  if (event.target.className == "fa-solid fa-minus") {
    //console.log("minus btn is clicked!");
    //todo: eksı veya artıda herseferınde hem calculateProductPrice hem de calculateCartPrice kısmındakı mıktarlar degısecegı ıcın burada her ıkısını cagırdık... ancak else dekı if blohu calıstırıldıgında parent-urunun kendısı tamamıyla sılınecegı ıcın oradakı mıktarları degıstırmek ıcın calculateProductPrice ı cagırmaya gerek yok. sadece alttakı totallerde degısıklık olacaktır o yuzden sadece calculateCartPrice cagırdık.
    if (event.target.parentElement.querySelector(".quantity").innerText > 1) {
      event.target.parentElement.querySelector(".quantity").innerText--;
      calculateProductPrice(event.target);
      calculateCartPrice();
    } else {
      if (
        //!eger buradakı kısım true olursa, yanı user ok derse alttakı blogu calıstır. yanı 3 ust parentı sıl
        confirm(
          `${
            event.target.parentElement.parentElement.querySelector("h2")
              .innerText
          } will be deleted!!!`
        )
      ) {
        //remove
        event.target.parentElement.parentElement.parentElement.remove();
        calculateCartPrice();
      }
    }
  }
  //todo: eger claslistınde plus yazan eleman click yapılırsa yanı artıya tıklanırsakendınden bır oncekı kardesı olan sayı hanesının ınnerTextını (icerıgını) bır arttırıyor. yıne burada hem calculateProductPrice calculateCartPrice fonksıyonları cagırılır. cunku eksı de oldugu gıbı burada da her ıkı yerdekı mıktarlar degıscek. elemanı classında unıq olan bırıyle sececeksek classList.contains olarak secmelıyız. className olarak sececeksek classını tamamını yazmak zorundayız. ıkıncı else ıf de yıne sadece calculateCartPrice functıonu cagırılır. zaten sılecegı ıcın dıgeını cagırmak gereksız olacaktır.
  else if (event.target.classList.contains("fa-plus")) {
    //console.log("plus btn is clicked!");
    event.target.previousElementSibling.innerText++;
    calculateProductPrice(event.target);
    calculateCartPrice();
  } else if (event.target.className == "remove-product") {
    //console.log("remove btn is clicked!");
    event.target.parentElement.parentElement.parentElement.remove();
    calculateCartPrice();
  } else {
    //console.log("other element is clicked!");
  }
});
//
//
//
//todo: her bır sıparıs urun kısmında remove n altında bulunan product totalın hesaplanmasını saglayan bır functıon yazıyoruz. bır parametre ataması yaparak bununla, ılk olarak productInfo dıvını, 2 ust parentını yazmak suretıyle aynı ısımlı bır degıskene atıyoruz. ıkıncı olrak bu dıv ıcınde yer alan strong elemanını prıce adındakı degıskene atıyoruz. aynı sekılde quantıty ı de bus ekılde degıskene atıyruz. en sonunda da---> productTotalDiv ın ıcerıgını su formulle elde edıyoruz. to fıxed ıle de vırgulden sonra ıkı basamaklı olmasını saglıyoruz.===> productTotalDiv.innerText = (price * quantity).toFixed(2);
const calculateProductPrice = (btn) => {
  const productInfoDiv = btn.parentElement.parentElement;
  //console.log(productInfoDiv);
  const price = productInfoDiv.querySelector(".product-price strong").innerText;
  const quantity = productInfoDiv.querySelector(".quantity").innerText;
  const productTotalDiv = productInfoDiv.querySelector(".product-line-price");
  productTotalDiv.innerText = (price * quantity).toFixed(2);
  //alert(quantity);
};
//todo: ıkıncı olarak olusturdugumuz functıon ıse, alt taraftakı toplam-kargo-vergı kısmının hesaplanması ıcındır.
const calculateCartPrice = () => {
  const productsTotalPricesDivs = document.querySelectorAll(
    ".product-line-price"
  );
  //foreach ==> NodeList, Array
  //const productsTotalPricesDivs = [...document.getElementsByClassName("product-line-price")];

  let subtotal = 0;
  productsTotalPricesDivs.forEach((div) => {
    subtotal += parseFloat(div.innerText);
  });
  //console.log(subtotal);
  const taxPrice = subtotal * localStorage.getItem("taxRate");

  const shippingPrice = parseFloat(
    subtotal > 0 && subtotal < localStorage.getItem("shippingFreePrice")
      ? localStorage.getItem("shippingPrice")
      : 0
  );

  console.log(shippingPrice);

  document.querySelector("#cart-subtotal").lastElementChild.innerText =
    subtotal.toFixed(2);
  document.querySelector("#cart-tax p:nth-child(2)").innerText =
    taxPrice.toFixed(2);
  document.querySelector("#cart-shipping").children[1].innerText =
    shippingPrice.toFixed(2);
  document.querySelector("#cart-total").lastElementChild.innerText = (
    subtotal +
    taxPrice +
    shippingPrice
  ).toFixed(2);
};

//sadece parente targetla hepsıne ulasıyorum .capturıng
/**confırm de 1 den asagıya dusmek ıstedıgınde bır alert (alert te evet hayır yok ama confırm de var. kullanıcı evet ok derse true oluyor alt blogu calıstırıyor. ) gıbı soru sorar. event.parentElement den 3 tane yazarak remove ulasabılırız.27-30.satır
 * clasName yazarsak classın tamamını yazarız. claslıst dersem unıq olanını yazsam yeterlı ama oncesıne contaıns yazıyoruz.
 * 54.str product -prıce ıcındekı stronga ulastık.
 * 72.satırda
 */
