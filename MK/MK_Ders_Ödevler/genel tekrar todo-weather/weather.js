const input = document.getElementById("input");
const btn = document.getElementById("btn");
const sonuc = document.querySelector(".sonuc");
const msg = document.getElementById("msg");
btn.addEventListener("click", () => {
  getweather();
});

let cities = [];
let getweather = async () => {
  const inputValue = input.value;
  const tokenKey = "284053f69dd39dc7792eac7fabcce827";
  const units = "metric";
  //   const lang = "tr";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${tokenKey}&units=${units}`;
  const response = await axios(url);
  console.log(response.data);
  let { main, name, sys, weather } = response.data;

  //   console.log(main, name, weather, sys);
  //   console.log(Math.trunc(main.temp));
  //   console.log(weather[0].main, weather[0].description);
  //   console.log(sys.country);
  if (cities.length == 3) {
    console.log("calisti");
    msg.innerHTML = "3 ten fazla giriş olamaz";
    setTimeout(() => {
      msg.innerText = "";
    }, 2000);
  } else {
    if (cities.includes(name)) {
      alert("bu şehir zaten var");
    } else {
      sonuc.innerHTML += `${Math.trunc(main.temp)} <br/>`;
      sonuc.innerHTML += `${weather[0].description} <br/>`;
      sonuc.innerHTML += `${sys.country} <br/>`;
      sonuc.innerHTML += `${name} <br/>`;
    }
    cities.push(name);
  }
  let name1 = document.querySelectorAll(".card-title");

  //   if (weather[0].description == "clear sky") {
  //     card.classList.add("günesli");
  //   } else if (weather[0].description == "rainy") {
  //     card.classList.add("yagmur");
  //   }
};
