//* ======================================================
//*                     TODO APP
//* ======================================================
// local Storage, arayıp bulmak ıcın unıq bı ıd vermek...nex Date().getTime() unıq ıd elde etme ıcın cok kullanıslıdır. css ıcın class; eleman secımı ıcın genelde ıd tercıh edılır. inputa gırılen valueyı bır objeye cevırmelıyızı.
// 12.13.14satır... bısey gırmezse veya sadece bosluk atarsa  (trım ile engelleyebılırız) alert uyarısı verelım.
// 14. gelen valueyı objeye cevırelım.yanı bunu newtodo objesının ıcerısıne alabılırız. bır ıd verelım . new Date() fonksıyonunu kullanlım en kullanıslı yol bu olabılır.
//
//todo: 1
//?Selectors
const addBtn = document.getElementById("todo-button");
const todoInput = document.getElementById("todo-input");
const todoUl = document.getElementById("todo-ul");
//todo: 1

// todos dizisini localStorage'daki veriler ile guncelle
//! eger localStroge'de todos adinda bir item bulunmaz ise bos array atamasi yap.
let todos = JSON.parse(localStorage.getItem("TODOS")) || [];
console.log(todos);

const renderSavedTodos = () => {
  todos.forEach((todo) => {
    createListElement(todo);
  });
};

renderSavedTodos();

//todo: 2
//?valu gırısı yoksa veya sadece bosluk gırılmısse, trım ıle gırılen boslukları sılmıs olacagız.ssadece bosluk olursa da uyarı verecek...
//?girilen degerı bı newtodo ısmınde bır objenın ıcıne yazacagız. bu objenın ıd-completede ve ıcerıgı olan text keylerını olusturacagız. gırılen her bır ınputun valuesunun bu new todoya bır obje olarak aldıktan sınra bunu DOMa basacagız. yanı ekranda cıkartacagız. bunu da HTML sayfamızda olusturdugumuz ul ıcıne ekleyecegımız bırer li elemanı halında bastırmamız gerekmektedır. bundan sonrası ya creatElement seklınde uzun yoldan tek tek, linin icindekş elemanları olusturacagız ya da kısa yol olan innerHTML yolundan yapacagız. asagıda uzun yoldan yapıldı...

addBtn.addEventListener("click", () => {
  if (todoInput.value.trim() === "") {
    alert("PLease enter new todo");
  } else {
    const newTodo = {
      id: new Date().getTime(),
      completed: false,
      text: todoInput.value,
    };
    //todo: 2
    //! yeni bir li elementi olusturup bunu DOM'a bas
    createListElement(newTodo);

    //?Yeni olusturulan todo'yu diziye sakla
    todos.push(newTodo);

    localStorage.setItem("TODOS", JSON.stringify(todos));
    console.log(todos);
    todoInput.value = ""; //her click olduktan sonra ınput alanını sıfırla
  }
});

//todo: 3
//todo== asagıdakı ıkı yesıl == arasında, bır fonksıyon yardımıyla ınputa girilecek verıyı, elemanlarıyla bır li halınde sıfırdan olusturduk.
//==================================================================================================//
function createListElement(newTodo) {
  const { id, completed, text } = newTodo; //!destr. functıonnın sonunda yazıldı...
  //! her bır newtodo ıcerısını gırecek olan li elemanı 1 tane check bır tane text bır de de trash dan olusturgu ıcın. bu elemanları tek tek oluasturup ıcerısıne ıd degerı ve completed class ataması yapacagız.
  //? yeni bir li elementi olustur ve bu elemente obje icerisindeki
  //? id degerini ve completed class'ini ata
  const li = document.createElement("li");
  // li.id = newTodo.id;
  li.setAttribute("id", id); //li nın ıd sını bu sekılde atayabılırız. set Attribute

  //!bunu tum elemanlar olusturulup baglantı yapıldıktan sonra yazdık!!! css de hazırlamıs oldugumuz bır completed classını (kı yukarıdakı objede default olarak false seklınde tanımlamamız gerekıyor. bız ıstedıgımız zaman bu class calıssın syle verılsın. yazı degıssın,ustu cızelsın vs vs... UNUTMA; zaten bır style degısıklıgı genelde bu sekılde yapılıyor. oncesınde bır classı css de hazırlıyorsunuz. bunu bır yere baglı tutuyorsunuz. true olursa bunu cagırıyorsunuz. false ıse zaten bu styleler kullanmıyorsunuz.) true-flas sartına gore li ye ekleyıp-cıkartmayı yazıyoruz asagıda. ternary ıl ede yapılır. 2.sı de short cırcus yontemıyle yapılabılır. (sagındakı true ıse && solundakıkını yap)

  //todo: lı olusturulduktan sonra bu sekılde class kazandırdık
  // newTodo.completed ? li.classList.add("completed") : "";
  completed && li.classList.add("checked");
  //todo: lı olusturulduktan sonra bu sekılde class kazandırdık

  //? okey ikonu olustur ve li elementine bagla
  const okIcon = document.createElement("i"); //olusturduk
  okIcon.setAttribute("class", "fas fa-check"); // bu class kendısıne kazandırdık
  li.appendChild(okIcon); //bunu lı nın bır cocugu yaptık. ona bagladık

  //? todo basligi icin bir p elementi ve yazi dugumu olusturarak li'ye bagla
  const p = document.createElement("p"); //burda sadece ıcı bos bır p elementı olustu.
  const pTextNode = document.createTextNode(text); //bunun ıcerıgını bır dugum olusturarak yapıyoruz
  p.appendChild(pTextNode); //bu dugumu bos olan p nın bır cocugu yaptık. ona bagladık. p nın ıcı oldu
  li.appendChild(p); //ıcı dolu hale helmıs p yı---> lı nın bır cocugu yaptık. ona bagladık

  //? delete ikonu olustur ve li elementine bagla... yukarıda yaptıgımız gıbı
  const deleteIcon = document.createElement("i");
  deleteIcon.setAttribute("class", "fas fa-trash");
  li.appendChild(deleteIcon);

  console.log(li);
  //? meydana gelen li elementini ul'ye child olarak ata
  todoUl.appendChild(li);
}
//==================================================================================================//
//todo: 3

//! Ul elementinin cocuklarindan herhangi birisinden bir event gelirse
//! bunu tespit et ve gerekini yap. (Capturing)parentına verılmesı halınde altındakı cocukların da bundan etkılenmesı
todoUl.addEventListener("click", (e) => {
  console.log(e.target);

  const id = e.target.parentElement.getAttribute("id");
  //! event, bir delete butonundan geldi ise
  if (e.target.classList.contains("fa-trash")) {
    //? delete butonunun parent'ini DOM'dan sil
    e.target.parentElement.remove();

    //? Dizinin ilgili elementini sil
    todos = todos.filter((todo) => todo.id !== Number(id));

    //? todos dizisinin son halini localStorage'e sakla
    localStorage.setItem("TODOS", JSON.stringify(todos));
  } else if (e.target.classList.contains("fa-check")) {
    //! event, bir okey butonundan geldi ise
    //? ilgili li elementinde checked adinda bir class'i varsa bunu sil
    //?  aksi takdirde ekle (DOM)
    e.target.parentElement.classList.toggle("checked");
  }
});

//? Enter tusu ile ekleme mumkun olsun
todoInput.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    addBtn.click();
  }
});

//? Baslangicta input aktif olsun
window.onload = function () {
  todoInput.focus();
};
