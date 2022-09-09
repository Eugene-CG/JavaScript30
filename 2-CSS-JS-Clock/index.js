const arrowHr = document.querySelector(".clock__arrow-hr");
const arrowMin = document.querySelector(".clock__arrow-min");
const arrowSec = document.querySelector(".clock__arrow-sec");
const degInOneSecMin = 6;
const degInOneHr = 30;
setInterval(() => {
  const date = new Date();

  const seconds = date.getSeconds() * degInOneSecMin + 90;
  arrowSec.style.transform = `rotate(${seconds}deg)`;

  const minutes = date.getMinutes() * degInOneSecMin + 90;
  arrowMin.style.transform = `rotate(${minutes}deg)`;

  const hours = date.getHours() * degInOneHr + 90;
  arrowHr.style.transform = `rotate(${hours}deg)`;
}, 1000);
