function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const widget = document.querySelector(".widget")
const span = document.querySelector(".color")
const button = document.querySelector(".change-color")
button.addEventListener("click", onButtonChangeColor)

function onButtonChangeColor() {
  widget.style.backgroundColor = getRandomHexColor() 
  span.textContent = widget.style.backgroundColor
}