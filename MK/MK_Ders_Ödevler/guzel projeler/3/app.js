function getId(id) {
  return document.getElementById(id);
}
function getITem(key) {
  return JSON.parse(localStorage.getItem(key));
}
function setITem(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

let hoursLi = document.querySelectorAll(".hours li");
let minutesLi = document.querySelectorAll(".minutes li");
let secondsLi = document.querySelectorAll(".seconds li");
let tempLi = document.querySelectorAll(".temp li");
let temp = document.querySelector(".temp");
let houR = document.querySelector(".hours");
console.log(houR);
let minute = document.querySelector(".minutes");
let second = document.querySelector(".seconds");

hoursLi.forEach((hour, i) => {
  hour.style.transform = `rotate(${i * 30}deg)`;
});
minutesLi.forEach((hour, i) => {
  hour.style.transform = `rotate(${i * 6}deg)`;
});
secondsLi.forEach((hour, i) => {
  hour.style.transform = `rotate(${i * 6}deg)`;
});
tempLi.forEach((hour, i) => {
  hour.style.transform = `rotate(${i * 6}deg)`;
});

// hava durumu
let method = 0;
let lat = "";
let lon = "";
let tempData;
let myCity;

function myWeather() {
  let api;
  if (!method) {
    if (getITem("myWeatherCity")) {
      myCity = getITem("myWeatherCity");
    } else {
      myCity = prompt("Lütfen şehir ismi giriniz");
      setITem("myWeatherCity", myCity);
    }
    api = `https://api.openweathermap.org/data/2.5/weather?q=${myCity}&appid=09bc43c2b2766264ab1d31380431e0ec&units=metric&lang=tr`;
  } else {
    !(lat && lon) ? ((method = 0), myWeather()) : "";
    api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=09bc43c2b2766264ab1d31380431e0ec&units=metric&lang=tr`;
    method = 0; // sıfırsa inputtan isim girerek 1 ise lan lon girerek kullanmak için burada sıfırlayalım ki inputtan veri girişi kabul etsin
  }

  fetch(api)
    .then((result) => result.json())
    .then((data) => getTempData(data))
    .catch((err) => console.log(err));
}
myWeather();

function getTempData(data) {
  tempData = data;
  console.log(tempData, "temp");
  // getId("weatherImgId").innerHTML =`<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${tempData.weather[0].icon}.svg" alt=""></img>`
  getId(
    "weatherImgId"
  ).innerHTML = `<img src="./icons/${data.weather[0].icon}.png" alt=""></img>`;
  slideTempData(data);
  const myDate = new Date();
  let getDay = myDate.getDate();
  let getMonth = myDate.getMonth() + 1;
  let getYear = myDate.getFullYear();
  let getWeekDay = myDate.getDay();
  let days = [
    " ",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
    "Pazar",
  ];
  getDay < 10 ? (getDay = "0" + getDay) : getDay;
  getMonth < 10 ? (getMonth = "0" + getMonth) : getMonth;
  getYear < 10 ? (getYear = "0" + getYear) : getYear;
  getId("dateDetail").innerHTML = `<h2>${getDay}.${getMonth}.${getYear}</h2>`;
  getId("weekDay").innerHTML = `<h2>${days[getWeekDay]}</h2>`;
}

function slideTempData(data) {
  const {
    name,
    main: { temp, temp_min, temp_max, feels_like },
    sys: { country },
    weather,
    clouds: { all },
    wind: { speed },
  } = data;
  console.log(data);
  let slideData = [
    `<h2>${name}</h2>`,
    `<h2>${Math.round(temp)} °C</h2>`,
    `<h4>Durum: ${weather[0].description}</h4>`,
    `<h4><i class="fa-solid fa-arrow-down"></i> ${Math.round(
      temp_min
    )} °C /  ${Math.round(
      temp_max
    )} °C <i class="fa-solid fa-arrow-up"></i></h4>`,
    `<h4><i class="fa-solid fa-cloud"></i> Clouds: %${all}</h4>`,
    ` <h4><i class="fa-solid fa-temperature-three-quarters"></i> Hissedilen: ${Math.round(
      feels_like
    )}°C</h4>`,
    `<h4><i class="fa-solid fa-wind"></i> Rüzgar H.: ${speed} Km/h</h4>`,
  ];
  let ii = 0;
  let slideDataInterval = setInterval(function () {
    getId("weatherDetail").innerHTML = "";
    getId("weatherDetail").innerHTML = slideData[ii];
    ii++;
    ii == slideData.length ? (ii = 0) : ii;
  }, 4000);
}

let cTemp = setInterval(cT, 1000);
function cT() {
  let tempC = Math.round(tempData.main.temp) - 2;
  tempC < 0 ? (tempC = -tempC + 60) : tempC;
  const myDate = new Date();
  let getHour = myDate.getHours();
  let getMinute = myDate.getMinutes();
  let getSecond = myDate.getSeconds();

  houR.style.transform = `rotate(-${+getHour * 30}deg)`;
  minute.style.transform = `rotate(-${+getMinute * 6}deg)`;
  second.style.transform = `rotate(-${+getSecond * 6}deg)`;
  temp.style.transform = `rotate(-${+tempC * 3}deg)`;
}

window.onload = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      lat = parseFloat(
        Math.round(position.coords.latitude * 100) / 100
      ).toFixed(2);
      lon = parseFloat(
        Math.round(position.coords.longitude * 100) / 100
      ).toFixed(2);
      method = 1; // sıfırsa inputtan isim girerek 1 ise lan lon girerek kullanmak için
      myWeather();
    });
  }
};
