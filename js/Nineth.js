function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const widget = document.querySelector(".widget")
const span = document.querySelector(".color")
const button = document.querySelector(".change-color")
button.addEventListener("click", onButtonChangeColor)
function onButtonChangeColor() {
    span.style.backgroundColor = getRandomHexColor()
}