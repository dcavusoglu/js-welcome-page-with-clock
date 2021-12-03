const isim = prompt("Adınızı giriniz:");
document.getElementById("mesaj").innerText = `Merhaba ${isim} ilk projeme hoşgeldin!`

const tarih = document.getElementById("saatSimdi");
const date = new Date();
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const dayName = document.getElementById("gunAdi");
let hour =  date.getHours();
let minutes = date.getMinutes();
tarih.innerText = hour + ":" + minutes;
dayName.innerText = days[date.getDay()];