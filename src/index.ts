import "@assets/styles/style.scss";
const BgImg = require("@assets/images/mountain.jpg");

const bodyEl = document.querySelector("body");

if (bodyEl) {
  bodyEl.style.backgroundImage = `url(${BgImg.default})`;
}
