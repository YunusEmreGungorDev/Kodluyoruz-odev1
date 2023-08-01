let fullNameDom = document.querySelector("#fullname");
let fullName = prompt("İsminiz Nedir? ");
let getDateDOM = document.querySelector("#getdate");
let textDOM = document.querySelector("#text");

const days = [
  "Pazar",
  "Pazartesi",
  "Salı",
  "Çarşamba",
  "Perşembe",
  "Cuma",
  "Cumartesi",
];

fullNameDom.innerHTML = `Merhaba, <b>${fullName} </b>! Hoşgeldin`;

function date() {
  var time = new Date();
  let second = time.getSeconds();
  getDateDOM.innerHTML = `${time.getHours()}:${time.getMinutes()}:
${second} ${days[time.getDay()]}`;
  textDOM.innerHTML = `Tarihinde <b>Kodluyoruz Frontend Web Developmend Patikası</b>'nın JavaScript Bölümü 1. Ödevindesiniz`;
}
setInterval(date, 1000);
