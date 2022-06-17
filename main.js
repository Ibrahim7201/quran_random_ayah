const content = document.getElementById("content");
const Surah = document.getElementById("surah");
const Num = document.getElementById("num");
let ayahNum = getRandomInt(1, 6236);
fetch(`https://api.alquran.cloud/v1/ayah/${ayahNum}/ar.asad`)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    content.innerHTML = data?.data?.text;
    Surah.innerHTML = `${data?.data?.surah?.name}`;
    Num.innerHTML = `آية ${data?.data?.numberInSurah}`;
  })
  .catch((error) => {
    console.log(error);
  });
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
