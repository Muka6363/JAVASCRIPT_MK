const news = async () => {
  const myKey = "q6gAgiTupMv6njmAXGcb7CKw6cRyzXHB";
  const myUrl = `https://api.nytimes.com/svc/topstories/v2/world.json?api-key=${myKey}`;

  //todo: 1.yontem
  const myWorld = await axios(myUrl);
  const myDiv = document.querySelector(".container");
  let myNew = myWorld.data.results; //her seferınde yazmamak ıcın degıskene atadık
  console.log(myNew);
  myNew.forEach((element) => {
    const { abstract, url, multimedia, byline } = element;
    const myCard = `<div class="card" style="width: 18rem;">
    <img src="${multimedia[0].url}" class="card-img-top"  alt="...">
    <div class="card-body">
      <h5 class="card-title">${byline}</h5>
      <p class="card-text">${abstract}</p>
      <a href="${url}" target="_blank" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>`;

    myDiv.innerHTML = myCard;
  });

  //todo: 2.yontem
  // const res= await fetch(url);
  // const data= await res.json();
  // console.log(data);
  /////////////////////////////////////////////////////////
  //   fetch(myUrl)
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
};

news();
