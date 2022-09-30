const tarif = document.querySelector(".tarih");
const üst = document.querySelector(".üst");
const alt = document.querySelector(".alt");
const span = document.querySelector("span");
const saat = document.querySelector("#saat");
const dakika = document.querySelector("#dakika");
const saniye = document.querySelector("#saniye");
const vakit = document.querySelector("#vakit");
const btn = document.querySelector("#btn");
const body = document.querySelector("body");
const audio = document.querySelector("audio");
const box = document.querySelector(".box");
const uyarı = document.querySelector("#uyarı");

let liste = JSON.parse(localStorage.getItem("LOCAL")) || "";
audio.src = "";
let cuma;
let alr;
alr = liste;
let now = new Date();
let month = new Array();
month[0] = "OCAK";
month[1] = "ŞUBAT";
month[2] = "MART";
month[3] = "NİSAN";
month[4] = "MAYIS";
month[5] = "HAZİRAN";
month[6] = "TEMMUZ";
month[7] = "AĞUSTOS";
month[8] = "EYLÜL";
month[9] = "EKİM";
month[10] = "KASIM";
month[11] = "ARALIK";
let tarih = `${now.toLocaleString().slice(0, 10).split("-").reverse()}`;
tarih = `${now.toLocaleString().slice(0, 2)} ${
  month[now.getMonth()]
} ${now.getFullYear()}`;

let hour = now.getHours();

let hourkey = hour;

let min = now.getMinutes();

let sec = now.getSeconds();
let zam = " AM ";

const bakar = function sas() {
  if (hour > 12) {
    hour = hour - 12;
  }
  if (hourkey >= 12) {
    zam = " PM ";
  }

  sec += 1;
  if (sec == 60) {
    sec = 0;
    min += 1;
    if (min > 59) {
      min = 0;
      hour += 1;
      hourkey += 1;
      if (hourkey > 23) {
        hour = 0;
        hourkey = 0;
      }
      if (hourkey >= 12) {
        zam = " PM ";
      }
      if (hourkey < 12) {
        zam = " AM ";
      }
      console.log(hour);
      if (hour > 12) {
        hour = hour - 12;
      }
      console.log(hour);
    }
  }

  üst.innerText = tarih;
  alt.innerText = `${String(hour).padStart(2, "0")}:${String(min).padStart(
    2,
    "0"
  )}:${String(sec).padStart(2, "0")} `;
  span.innerText = zam;

  cuma = String(hour) + String(min) + String(sec) + zam.trim();

  btn.addEventListener("click", () => {
    saat.value = Number(saat.value);
    dakika.value = Number(dakika.value);
    saniye.value = Number(saniye.value);

    if ((saat.value !== "") & (dakika.value !== "") & (saniye.value !== "")) {
      alr = saat.value + dakika.value + saniye.value + vakit.value;
      uyarı.classList.add("uyarı");
    }
    liste = alr;

    localStorage.setItem("LOCAL", JSON.stringify(liste));
  });
  localStorage.setItem("LOCAL", JSON.stringify(liste));

  if (alr == cuma) {
    foo();
    function foo() {
      body.style.background = "red";

      audio.src = "Şener Şen   İnek Obası Uyaaaannnn.mp3";
      localStorage.setItem("LOCAL", JSON.stringify(liste));
      console.log(audio.src);
      audio.addEventListener(
        "canplaythrough",
        function () {
          setTimeout(function () {
            audio.pause();
          }, 10000);
        },
        false
      );

      console.log(audio.src);
      localStorage.setItem("LOCAL", JSON.stringify(liste));
      box.style.transform = "scale(1)";
      uyarı.classList.remove("uyarı");
      setTimeout(show, 10000);
    }
    function show() {
      body.style.background = " rgba(96, 161, 163, 0.534)";
      box.style.transform = "scale(0.4)";
    }
  }
};
setInterval(bakar, 1000);
