const main = document.getElementById("main");
let ayahNum = getRandomInt(1, 6236);
fetch(`https://api.alquran.cloud/v1/ayah/${ayahNum}/ar.asad`)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    main.innerHTML = data.data.text;
  })
  .catch((error) => {
    console.log(error);
  });
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
