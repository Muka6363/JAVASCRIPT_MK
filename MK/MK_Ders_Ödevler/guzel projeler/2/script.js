//Advertisement
document.querySelector(".ad").addEventListener("click", (e) => {
  e.target.remove();
});
//=======Wather and IP=========//
const getData = async () => {
  const ipApiKey = `at_J0ZI1vbdbS7a6JphnC4AMI1Ajj7mC`;
  const ipUrl = `https://geo.ipify.org/api/v2/country,city?apiKey=${ipApiKey}`;

  const ipResp = await fetch(ipUrl);
  const dataIp = await ipResp.json();

  const currentCity = dataIp.location.city;

  const weatherApiKey = "9ca3f1fa52b86e71f50daf161bce4950";
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&appid=${weatherApiKey}&units=metric`;
  // const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=adana&appid=${weatherApiKey}&units=metric`;

  const wResp = await fetch(weatherUrl);

  const dataW = await wResp.json();

  const extractValues = async () => {
    const temp = await dataW.main.temp;
    const icon = await dataW.weather[0].icon;
    const cityName = await dataW.name;

    console.log(cityName);
    const values = [temp, icon, cityName];
    const iconUrl = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${icon}.svg`;

    const weatherDiv = document.querySelector(".city-name");
    const img = document.querySelector(".weather-wrap img");
    const tempDiv = document.querySelector(".weather-wrap .temp");

    weatherDiv.innerText = cityName;
    img.setAttribute("src", iconUrl);
    tempDiv.innerText = Math.floor(temp) + "°";
  };

  // const finalData = [temp, weather, name];
  extractValues();
};
getData();
const weatherRenderer = () => {
  const weatherDiv = document.querySelector(".weather-wrap");
  weatherDiv.innerText = getData()[2];
};

// =======Analog clock===========//

const hourHand = document.querySelector(".hour");
const minuteHand = document.querySelector(".minute");
const secondHand = document.querySelector(".second");

const setClock = () => {
  const currentDate = new Date();
  const second = currentDate.getSeconds() / 60;
  const minute = (second + currentDate.getMinutes()) / 60;
  const hour = (minute + currentDate.getHours()) / 12;
  // console.log(second);
  setRotation(secondHand, second);
  // console.log(minute);
  setRotation(minuteHand, minute);
  // console.log(hour);
  setRotation(hourHand, hour);
};
const setRotation = (element, rotationRatio) => {
  element.style.setProperty("--rotation", rotationRatio * 360);
};
setClock();

setInterval(setClock, 1000);

// =======Analog clock END===========//
// ========Digital Clock ============//
const setDigitalClock = () => {
  const hour = new Date().getHours();
  const minute = new Date().getMinutes();
  const second = new Date().getSeconds();

  const hourDiv = document.querySelector(".hour-div");
  const minuteDiv = document.querySelector(".minute-div");
  const secondDiv = document.querySelector(".second-div");

  hourDiv.innerText = hour;
  if (hourDiv.innerText < 10) {
    hourDiv.innerText = "0" + hour;
  }
  minuteDiv.innerText = minute;
  if (minuteDiv.innerText < 10) {
    minuteDiv.innerText = "0" + minute;
  }
  secondDiv.innerText = second;
  if (secondDiv.innerText < 10) {
    secondDiv.innerText = "0" + second;
  }
};
setDigitalClock();
setInterval(setDigitalClock, 1000);
const switchToggle = () => {
  document.querySelector(".slider").addEventListener("click", (e) => {
    const analog = document.querySelector(".analog");
    const digital = document.querySelector(".digital");
    const dataCheck = e.target
      .closest(".switch-wrap")
      .querySelector("[data-check]");

    if (dataCheck.getAttribute("data-check") == "analog") {
      dataCheck.setAttribute("data-check", "digital");
      digital.style.display = "flex";
      analog.style.display = "none";
      console.log(dataCheck);
    } else if (dataCheck.getAttribute("data-check") == "digital") {
      dataCheck.setAttribute("data-check", "analog");
      digital.style.display = "none";
      analog.style.display = "flex";
      console.log(dataCheck);
    }
  });
};
switchToggle();

const amPmToggle = () => {
  document.querySelector(".slider2").addEventListener("click", (e) => {
    const digital = document.querySelector(".digital");
    const dataCheck = e.target
      .closest(".switch-wrap2")
      .querySelector("[data-check]");

    if (dataCheck.getAttribute("data-check") == "AM") {
      dataCheck.setAttribute("data-check", "PM");
      digital.style.display = "flex";

      console.log(dataCheck);
    } else if (dataCheck.getAttribute("data-check") == "digital") {
      dataCheck.setAttribute("data-check", "analog");
      digital.style.display = "none";
      analog.style.display = "flex";
      console.log(dataCheck);
    }
  });
};
