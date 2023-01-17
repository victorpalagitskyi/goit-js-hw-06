const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
// Використовуй масив об'єктів images для створення елементів <img>, вкладених в <li>. Для створення розмітки використовуй шаблонні рядки і метод insertAdjacentHTML().


const makeImg = ({ url, alt }) => {
    const imgEl = document.createElement("img")
imgEl.src = url
imgEl.alt = alt
const liEl = document.createElement("li")
    liEl.classList.add("item")
    
liEl.append(imgEl)
    return liEl
}
const imgBlock = images.map(makeImg).join("")

const blockUl = document.querySelector(".gallery")
blockUl.insertAdjacentHTML("beforeend", "imgBlock")
// console.log(imgBlock)
