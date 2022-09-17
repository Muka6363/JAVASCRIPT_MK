const buton = document.querySelector(".btn");
const myLi = document.querySelector(".myli");
const myi = document.querySelector(".myi");

buton.addEventListener("click", () => {
  myLi.innerHTML = `<li class="myli fs-5 text-white bg-danger">
  Sanlıurfa Ciğköftesi-Lahmacun-Kebap <br />
  <span class="span fs-6">Mekan, Vatan, Toprak ==> El-Ruha </span>
  <button class="btn border border-0 rounded-5">
    <i class="myi bg-white"></i>
  </button>
</li>`;
  // myi.innerHTML("btn d-none");
});
myi.addEventListener("click", () => {
  myi.innerHTML = `<i class="btn bg-danger"></i>
  `;
});
