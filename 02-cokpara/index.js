// Butonlar
const btn = document.querySelector(".kolaBtn");
const iskenderbtn = document.querySelector(".iskenderBtn");
const yatBtn = document.querySelector(".yatBtn");
const evBtn = document.querySelector(".evBtn");
const fabrikaBtn = document.querySelector(".fabrikaBtn");

// toplam butce
const butce = document.querySelector("#toplamButce");

// Kola Sabitler
const fiyatKola = document.querySelector(".fiyatKola");
const kolaMiktari = document.querySelector("#kolaMiktari");
const alinabilecekKolaMiktari = document.querySelector(
  ".alinabilecekKolaMiktari"
);

// Iskender Sabitler
const iskenderFiyat = document.querySelector(".fiyatIskender");
const iskederMiktari = document.querySelector("#iskenderMiktari");
const alinabilecekIskenderMiktari = document.querySelector(
  ".alinabilecekIskenderMiktari"
);

// Yat Sabitler

const yatFiyat = document.querySelector(".fiyatYat");
const yatMiktari = document.querySelector("#yatMiktari");
const alinabilecekYatMiktari = document.querySelector(
  ".alinabilecekYatMiktari"
);

// Ev Sabitler

const evFiyat = document.querySelector(".fiyatEv");
const evMiktari = document.querySelector("#evMiktari");
const alinabilecekEvMiktari = document.querySelector(".alinabilecekEvMiktari");

// Fabrika Sabitler

const fabrikaFiyat = document.querySelector(".fiyatFabrika");
const fabrikaMiktari = document.querySelector("#fabrikaMiktari");
const alinabilecekFabrikaMiktari = document.querySelector(
  ".alinabilecekFabrikaMiktari"
);

// Kola Eventler
btn.addEventListener("click", (e) => {
  butceDegeri = butce.innerHTML;
  kolaFiyat = fiyatKola.innerHTML;
  butce.innerHTML = parseInt(butceDegeri) - parseInt(kolaFiyat);
  kolaMiktari.innerHTML = parseInt(kolaMiktari.innerHTML) + 1;
});

btn.addEventListener("mouseover", (e) => {
  butceDegeri = butce.innerHTML;
  kolaFiyat = fiyatKola.innerHTML;
  alinabilecekKolaMiktari.innerHTML =
    Math.floor(parseInt(butceDegeri) / parseInt(kolaFiyat)) +
    " daha </br> kola alabillirsiniz.";
});

btn.addEventListener("mouseout", (e) => {
  alinabilecekKolaMiktari.innerHTML = " ";
});

// Iskender Eventler
iskenderbtn.addEventListener("click", (e) => {
  butceDegeri = butce.innerHTML;
  fiyatIskender = iskenderFiyat.innerHTML;
  butce.innerHTML = parseInt(butceDegeri) - parseInt(fiyatIskender);
  iskenderMiktari.innerHTML = parseInt(iskenderMiktari.innerHTML) + 1;
});

iskenderbtn.addEventListener("mouseover", (e) => {
  butceDegeri = butce.innerHTML;
  fiyatIskender = iskenderFiyat.innerHTML;
  alinabilecekIskenderMiktari.innerHTML =
    Math.floor(parseInt(butceDegeri) / parseInt(fiyatIskender)) +
    " adet daha </br> iskender alabillirsiniz.";
});

iskenderbtn.addEventListener("mouseout", (e) => {
  alinabilecekIskenderMiktari.innerHTML = " ";
});

// Yat Eventler
yatBtn.addEventListener("click", (e) => {
  butceDegeri = butce.innerHTML;
  fiyatYat = yatFiyat.innerHTML;
  butce.innerHTML = parseInt(butceDegeri) - parseInt(fiyatYat);
  yatMiktari.innerHTML = parseInt(yatMiktari.innerHTML) + 1;
});
yatBtn.addEventListener("mouseover", (e) => {
  butceDegeri = butce.innerHTML;
  fiyatYat = yatFiyat.innerHTML;
  alinabilecekYatMiktari.innerHTML =
    Math.floor(parseInt(butceDegeri) / parseInt(fiyatYat)) +
    " adet daha </br> yat alabillirsiniz.";
});

yatBtn.addEventListener("mouseout", (e) => {
  alinabilecekYatMiktari.innerHTML = " ";
});

// Ev Eventler
evBtn.addEventListener("click", (e) => {
  butceDegeri = butce.innerHTML;
  fiyatEv = evFiyat.innerHTML;
  butce.innerHTML = parseInt(butceDegeri) - parseInt(fiyatEv);
  evMiktari.innerHTML = parseInt(evMiktari.innerHTML) + 1;
});
evBtn.addEventListener("mouseover", (e) => {
  butceDegeri = butce.innerHTML;
  fiyatEv = evFiyat.innerHTML;
  alinabilecekEvMiktari.innerHTML =
    Math.floor(parseInt(butceDegeri) / parseInt(fiyatEv)) +
    " adet daha </br> ev alabillirsiniz.";
});

evBtn.addEventListener("mouseout", (e) => {
  alinabilecekEvMiktari.innerHTML = " ";
});

// Fabrika Eventler
fabrikaBtn.addEventListener("click", (e) => {
  butceDegeri = butce.innerHTML;
  fiyatFabrika = fabrikaFiyat.innerHTML;
  butce.innerHTML = parseInt(butceDegeri) - parseInt(fiyatFabrika);
  fabrikaMiktari.innerHTML = parseInt(fabrikaMiktari.innerHTML) + 1;
});
fabrikaBtn.addEventListener("mouseover", (e) => {
  butceDegeri = butce.innerHTML;
  fiyatFabrika = fabrikaFiyat.innerHTML;
  alinabilecekFabrikaMiktari.innerHTML =
    Math.floor(parseInt(butceDegeri) / parseInt(fiyatFabrika)) +
    " adet daha </br> fabrika alabillirsiniz.";
});

fabrikaBtn.addEventListener("mouseout", (e) => {
  alinabilecekFabrikaMiktari.innerHTML = " ";
});
